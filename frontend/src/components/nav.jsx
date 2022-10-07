import React  from 'react';
import './css/nav.css';
function Navbar() {
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
			<li className="active"><a href="/">Home</a></li>
			<li><a href="/">About</a></li>			
		</ul>
		<form className="navbar-form form-inline navbar-right ml-auto">
			<div className="input-group search-box">
            <a href='/applicantLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Login</button></a>
			</div>
            <div className="input-group search-box">
            <a href='/applicantSignup'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Signup</button></a>
			</div>
            <div className="input-group search-box">
            <a href='/recuiterLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Recuiter</button></a>
			</div>
            <div className="input-group search-box">
            <a href='/adminLogin'><button style={{marginLeft: "2px"}} type="button" className="btn btn-primary">Admin</button></a>
			</div>
		</form>		
	</div>
</nav>
  );
}

export default Navbar;
