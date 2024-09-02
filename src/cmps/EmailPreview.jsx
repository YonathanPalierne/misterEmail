import { useState } from "react"
import { Link } from "react-router-dom"

export function EmailPreview({ email, onRemove, onToggleStar }) {
  const [showBtns, setShowBtns] = useState(false)

  function toggleDateBtns(ev) {
    ev.target.closest("tr").classList.toggle("hover")
    setShowBtns(prev => !prev)
  }

  return (
    <tr
      onMouseEnter={toggleDateBtns}
      onMouseLeave={toggleDateBtns}
      className={
        email.isRead === true ? "email-preview" : "email-preview notRead"
      }
    >
      <td className='email-from'>{email.from.replace(/@.*/, "")}</td>
      <td className='email-subject'>{email.subject}</td>
      <td
        className='email-starred'
        onClick={() => onToggleStar({ ...email, isStarred: !email.isStarred })}
      >
        {email.isStarred === true ? (
          <span className='material-symbols-sharp'>star</span>
        ) : (
          <span className='material-symbols-outlined'>star</span>
        )}
      </td>
      <td className='email-body'>{email.body.slice(0, 30) + "..."}</td>
      <td>
        {showBtns == false && new Date(email.sentAt).toLocaleDateString()}
        {showBtns == true && (
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
        )}
      </td>
    </tr>
  )
}
