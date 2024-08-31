import { useEffect, useState } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from '../cmps/EmailList'
import { EmailFilter } from "../cmps/EmailFilter"

export function EmailIndex() {
    const [ emails, setEmails ] = useState(null)

    const defaultFilter = emailService.getDefaultFilter()
    const [ filterBy, setFilterBy ] = useState(defaultFilter)

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    async function loadEmails() {
        try {
            const emails = await emailService.query(filterBy)
            setEmails(emails)
        } catch (err) {
            console.log(err)            
            alert('Couldnt load emails')
        }
    }

    async function removeEmail(emailId) {
        try {
            await emailService.remove(emailId)
            setEmails(emails => emails.filter(email => email.id !== emailId))
        } catch (err) {
            console.log(err)            
            alert('Couldnt remove email')
        }
    }

    function onFilterBy(filterBy) {
        setFilterBy(filterBy)
    }
    
    if(!emails) return <div>Loading...</div>
    return <section className="email-index">
        <h1>Welcome to Emails!</h1>
        <EmailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <EmailList emails={emails} onRemove={removeEmail}/>
    </section>

}
