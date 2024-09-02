import { Link } from "react-router-dom"

export function EmailPreview({ email }) {
  return (
    <>
      <td>{email.from.replace(/@.*/, "")}</td>
      <td className="email-subject">{email.subject}</td>
      <td className="email-body">{email.body.slice(0, 30) + '...'}</td>
      <td>{new Date(email.sentAt).toLocaleDateString()}</td>
      <td>
        <button onClick={() => onRemove(email.id)}>x</button>
      </td>
      <td>
        <Link to={`/email/${email.id}`}>Details</Link>
      </td>
    </>
  )
}
