import { EmailPreview } from "./EmailPreview"

export function EmailList({ emails, onRemove }) {
  return (
    <section className='email-list'>
      <table>
        <tbody>
          {emails.map(email => (
            <tr key={email.id} className={email.isRead === true ? 'email-preview' : 'email-preview notRead'}>
              <EmailPreview  email={email} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
