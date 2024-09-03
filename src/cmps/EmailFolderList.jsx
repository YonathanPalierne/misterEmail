import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export function EmailFolderList({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange(value) {
    setFilterByToEdit(prev => ({ ...prev, status: value }))
  }

  return (
    <section className='email-folder-list'>
      {/* <ul>
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
      </ul> */}
      <ul>
        <li>
          <NavLink to='/email?status=inbox' onClick={() => handleChange("inbox")}>
            <span className='material-symbols-rounded'>inbox</span>
            <span className='email-folder-item'>Inbox</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/email?status=star' onClick={() => handleChange("star")}>
            <span className='material-symbols-rounded'>grade</span>
            <span className='email-folder-item'>Starred</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/email?status=sent' onClick={() => handleChange("sent")}>
            <span className='material-symbols-rounded'>send</span>
            <span className='email-folder-item'>Sent</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/email?status=trash' onClick={() => handleChange("trash")}>
            <span className='material-symbols-rounded'>delete</span>
            <span className='email-folder-item'>Trash</span>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
