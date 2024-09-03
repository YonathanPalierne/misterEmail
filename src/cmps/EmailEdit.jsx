import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { emailService } from "../services/email.service"

export function EmailEdit({ saveEmail }) {
  const [email, setEmail] = useState(emailService.createEmail())
  // const { saveEmail } = useOutletContext()

  function handleChange({ target }) {
    let { name: field, value, type } = target
    switch (type) {
      case "range":
        value = +value
      case "number":
        value = +value || 0
        break
      case "checkbox":
        value = target.checked
        break
      case "select-one":
        switch (value) {
          case "true":
            value = true
            break
          case "false":
            value = false
            break
        }
    }
    setEmail(prev => ({ ...prev, [field]: value }))
  }

  function onSubmitEmail(ev) {
    ev.preventDefault()
    saveEmail(email)
  }

  const { subject, body, from, to } =
    email

  return (
    <section className='email-edit'>
      <Link to='/email'>
        <button className='close-btn'>X</button>
      </Link>
      <h1>{email.id ? "Edit" : "Add"} Email</h1>
      <form onSubmit={onSubmitEmail}>
        {/* from */}
        <label htmlFor='to'>From</label>
        <input
          onChange={handleChange}
          value={from}
          type='text'
          id='from'
          name='from'
        />
        {/* to */}
        <label htmlFor='to'>To</label>
        <input
          onChange={handleChange}
          value={to}
          type='text'
          id='to'
          name='to'
        />
        {/* to */}
        <subject htmlFor='to'>Subject</subject>
        <input
          onChange={handleChange}
          value={subject}
          type='text'
          id='subject'
          name='subject'
        />
        {/* body */}
        <subject htmlFor='to'>Body</subject>
        <textarea
          onChange={handleChange}
          type='text'
          id='body'
          name='body'
        >
          {body}
        </textarea>
        <section className='btns'>
          <button className='btn'>Save</button>
        </section>
      </form>
    </section>
  )
}
