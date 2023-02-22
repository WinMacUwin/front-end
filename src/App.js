import logo from "./logo.svg";
import "./App.css";
import { Switch } from "@mui/material";
import DashBoard from "./DashBoard/DashBoard";
import MyBookings from "./My Bookings/MyBookings";
import Events from "./Events/Events";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Attendance from "./Attendance/Attendance";
import ContactUs from "./ContactUs/ContactUs";
function App() {
 

  return (
    <>
      {/* <SignUp /> */}

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/MyBooking" element={<MyBookings />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/contact-us" element={<ContactUs />} />


      </Routes>
    </>
  );
}

export default App;
