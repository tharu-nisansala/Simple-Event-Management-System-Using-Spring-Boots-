import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import "./EventDetails.css";

function ViewEvent() {
  const { id } = useParams(); // event ID from URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/getEvent/${id}`);
        setEvent(res.data);
      } catch (error) {
        console.error("Error fetching event:", error);
        alert("Failed to load event details.");
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <p className="loading">Loading event details...</p>;
  }

  return (
    <div className="view-event">
      <div className="view-card">
        <h2 className="view-title">{event.title}</h2>
        <p className="view-desc">{event.description}</p>

        <div className="view-info">
          <p>
            <strong>Date & Time:</strong>{" "}
            {event.dateTime
              ? new Date(event.dateTime).toLocaleString()
              : "Not specified"}
          </p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Capacity:</strong> {event.capacity || "N/A"}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                event.status === "Published" ? "published" : "draft"
              }
            >
              {event.status || "Draft"}
            </span>
          </p>
          
        </div>

        <div className="view-actions">
          <button onClick={() => navigate(`/event/edit/${event.id}`)} className="edit-btn"><FaRegEdit/>Edit</button>
          <button onClick={() => navigate("/")} className="back-btn"><FaArrowLeftLong/>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
