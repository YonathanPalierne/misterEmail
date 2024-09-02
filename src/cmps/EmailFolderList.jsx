import { useEffect, useState } from "react"

export function EmailFolderList({ filterBy, onFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange(value) {
    setFilterByToEdit(prev => ({ ...prev, status: value }))
  }

  return (
    <section className='email-folder-list'>
      <ul>
        <li onClick={() => handleChange("inbox")}>inbox</li>
        <li onClick={() => handleChange("starred")}>starred</li>
        <li onClick={() => handleChange("sent")}>sent</li>
        <li onClick={() => handleChange("trash")}>trash</li>
      </ul>
    </section>
  )
}
