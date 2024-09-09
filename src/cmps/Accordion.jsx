import { useState } from "react"

export const Accordion = ({ children, title }) => {

    const [isOpen, setIsOpen] = useState(false)
    const openClass = isOpen ? 'open' : ''
    return (
        <section className={`accordion ${openClass}`}>
            <section className="title-container" onClick={() => setIsOpen(isOpen => !isOpen)}>
                <h2>{title}</h2>
                <span>⌄</span>
            </section>
            <section className={`content`}>
                <section className="content-wrapper">{children}</section>
            </section>
        </section >
    )
}