import React, { useState ,useEffect } from 'react';
import axios from "axios";
import '../css/table.css';
import UpdateJob from "./updateJob";

function AllApplicants() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [tag, setTag] = useState();
    const [salary, setSalary] = useState();
    const [id, setId] = useState();

    const [data, getData] = useState([])


    var URL = 'http://localhost:5000/api/job';
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
        var  URL = 'http://localhost:5000/api/job/' + name;
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
						<h2 style={{color: "black"}} className="text-center">All Jobs <b>Details</b></h2>
					</div>
                    <div className="col-xs-4">                       
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title <i className="fa fa-sort"></i></th>
                        <th>Description</th>
                        <th>Salary</th>
                        <th>Tag</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.salary}</td>
                        <td>{item.tag}</td>
                        <td>{item.date}</td>
                        <td>
                        <span  style={{cursor: "pointer", color:"blue"}} onClick={() =>  {setId(item._id); setTitle(item.title); setDescription(item.description);  setTag(item.tag);  setSalary(item.salary); } }  title="edit" href="#myModal"  data-toggle="modal"><i class="material-icons">&#xE254;</i></span>
                         &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"red"}} onClick={() => {  deleteData(item._id); }} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></span>
                        </td>
                    </tr> 
                        ))} 
                
                </tbody>
                
            </table>
           
        </div>
    </div>        
    </center>
    <UpdateJob title= {title} description= {description} tag= {tag} salary= {salary} id={id} />
   </>
  );
}

export default AllApplicants;
