
# Simple Event Management System (Spring Boot)

A full-stack **Event Management System** built with **Spring Boot** (backend) and **React** (frontend), featuring complete CRUD functionality for managing events.

---

## 🚀 Features

- Create, read, update, and delete events
- View detailed event information
- Search events by title or date
- Responsive React frontend
- RESTful API backend with Spring Boot
- Cross-origin support for frontend-backend communication
- Easy configuration via `application.properties`

---

## 🛠️ Technologies Used

**Frontend:**
- React
- HTML, CSS
- Axios
- React Icons

**Backend:**
- Java, Spring Boot
- MySQL 
- REST API
- ModelMapper

**Tools:**
- Postman
- Git, GitHub

---

## 📁 Project Structure

```

Simple-Event-Management-System/
├── backend/        ← Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── application.properties
└── frontend/       ← React frontend
├── src/
├── package.json
└── public/

````

---

## ⚙️ How to Run

### Backend (Spring Boot)
1. Navigate to `/backend`
2. Make sure your database is running and configured in `application.properties`
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run

4. Backend runs at: `http://localhost:8080`

### Frontend (React)

1. Navigate to `/frontend`
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React app:

   ```bash
   npm start
   ```
4. Frontend runs at: `http://localhost:3000`

---

## 📝 API Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| GET    | /api/v1/getEvents        | Get all events           |
| GET    | /api/v1/getEvent/{id}    | Get a single event by ID |
| POST   | /api/v1/addEvent         | Add a new event          |
| PUT    | /api/v1/updateEvent/{id} | Update an event by ID    |
| DELETE | /api/v1/deleteEvent/{id} | Delete an event by ID    |

---

## 🎥 Demo Video
Watch the screen recording demo:

[Watch Demo](assets/event-management-system.mp4)

---

## 💡 Notes

* Make sure **backend server is running** before using frontend.
* Update `application.properties` for database configuration.
* This project is ideal for learning **full-stack development with Java and React**.

---

