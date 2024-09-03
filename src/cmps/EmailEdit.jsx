import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { emailService } from "../services/email.service"

export function EmailEdit() {

    const [email, setEmail] = useState(emailService.createEmail())
    const { onSaveEmail } = useOutletContext()

    function handleChange({ target }) {
        const { type, name: field, value } = target
        switch (type) {
          case "range":
          case "number":
            value = +target.value || 0
            break
          case "chexkbox":
            value = target.value
            break
          case "select-one":
            switch (target.value) {
              case "true":
                value = true
                break
    
              case "false":
                value = false
                break
    
              default:
                value = target.value
                break
            }
          case "text":
                value = target.value
                break
    
          case "search":
                value = target.value
                break
    
        }
        setFilterByToEdit(prev => ({ ...prev, [field]: value }))
      }

    function onSubmitEmail(ev) {
        ev.preventDefault()
        onSaveEmail(email)

    }

    // const { model, type, batteryStatus } = email
    return (
        <section className="email-edit">
            <Link to="/email"><button className="close-btn">X</button></Link>
            <h1>{email.id ? 'Edit' : 'Add'} Email</h1>
            <form onSubmit={onSubmitEmail}>
                <label htmlFor="model">Model</label>
                <input onChange={handleChange} value={model} type="text" id="model" name="model" />

                <label htmlFor="type">Type</label>
                <select onChange={handleChange} value={type} id="type" name="type"  >
                    <option disabled value="">Choose a type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Office">Office</option>
                </select>

                <label> Battery status {batteryStatus}
                    <input onChange={handleChange} value={batteryStatus} type="range" id="batteryStatus" name="batteryStatus" />
                </label>
                <section className="btns">
                    <button className="btn">Save</button>
                </section>
            </form>
        </section>
    )
}
