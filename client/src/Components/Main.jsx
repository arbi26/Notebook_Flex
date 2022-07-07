import '../App.css'


const Main = ({ activeNote, onUpdateNote }) => {
const categories = ['Select your category', 'School', 'Sports','Personal Life']
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };


  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
        
        
      <div className="app-main-note-edit">
        <p>Category: {activeNote.category}</p>
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        <select name="category" value={activeNote.category} onChange={(e) => onEditField("category", e.target.value)} className="ml-0">
        {
            categories.map((category, i) => {
                return (
                <option value={category} key={i} >{category}</option>)
            })
        }
        </select>
</div>
      {/* <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div> */}
    </div>
  );
};

export default Main;
