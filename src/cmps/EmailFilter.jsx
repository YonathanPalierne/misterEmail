import { useEffect, useState } from "react"
// import { useEffectUpdate } from "../customInput/useEffectUpdate"

export function EmailFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

//   useEffectUpdate(() => {
//     onSetFilterBy(filterByToEdit)
//     return () => {
//         console.log('before change');
//     }
// }, [filterByToEdit])

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const { type, name } = target
    let value
    switch (type) {
      case "range":
      case "number":
        value = +target.value || 0
        break
      case "checkbox":
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
  console.log('filter render', filterBy);

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
        <option value={filterByToEdit.isRead}></option>
        <option value='true'>read</option>
        <option value='false'>not read</option>
        <option value=''>all</option>
      </select>
    </section>
  )
}
