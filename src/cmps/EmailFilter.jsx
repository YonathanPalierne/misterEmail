import { useEffect, useState } from "react"

export function EmailFilter({ filterBy, onFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const { type, name } = target
    let value
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
    setFilterByToEdit(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className='email-filter'>
      <input
        value={filterByToEdit.txt}
        onChange={handleChange}
        id='txt'
        name='txt'
        type='search'
        placeholder='search...'
      />

      <select name='isRead' id='isRead' onChange={handleChange}>
        <option value='true'>{filterByToEdit.isRead}</option>
        <option value='true'>true</option>
        <option value='false'>false</option>
        <option value=''>both</option>
      </select>
    </section>
  )
}
