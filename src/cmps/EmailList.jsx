import { EmailPreview } from "./EmailPreview"

export function EmailList({ emails, onRemove, saveEmail }) {
  return (
    <section className='email-list'>
      <table>
        <tbody>
          {emails.map(email => (
            <EmailPreview
              key={email.id}
              email={email}
              onRemove={onRemove}
              saveEmail={saveEmail}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
