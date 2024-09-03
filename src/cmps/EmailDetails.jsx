import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {
  const [email, setEmail] = useState(null)
  const { emailIdDetails } = useParams()

  useEffect(() => {
    loadEmail()
  }, [emailIdDetails])

  async function loadEmail() {
    try {
      const email = await emailService.getById(emailIdDetails)
      setEmail(email)
    } catch (err) {
      console.log(err)
    }
  }
  if (!email) return <div>Loading...</div>

  return (
    <section className='email-details'>
      <div className='email-btns'>
        <span
          className='material-symbols-outlined'
          onClick={() => onRemove(email.id)}
        >
          delete
        </span>
        <Link to={`/email/${email.id}`} className='material-symbols-outlined'>
          visibility
        </Link>
      </div>
      <div>{email.subject}</div>
      <div>{email.from}</div>
      <div>{email.to}</div>
      <div>{email.body}</div>

      {/* <pre>{JSON.stringify(email, null, 2)}</pre> */}
      <Link to='/email'>Back</Link>
      <Link to='/email/r4'>Next</Link>
    </section>
  )
}
