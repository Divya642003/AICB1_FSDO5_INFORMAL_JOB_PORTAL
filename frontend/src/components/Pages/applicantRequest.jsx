import React  from 'react';
import './css/table.css';
function applicantRequeat() {
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
						<h2 style={{color: "black"}} className="text-center">All Job <b>Request</b></h2>
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
                        <th>Job Title</th>
                        <th>Job Description</th>
                        <th>Job Tag</th>
                        <th>Job Salary</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"green"}} className="edit" title="Pending" data-toggle="tooltip"><i className="material-icons">edit</i></span>
                        &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"red"}}  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></span>
                        </td>
                    </tr> 
                    
                </tbody>
                
            </table>
           
        </div>
    </div>        
    </center>
   </>
  );
}

export default applicantRequeat;
