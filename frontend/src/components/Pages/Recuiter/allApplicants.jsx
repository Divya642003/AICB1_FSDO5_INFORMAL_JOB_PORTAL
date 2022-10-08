import React, { useState ,useEffect } from 'react';
import axios from "axios";
import '../css/table.css';
import UpdateApplicant from "./updateApplicant";

function AllApplicants() {
    const [name, setName] = useState("");
    const [mobile_number, setMobile_number] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [adharcard_number, setAdharcard_number] = useState("");
    const [experience, setExperience] = useState("");
    const [id, setId] = useState("");
    const [data, getData] = useState([])


    var URL = 'http://localhost:5000/api/applicant';
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL ,{
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                "auth-token":sessionStorage.getItem('token')
          }}).then((res) =>
                res.json())
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }

    const deleteData = (name) => {
        var  URL = 'http://localhost:5000/api/applicant/' + name;
        axios.delete(URL,{
            method: "DELETE",
            headers: {
                'Content-Type':'application/json',
                "auth-token":sessionStorage.getItem('token')
          }}).then((res)=>{
            console.log(res.data);
            window.location.reload(false);
        }).catch(err=>{
            console.log(err.message)
        })
       };
     
  return (
    <>
    <center>
    <div className="table-responsive">
        <div className="table-wrapper">			
            <div className="table-title">
                <div className="row">
                    <div className="col-xs-4">
										
					</div>
					<div className="col-xs-4">
						<h2 style={{color: "black"}} className="text-center">All Applicant <b>Details</b></h2>
					</div>
                    <div className="col-xs-4">                       
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name <i className="fa fa-sort"></i></th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Adharcard Number</th>
                        <th>Experience</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile_number}</td>
                        <td>{item.address}</td>
                        <td>{item.adharcard_number}</td>
                        <td>{item.experience}</td>
                        <td>{item.date}</td>
                        <td>
                        <span  style={{cursor: "pointer", color:"blue"}} className="view" onClick={() => {  setId(item._id); setName(item.name); setMobile_number(item.mobile_number);  setAddress(item.address);  setPassword(item.password); setExperience(item.experience); setAdharcard_number(item.adharcard_number)} }  title="edit" href="#myModal"  data-toggle="modal"><i class="material-icons">&#xE254;</i></span>
                         &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"red"}} onClick={() => {  deleteData(item._id); }} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></span>
                        </td>
                    </tr> 
                        ))} 
                    
                </tbody>
                
            </table>
           
        </div>
    </div>        
    </center>
    <UpdateApplicant name= {name} mobile_number= {mobile_number} password= {password} experience= {experience}  address={address} adharcard_number={ adharcard_number} id={id} />
   </>
  );
}

export default AllApplicants;
