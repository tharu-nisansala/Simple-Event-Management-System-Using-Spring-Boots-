import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EventForm.css';
import axios from 'axios';

function EventEdit() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    dateTime: "",
    venue: "",
    capacity:"",
    status: "Draft",
  });

  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/getEvent/${id}`);
        setEventData(res.data);
      } catch (error) {
        console.error("Error fetching event:", error);
        alert("Failed to load event data.");
      }
    };
    fetchEvent();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Submit updated event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/updateEvent/${id}`, eventData);
      alert("Event updated successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event.");
    }
  };

  return (
    <div className="event-form">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Edit Event</h1>

        <label>Title:</label><br/>
        <input
          type="text"
          name="title"
          className="f-text"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleChange}
          required
        /><br/>

        <label>Description:</label><br/>
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          required
          className="f-text"
          value={eventData.description}
          onChange={handleChange}
        ></textarea><br/>

        <label>Date & Time:</label><br/>
        <input
          type="datetime-local"
          name="dateTime"
          required
          className="f-text"
          value={eventData.dateTime ? eventData.dateTime.slice(0,16) : ""}
          onChange={handleChange}
        /><br/>

        <label>Venue:</label><br/>
        <input
          type="text"
          name="venue"
          className="f-text"
          placeholder="Event Location"
          value={eventData.venue}
          onChange={handleChange}
          required
        /><br/>

        <label>Capacity:</label><br/>
        <input
          type="number"
          name="capacity"
          className="f-text"
          placeholder="Number of Participants"
          value={eventData.capacity}
          onChange={handleChange}
          required
        /><br/>


        <label>Status:</label><br/>
        <select
          name="status"
          className="f-text"
          value={eventData.status}
          onChange={handleChange}
        >
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select><br/>

        <div className="f-btn">
          <button type="submit" className="s-btn">Save Changes</button>
          <button
            type="button"
            className="c-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventEdit;
