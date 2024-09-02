import { EmailPreview } from "./EmailPreview"

export function EmailList({ emails, onRemove, onToggleStar }) {
  return (
    <section className='email-list'>
      <table>
        <tbody>
          {emails.map(email => (
            <EmailPreview
              key={email.id}
              email={email}
              onRemove={onRemove}
              onToggleStar={onToggleStar}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
