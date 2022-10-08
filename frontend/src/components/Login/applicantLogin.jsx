import {useNavigate} from 'react-router-dom';
import React, { useState  } from 'react';
import swal from 'sweetalert';
import './css/login.css';
function AdminLogin() {   
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password);
        const response= await fetch("http://localhost:5000/api/auth/login/applicant",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({mobile:username,password:password})

        })

        const json= await response.json();

        console.log(json);

        if(json.success){
            sessionStorage.setItem('token',json.authToken);
			sessionStorage.setItem('tokenfor',json.tokenfor);
            sessionStorage.setItem('applicantId',json.applicantId);
            navigate("/");
        }
        else{
            swal("Ohh No!", "Your UserName or Password is Wrong!", "error");
        }
    }



  return (
    <>
     <div className="signup-form">
    <form >
		<h2>Applicant Login</h2>
		<p>Please fill in this form to login an account!</p>
		<hr />
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user"></i></span>
				<input type="text"  onChange={e => setUserName(e.target.value)} className="form-control" name="username" placeholder="Username" required="required" />
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input type="text"  onChange={e => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
			</div>
        </div>
        <div class="text-center">You hava not a account <a href="/applicantSignup">Create Account</a></div>
		<div className="form-group">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Login</button>
        </div>
    </form>
</div>
    </>
  );
}

export default AdminLogin;