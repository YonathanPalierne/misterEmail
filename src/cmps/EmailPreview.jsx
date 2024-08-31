export function EmailPreview({ email }) {
    return <section className="email-preview">
        <img src={`https://robohash.org/${email.id}`} alt="" />
        <h3>{email.model}</h3>
        <p>{email.type}</p>
        <p>{email.batteryStatus}</p>
    </section>
}