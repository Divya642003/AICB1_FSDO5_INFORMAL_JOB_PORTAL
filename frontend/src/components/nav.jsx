import React  from 'react';
import './css/nav.css';
function Navbar(props) {
	console.log(props);
let handleLogout = ()=>{
	sessionStorage.clear()
	window.location.reload(false);
}
	var tokenfor = sessionStorage.getItem("tokenfor");
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light">
	<div className="navbar-header">
		<a className="navbar-brand" href="/">Job &nbsp;<b>Portal</b></a>  		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
			<span className="navbar-toggler-icon"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		</button>
	</div>
	<div id="navbarCollapse" className="collapse navbar-collapse">
		<ul className="nav navbar-nav">

			{tokenfor === "admin" && <>
			<li className=""><a href="/addRecuiter">add Recuiter</a></li>
			<li><a href="/allRecuiter">All Recuiter</a></li>
			</>}		

			{tokenfor === "recuiter" && <>
			<li className=""><a href="/addJob">Create Job</a></li>
			<li><a href="/allApplicants">All Applicants</a></li>
			<li><a href="/applicantrequest">Applicants Request</a></li>
			<li><a href="/allJobs">All Jobs</a></li></> }	

			{tokenfor === "applicant" && <>
			<li><a href="/allJobsApplicants">All Jobs</a></li></> }

		</ul>
		<form className="navbar-form form-inline navbar-right ml-auto">
		 {props.Title=== "Logout" && <> 
		 <div className="input-group search-box">
            <button 	onClick={() => handleLogout()}   style={{marginLeft: "2px"}} type="button" className="btn btn-primary">{props.Title}</button>
			</div>
         </>}
			{props.Title=== "Login" && <> 
			<div className="input-group search-box">
            <a href='/applicantLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">{props.Title}</button></a>
			</div>
			<div className="input-group search-box">
            <a href='/recuiterLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Recuiter</button></a>
			</div>
            <div className="input-group search-box">
            <a href='/adminLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Admin</button></a>
			</div></> }


		</form>		
	</div>
</nav>
  );
}

export default Navbar;
