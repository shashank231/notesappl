import React, { useEffect, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useParams, useNavigate } from 'react-router-dom'

const Note = () => {
    const { id: noteId } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
  
    useEffect(() => {
      getNote();
    }, [noteId]);
  
    const getNote = async () => {
      if (noteId === 'new') return;
  
      try {
        const response = await fetch(`/api/notes/${noteId}`);
        if (!response.ok) {
          console.error(`Error fetching note with ID ${noteId}`);
          return;
        }
  
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    const createNote = async () => {
      fetch(`/api/notes/`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
      })
    }
  
    const updateNote = async () => {
      await fetch(`/api/notes/${noteId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
    };
  
    const deleteNote = async () => {
      await fetch(`/api/notes/${noteId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      navigate('/');
    };
  
    const handleSubmit = () => {
      if (noteId !== 'new' && !note.body) {
        deleteNote();
      } else if (noteId !== 'new') {
        updateNote();
      } else if (noteId === 'new' && note !== null) {
        createNote();
      }
  
      navigate('/');
    };
  
    return (
      <div className="note">
        <div className="note-header">
          <h3>
            <button onClick={handleSubmit}>
              <ArrowLeft />
            </button>
          </h3>
          {noteId !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}
        </div>
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          placeholder="Edit note"
          value={note?.body}
        ></textarea>
      </div>
    );
  };
  
  export default Note;