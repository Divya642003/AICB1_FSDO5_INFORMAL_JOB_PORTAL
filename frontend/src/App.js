import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/nav"
import AdminLogin from "./components/Login/adminLogin"
import RecuiterLogin from "./components/Login/recuiterLogin"
import ApplicantLogin from "./components/Login/applicantLogin"
import ApplicantSignup from "./components/Login/applicantSignup"

import AllApplicants from "./components/Pages/Recuiter/allApplicants"
import AddJob from "./components/Pages/Recuiter/addJob"
import ApplicantRequest from "./components/Pages/Recuiter/applicantRequest"
import AllJobsApplicants from "./components/Pages/Applicants/allJobsApplicant"
import AllJobs from "./components/Pages/Recuiter/allJobs"
import AddRecuiter from "./components/Pages/Admin/addRecuiter"
import AllRecuiter from "./components/Pages/Admin/allRecuiter"

function App() {
  var title;
  const navigate = useNavigate();
 var  loggedIn = false;
  loggedIn = sessionStorage.getItem("token");
    if(loggedIn){
      title = "Logout";
    }
    else{
      title = "Login";
    }
  return (
    <>
     <Navbar Title ={title} />
    <Routes>
    <Route path="/adminLogin" element={<AdminLogin />} />
    <Route path="/recuiterLogin" element={<RecuiterLogin />} />
    <Route path="/applicantLogin" element={<ApplicantLogin />} />
    <Route path="/applicantSignup" element={<ApplicantSignup />} />
    
    <Route exact path="/allApplicants" element={ loggedIn ? ( <AllApplicants /> ) : (  navigate("/") ) } />
    <Route exact path="/addJob" element={ loggedIn ? ( <AddJob /> ) : (  navigate("/") ) } />
    <Route exact path="/applicantRequest" element={ loggedIn ? ( <ApplicantRequest /> ) : (  navigate("/") ) } />
    <Route exact path="/allJobsApplicants" element={ loggedIn ? ( <AllJobsApplicants /> ) : (  navigate("/") ) } />
    <Route exact path="/allJobs" element={ loggedIn ? ( <AllJobs /> ) : (  navigate("/") ) } />
    <Route exact path="/addRecuiter" element={ loggedIn ? ( <AddRecuiter /> ) : (  navigate("/") ) } />
    <Route exact path="/allRecuiter" element={ loggedIn ? ( <AllRecuiter /> ) : (  navigate("/") ) } />
  



  




   </Routes>
  </>
  )
}

export default App