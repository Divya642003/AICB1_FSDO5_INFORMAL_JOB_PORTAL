import React, { useState } from 'react';
import swal from 'sweetalert';
import '../../Login/css/login.css';
import '../css/update.css';
function UpdateJob(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [tag, setTag] = useState(props.tag);
    const [salary, setSalary] = useState(props.salary);
  //const ids = props.id;
    let handleSubmit = async (e) => {
     e.preventDefault();
     console.log(title);
     var recuiterId = sessionStorage.getItem("recuiterId");
     var  URL = 'http://localhost:5000/api/job/' + props.id;
      fetch(URL ,{
        method: 'PUT',
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
          swal("Good job!", "Your job is successfully updated!", "success");
          window.location.reload(false);
        })
        .catch((err) => alert("Details Upload Error"));
    };
  return (
    <>
<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-login">
		<div class="modal-content">
			<div class="modal-header">				
				<h4 class="modal-title">Update Details</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
				<form>
					<div class="form-group">
						<input defaultValue={props.title}  type="text" onChange={e => setTitle(e.target.value)} class="form-control"  placeholder="Enter your Title" required="required" />
					</div>
					<div class="form-group">
          <input type="text" defaultValue={props.description} onChange={event => setDescription(event.target.value)} class="form-control"  placeholder="Enter Your Description" required="required" />
						</div>
            <div class="form-group">
          <input type="text" defaultValue={props.tag} onChange={event => setTag(event.target.value)} class="form-control"  placeholder="Enter Your Tag" required="required" />
						</div>
            <div class="form-group">
          <input type="text" defaultValue={props.salary} onChange={event => setSalary(event.target.value)} class="form-control"  placeholder="Enter Your Salary" required="required" />
						</div>
					<div class="form-group">
						<input onClick={handleSubmit} class="btn btn-primary btn-block btn-lg" value="Update" />
					</div>
				</form>				
			</div>
		</div>
	</div> 
</div>     
    </>
  );
}

export default UpdateJob;