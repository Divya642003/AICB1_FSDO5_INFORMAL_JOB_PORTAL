import React, { useState } from 'react';
import swal from 'sweetalert';
import '../../Login/css/login.css';
import '../css/update.css';
function UpdateApplicant(props) {
    const [name, setName] = useState(props.name);
    const [mobile_number, setMobile_number] = useState(props.mobile_number);
    const [password, setPassword] = useState(props.password);
    const [address, setAddress] = useState(props.address);
    const [adharcard_number, setAdharcard_number] = useState(props.adharcard_number);
    const [experience, setExperience] = useState(props.experience);
 // const ids = props.id;

    let handleSubmit = async (e) => {
     e.preventDefault();
     console.log(props.id);
     var  URL = 'http://localhost:5000/api/applicant/' + props.id;
      fetch(URL ,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":sessionStorage.getItem('token')
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
          console.log(res);
            setName("");
            setMobile_number("");
            setPassword("");
            setAddress("");
            setAdharcard_number("");
            setExperience("");
          swal("Good job!", "Your Applicant is successfully updated!", "success");
         // window.location.reload(false);
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
						<input  onChange={e => setName(e.target.value)} type="text"  defaultValue={props.name}  class="form-control"  placeholder="Enter your Name" required="required" />
					</div>
					<div class="form-group">
          <input onChange={event => setMobile_number(event.target.value)} type="text" defaultValue={props.mobile_number}  class="form-control"  placeholder="Enter Your Mobile No" required="required" />
						</div>
            <div class="form-group">
          <input onChange={event => setPassword(event.target.value)} type="text" defaultValue={props.password}  class="form-control"  placeholder="Enter Your Paswword" required="required" />
						</div>
            <div class="form-group">
          <input onChange={event => setAddress(event.target.value)} type="text" defaultValue={props.address}  class="form-control"  placeholder="Enter Your Address" required="required" />
						</div>
                        <div class="form-group">
          <input  onChange={event => setAdharcard_number(event.target.value)} type="text" defaultValue={props.adharcard_number} class="form-control"  placeholder="Enter Your Adharcard" required="required" />
						</div>
                        <div class="form-group">
          <input  onChange={event => setExperience(event.target.value)} type="text" defaultValue={props.experience}  class="form-control"  placeholder="Enter Your Exprence" required="required" />
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

export default UpdateApplicant;

