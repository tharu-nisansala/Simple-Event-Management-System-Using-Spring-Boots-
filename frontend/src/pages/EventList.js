import React, { useState, useEffect } from 'react';
import '../pages/EventList.css';
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/v1/getEvents'); 
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this event?");
  if (!confirmDelete) return; // stop if canceled

  try {
    await axios.delete(`http://localhost:8080/api/v1/deleteEvent/${id}`);
    setEvents(events.filter(e => e.id !== id)); // update list
    alert("Event deleted successfully!");
  } catch (error) {
    console.error("Error deleting event:", error);
    alert("Failed to delete the event. Please try again.");
  }
};


  // Filter events by title or date
  const filteredEvents = events.filter(event => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchesTitle = event.title.toLowerCase().includes(lowerQuery);
    const matchesDate = new Date(event.dateTime).toLocaleDateString().includes(searchQuery);
    return matchesTitle || matchesDate;
  });

  return (
    <div className='event-list'>
      {/* Search Bar */}
      <div className='search-btn'>
        <input
          type='text'
          className='search'
          placeholder='Search by title or date...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='btn' onClick={() => setSearchQuery(inputValue)}>Search</button>
      </div>

      {/* Event List */}
      <div className='card'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event._id} className="event-card">
              <h2 className='title'>{event.title}</h2>
              <p className='discription'>{event.description.length > 100
                  ? event.description.substring(0, 100) + "..."
                  : event.description
              }</p>
              <div className='mid-details'>
                <p className='details'><strong className='details-t'>Venue:</strong> {event.venue}</p>
                <p className='details'><strong className='details-t'>Date & Time:</strong> {new Date(event.dateTime).toLocaleDateString()} | {new Date(event.dateTime).toLocaleTimeString()}</p>
                <p className='details'><strong className='details-t'>Capacity</strong> {event.capacity}</p>
              </div>
              <p className='status'>{event.status}</p>
              <div className='actions'>
                <Link to={`/events/view/${event.id}`} className="view-btn"><GrView /> View</Link>
                <Link to={`/event/edit/${event.id}`} className="edit-btn"><FaRegEdit /> Edit</Link>
                <button className="delete-btn" onClick={() => deleteEvent(event.id)}>
                  <RiDeleteBin5Line /> Delete
                </button>

              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default EventList;
