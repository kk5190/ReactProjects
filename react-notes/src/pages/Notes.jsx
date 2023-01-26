import {CiSearch} from 'react-icons/ci'
import {BsPlusLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'

import NoteItem from '../components/NoteItem'
import { useState } from 'react'

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  
  const handleSearch = (e) => {
    const query = e.target.value;
    setText(query)
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(query.toLowerCase())){
        return note
      }
    }))
  }
  return (
    <section>
      <header className="notes__header">
        { !showSearch && <h2>My Notes</h2> }
        { showSearch && <input type="text" autoFocus placeholder='Keyword...' value={text} onChange={(e) => {handleSearch(e)}} /> }
        <button className='btn' onClick={()=>setShowSearch(!showSearch)}><CiSearch /></button>
      </header>
      <div className="notes__container">
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link to="/create-note" className='btn add__btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes