import { MdSearch } from 'react-icons/md';
import '../App.css'
import { useState } from 'react';


const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    const [search, setSearch] = useState('');

  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
        <MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					setSearch(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>

{
    search?
        sortedNotes.filter((note) => {
            let searchi = note.title + note.category;
            return searchi.toLowerCase().includes(search.toLowerCase());
        }).map(({ id, title, body, category, lastModified }, i) => {
            return (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <strong>{category}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>    
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          )}):null

  }
            




  <h1>All Notes</h1>
          {sortedNotes.map(({ id, title, body, category, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <strong>{category}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;