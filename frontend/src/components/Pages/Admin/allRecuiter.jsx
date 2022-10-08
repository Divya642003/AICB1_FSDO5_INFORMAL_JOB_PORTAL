import React, { useState ,useEffect } from 'react';
import axios from "axios";
import '../css/table.css';


function AllRecuiter() {
    const [name, setName] = useState("");
    const [mobile_number, setMobile_number] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [adharcard_number, setAdharcard_number] = useState("");
    const [id, setId] = useState("");
    const [data, getData] = useState([])


    var URL = 'http://localhost:5000/api/recuiter';
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
        var  URL = 'http://localhost:5000/api/recuiter/' + name;
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
						<h2 style={{color: "black"}} className="text-center">All Recuiter <b>Details</b></h2>
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
                        <td>{item.date}</td>
                        <td>
                         &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"red"}} onClick={() => {  deleteData(item._id); }} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></span>
                        </td>
                    </tr> 
                        ))} 
                    
                </tbody>
                
            </table>
           
        </div>
    </div>        
    </center>
   </>
  );
}

export default AllRecuiter;
