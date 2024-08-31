import { useEffect, useState } from "react"

export function EmailFilter({ filterBy, onFilterBy }) {

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const { type, name } = target
        const value = type === 'number' ? +target.value : target.value
        setFilterByToEdit(prev => ({ ...prev, [name]: value }))
    }

    return <section className="email-filter">
        <label htmlFor="model">Model</label>
        <input 
            value={filterByToEdit.model} 
            onChange={handleChange}
            id="model" 
            name="model" 
            type="text" />
        
        <label htmlFor="battery">Battery Status</label>
        <input 
            value={filterByToEdit.minBatteryStatus} 
            onChange={handleChange}
            id="battery" 
            name="minBatteryStatus" 
            type="number" />

    </section>
}