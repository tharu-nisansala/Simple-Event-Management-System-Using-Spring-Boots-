import { useState } from 'react';
import './EventForm.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function EventForm() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [venue, setVenue] = useState('');
  const [capacity, setapacity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e, status) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post('http://localhost:8080/api/v1/addEvent', {
        title,
        description,
        dateTime,
        venue,
        capacity,
        status, // "Published" or "Draft"
      });

      alert(`Event ${status === 'Published' ? 'published' : 'saved as draft'} successfully!`);
      // Reset form
      setTitle('');
      setDescription('');
      setDateTime('');
      setVenue('');
      setapacity('');
    } catch (error) {
      console.error(error);
      alert('Error creating event. Check backend server.');
    }
  };

  return (
    <div className='event-form'> 
        <form className='form' >

            <h1 className='form-title'>Create New Event</h1>

            <label>Title:</label><br/>
            <input type='text' 
            className='f-text' 
            placeholder='Event Title' 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            required/><br/>

            <label>Description:</label><br/>
            <textarea placeholder="Description" 
            rows="4" 
            required 
            className='f-text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea><br/>

            <label>Date & Time:</label><br/>
            <input type="datetime-local" 
            required 
            className='f-text'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            /><br/>

            <label>Vanue:</label><br/>
            <input type='text' 
            className='f-text' 
            placeholder='Event Location' 
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required/><br/>

            <label>Capacity:</label><br/>
            <input 
              type='number' 
              className='f-text' 
              placeholder='Number of Participants' 
              onChange={(e) => setapacity(e.target.value)}
              required 
              min="1"   // ensures no negative or zero values
            /><br/>

            <div className='f-btn'>
                <button type="button" className='s-btn' onClick={(e) => handleSubmit(e, 'Published')}>Publish</button>
                <button type="button" className='d-btn' onClick={(e) => handleSubmit(e, 'Draft')}>Draft</button>
                 <button type="button" className="c-btn" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </form>
        </div>
    
  )
}

export default EventForm