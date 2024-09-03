import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { emailService } from "../services/email.service"

export function EmailEdit() {

    const [email, setEmail] = useState(emailService.createEmail())
    const { onSaveEmail } = useOutletContext()


    function handleChange({ target }) {
        let {  name: field, value, type  } = target
        switch (type) {
          case "range":
            value = +value
          case "number":
            value = +value || 0
            break
          case "chexkbox":
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
