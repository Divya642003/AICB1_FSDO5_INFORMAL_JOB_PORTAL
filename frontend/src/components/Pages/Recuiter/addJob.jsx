import React, { useState } from 'react';
import swal from 'sweetalert';
import '../../Login/css/login.css';
function ApplicantSignup() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [salary, setSalary] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
     var recuiterId = sessionStorage.getItem("recuiterId");
      fetch('http://localhost:5000/api/job', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            title:title,
            description: description,
            tag :tag,
            salary : salary,
            recuiter: recuiterId
        }),
      })
        .then((res) => {
            setTitle("");
            setDescription("");
            setTag("");
            setSalary("");
          swal("Good job!", "Your job is successfully created!", "success");
        })
        .catch((err) => alert("Details Upload Error"));
    };
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
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" name="title" placeholder="Title" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" name="description" placeholder="Description" required="required" />
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="text" value={tag} onChange={(e) => setTag(e.target.value)} className="form-control" name="tag" placeholder="tag" required="required" />
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" name="salary" placeholder="Salary" required="required" />
			</div>
        </div>
		<div className="form-group">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Add Job</button>
        </div>
    </form>
</div>
    </>
  );
}

export default ApplicantSignup;