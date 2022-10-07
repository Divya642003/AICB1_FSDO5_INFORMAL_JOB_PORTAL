import React from 'react';
import '../Login/css/login.css';
function ApplicantSignup() {
  return (
    <>
     <div className="signup-form">
    <form >
		<h2>Add Job</h2>
		<p>Please fill in this form to create a job!</p>
		<hr />
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="title" placeholder="Title" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="description" placeholder="Description" required="required" />
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="text" className="form-control" name="tag" placeholder="tag" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" className="form-control" name="salary" placeholder="Salary" required="required" />
			</div>
        </div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Add Job</button>
        </div>
    </form>
</div>
    </>
  );
}

export default ApplicantSignup;