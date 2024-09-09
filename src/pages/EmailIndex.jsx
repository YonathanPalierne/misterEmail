import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { EmailDetails } from "../cmps/EmailDetails"
import { EmailEdit } from "../cmps/EmailEdit"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { EmailFilter } from "../cmps/EmailFilter"
import { EmailFolderList } from "../cmps/EmailFolderList"
import { Outlet, useSearchParams, useNavigate } from "react-router-dom"
import { debounce, getExistingProperties } from "../services/util.service"
import { Link } from "react-router-dom"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
// import { useEffectUpdate } from "../customInput/useEffectUpdate"


export function EmailIndex() {
  const navigate = useNavigate()

  const [emails, setEmails] = useState(null)
  const { emailIdDetails } = useParams()
  const { emailIdEdit } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(emailService.getFilterFromSearchParams(searchParams))
  const onSetFilterByDebounce = useRef(debounce(onSetFilterBy, 400)).current
  // const onSetFilterByDebounce = useRef(onSetFilterBy).current

  const [dyncmps, setDyncmps] = useState({
    saveEmail: saveEmail,
    removeEmail: removeEmail,
    emails: null,
  })

  useEffect(() => {
    loadEmails()
    setSearchParams(getExistingProperties(filterBy))
  }, [filterBy])

//   useEffectUpdate(() => {
//     onSetFilterBy(filterByToEdit)
//     return () => {
//         console.log('before change');
//     }
// }, [filterByToEdit])

  async function loadEmails() {
    try {
      const emails = await emailService.query(filterBy)
      setEmails(emails)
      setDyncmps(prev => ({ ...prev, emails: emails }))
    } catch (err) {
      console.log(err)
      alert("Couldnt load emails")
    }
  }

  async function removeEmail(emailId) {
    try {
      await emailService.remove(emailId)
      setEmails(emails => emails.filter(email => email.id !== emailId))
      showSuccessMsg(`Email (${emailId}) removed successfully!`)
    } catch (err) {
      console.log(err)
      showErrorMsg("Couldnt remove email")
    }
  }

  async function saveEmail(email) {
    try {
      const emailToSave = await emailService.save(email)
      if (!email.id) {
        setEmails(emails => [...emails, emailToSave])
      } else {
        setEmails(emails =>
          emails.map(_email =>
            _email.id === emailToSave.id ? emailToSave : _email
          )
        )
      }
      navigate("/email")
    } catch (err) {
      console.log(err)
      showErrorMsg("Couldnt save email")
    }
  }

  function onSetFilterBy(filterBy) {
    setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
  }

  

  if (!emails) return <div>Loading...</div>
  const { status, txt, isRead } = filterBy

  return (
    <section className='email-index'>
      <aside className='email-index-aside'>
        <Link className='compose-email' to='/email/edit/new'>
          <span className='material-symbols-outlined'>edit</span>
          Compose
        </Link>
        <EmailFolderList
          filterBy={{ status }}
          onSetFilterBy={onSetFilterByDebounce}
        />
      </aside>
      <section className='email-index-content'>
        <EmailFilter
          filterBy={{ txt, isRead }}
          onSetFilterBy={onSetFilterByDebounce}
        />

        <DynamicCmp
          emailIdEdit={emailIdEdit}
          emailIdDetails={emailIdDetails}
          {...dyncmps}
        />
      </section>
    </section>
  )
}
function DynamicCmp({ emailIdEdit, emailIdDetails, ...dyncmps }) {
  const choice = emailIdEdit
    ? "emailIdEdit"
    : emailIdDetails
    ? "emailIdDetails"
    : "listing"

  const dynamicCmps = {
    emailIdDetails: <EmailDetails />,
    emailIdEdit: <EmailEdit {...dyncmps} />,
    listing: <EmailList {...dyncmps} />,
  }

  return dynamicCmps[choice]
}
