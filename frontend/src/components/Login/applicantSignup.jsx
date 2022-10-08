import React, { useState } from 'react';
import swal from 'sweetalert';
import './css/login.css';
function ApplicantSignup() {
      const [name, setName] = useState("");
      const [mobile_number, setMobile_number] = useState("");
      const [password, setPassword] = useState("");
      const [address, setAddress] = useState("");
      const [adharcard_number, setAdharcard_number] = useState("");
      const [experience, setExperience] = useState("");
    
      let handleSubmit = async (e) => {
        e.preventDefault();
    
        fetch('http://localhost:5000/api/applicant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:name,
            mobile_number: mobile_number,
            password :password,
            address : address,
            adharcard_number : adharcard_number,
            experience : experience 
          }),
        })
          .then((res) => {
            setName("");
            setMobile_number("");
            setPassword("");
            setAddress("");
            setAdharcard_number("");
            setExperience("");
            swal("Good job!", "Your account is successfully created!", "success");
          })
          .catch((err) => alert("Details Upload Error"));
      };



  return (
    <>
     <div className="signup-form">
    <form >
		<h2>Applicant SignUp</h2>
		<p>Please fill in this form to create an account!</p>
		<hr />
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="name" placeholder="Name" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={mobile_number} onChange={(e) => setMobile_number(e.target.value)} className="form-control" name="mobile_number" placeholder="Mobile Number" required="required" />
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" name="address" placeholder="Address" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={adharcard_number} onChange={(e) => setAdharcard_number(e.target.value)} className="form-control" name="adharcard_number" placeholder="Adharcard Number" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} className="form-control" name="experience" placeholder="experience" required="required" />
			</div>
        </div>
		<div className="form-group">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
</div>
    </>
  );
}

export default ApplicantSignup;