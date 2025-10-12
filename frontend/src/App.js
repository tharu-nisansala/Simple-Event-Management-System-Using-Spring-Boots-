import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EventDetails from "./pages/EventDetails";
import EventEdit from "./pages/EventEdit";
import EventForm from "./pages/EventForm";
import EventList from "./pages/EventList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList/>} />
        <Route path="/eventform" element={<EventForm/>} />
        <Route path="/event/edit/:id" element={<EventEdit/>}/>
        <Route path="/events/view/:id" element={<EventDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
