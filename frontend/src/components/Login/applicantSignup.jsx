import React from 'react';
import './css/login.css';
function ApplicantSignup() {
  return (
    <>
     <div className="signup-form">
    <form >
		<h2>Applicant SignUp</h2>
		<p>Please fill in this form to login an account!</p>
		<hr />
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="name" placeholder="Name" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="mobile_number" placeholder="Mobile Number" required="required" />
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="text" className="form-control" name="password" placeholder="Password" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="address" placeholder="Address" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="adharcard_number" placeholder="Adharcard Number" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="experience" placeholder="experience" required="required" />
			</div>
        </div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
</div>
    </>
  );
}

export default ApplicantSignup;