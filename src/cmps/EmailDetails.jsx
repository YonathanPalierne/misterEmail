import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {

    const [ email, setEmail ] = useState(null)
    const { emailId } = useParams()

    useEffect(() => {
        loadEmail()
    }, [emailId])

    async function loadEmail() {
        const email = await emailService.getById(emailId)
        setEmail(email) 
    }

    return <section className="email-details">
        <h1>Details</h1>
        <pre>{JSON.stringify(email, null, 2)}</pre>
        <Link to="/email" >Back</Link>
        <Link to="/email/r4" >Next</Link>
    </section>
}