import { useEffect, useState } from "react"
import { useParams } from "react-router"

import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { EmailFilter } from "../cmps/EmailFilter"
import { EmailFolderList } from "../cmps/EmailFolderList"
import { Outlet } from "react-router-dom"

export function EmailIndex() {
  const [emails, setEmails] = useState(null)
  const { emailId } = useParams()

  const defaultFilter = emailService.getDefaultFilter()
  const [filterBy, setFilterBy] = useState(defaultFilter)

  useEffect(() => {
    loadEmails()
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

  function onFilterBy(filterBy) {
    setFilterBy(filterBy)
  }

  if (!emails) return <div>Loading...</div>
  return (
    <section className='email-index'>
      <aside className='email-index-aside'>
        <button>Compose</button>
        <EmailFolderList filterBy={filterBy} onFilterBy={onFilterBy} />
      </aside>
      <section className='email-index-content'>
        <EmailFilter filterBy={filterBy} onFilterBy={onFilterBy} />
        {emailId && <Outlet onRemove={removeEmail}/>}
        {!emailId && <EmailList emails={emails} onRemove={removeEmail} onToggleStar={saveEmail} />}
      </section>
    </section>
  )
}
