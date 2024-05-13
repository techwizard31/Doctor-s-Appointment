import react, { useEffect } from "react";
import {
  Routes,
  Route, useParams
} from "react-router-dom";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppointmentBox from "./pages/AppointmentBox";
import Medicines from "./pages/departments/Medicines";
import Bones from "./pages/departments/Bones";
import Derematology from "./pages/departments/Derematology";
import Gynaecology from "./pages/departments/Gynaecology";
import Department from "./pages/departments/DepartmentDynamic";
function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path='/AppointmentBox' element={<AppointmentBox />} />
      <Route path="/dynamic/:segment" element={<Department />} />
      <Route path="/Bones" element={<Bones />} />
      <Route path="/Derematology" element={<Derematology />} />
      <Route path="/Gynaecology" element={<Gynaecology />} />
    </Routes>
  );
}
export default App;
