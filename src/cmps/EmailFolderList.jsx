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
        <li onClick={() => handleChange("inbox")}>
          <span className='material-symbols-rounded'>inbox</span>
          <span className='email-folder-item'>Inbox</span>
        </li>
        <li onClick={() => handleChange("star")}>
          <span className='material-symbols-rounded'>grade</span>
          <span className='email-folder-item'>Starred</span>
        </li>
        <li onClick={() => handleChange("sent")}>
          <span className='material-symbols-rounded'>send</span>
          <span className='email-folder-item'>Sent</span>
        </li>
        <li onClick={() => handleChange("trash")}>
          <span className='material-symbols-rounded'>delete</span>
          <span className='email-folder-item'>Trash</span>
        </li>
      </ul>
    </section>
  )
}
