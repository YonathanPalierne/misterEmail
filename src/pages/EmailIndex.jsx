import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"

import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { EmailFilter } from "../cmps/EmailFilter"
import { EmailFolderList } from "../cmps/EmailFolderList"
import { Outlet, useSearchParams } from "react-router-dom"
import { debounce, getExistingProperties } from "../services/util.service"

export function EmailIndex() {
  const [emails, setEmails] = useState(null)
  const { emailId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterBy, setFilterBy] = useState(emailService.getFilterFromSearchParams(searchParams))
  const onSetFilterByDebounce = useRef(debounce(onSetFilterBy, 400)).current

  useEffect(() => {
    loadEmails()
    setSearchParams(getExistingProperties(filterBy))
  }, [filterBy, emails])

  async function loadEmails() {
    try {
      const emails = await emailService.query(filterBy)
      setEmails(emails)
    } catch (err) {
      console.log(err)
      alert("Couldnt load emails")
    }
  }

  async function removeEmail(emailId) {
    try {
      await emailService.remove(emailId)
      setEmails(emails => emails.filter(email => email.id !== emailId))
    } catch (err) {
      console.log(err)
      alert("Couldnt remove email")
    }
  }

  async function saveEmail(email) {
    try {
      await emailService.save(email)
      setEmails(emails)

    } catch (err) {
      console.log(err)
      alert("Couldnt remove email")
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
        <button>Compose</button>
        <EmailFolderList filterBy={{ status }} onSetFilterBy={onSetFilterByDebounce} />
      </aside>
      <section className='email-index-content'>
        <EmailFilter filterBy={{ txt, isRead }} onSetFilterBy={onSetFilterByDebounce}/>
        {emailId && <Outlet onRemove={removeEmail}/>}
        {!emailId && <EmailList emails={emails} onRemove={removeEmail} onToggleStar={saveEmail} />}
      </section>
    </section>
  )
}
