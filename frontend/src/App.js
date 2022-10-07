import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/nav"
import AdminLogin from "./components/Login/adminLogin"
import RecuiterLogin from "./components/Login/recuiterLogin"
import ApplicantLogin from "./components/Login/applicantLogin"
import ApplicantSignup from "./components/Login/applicantSignup"

import AllApplicants from "./components/Pages/allApplicants"
import AddJob from "./components/Pages/addJob"
import ApplicantRequest from "./components/Pages/applicantRequest"
import AllJobs from "./components/Pages/allJobs"

function App() {
  var title;
  const navigate = useNavigate();
    var logged = sessionStorage.getItem("session");
    navigate("/");
    logged = false;
    if(logged){
      title = "Logout";
    }
    else{
      title = "Login";
    }
  return (
    <>
     <Navbar />
    <Routes>
    <Route path="/adminLogin" element={<AdminLogin />} />
    <Route path="/recuiterLogin" element={<RecuiterLogin />} />
    <Route path="/applicantLogin" element={<ApplicantLogin />} />
    <Route path="/applicantSignup" element={<ApplicantSignup />} />

    { logged && 
          <Route path="/allApplicants" element={<AllApplicants />} />
          
        }
    





   </Routes>
  </>
  )
}

export default App