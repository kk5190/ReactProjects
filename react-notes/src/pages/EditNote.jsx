import { Link, useNavigate, useParams } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useState } from "react"
import useCreateDate from "../utils/useCreateDate"

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams()
  const note = notes.find((item) => item.id == id)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && details) {
      const newNote = {
        ...note, title, details, date
      }
      const newNotes = notes.map(item => {
        if (item.id == id) {
          item = newNote
        }
        return item
      })
      setNotes(newNotes)
      navigate('/')
    }
  }

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id != id)
    setNotes(newNotes)
    navigate('/')
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className='btn'><IoIosArrowBack ></IoIosArrowBack></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
        <button className="btn lg danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
      <input type="text" placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Note details..' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote