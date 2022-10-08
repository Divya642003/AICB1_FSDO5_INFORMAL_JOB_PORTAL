import React, { useState ,useEffect } from 'react';
import '../css/card.css';
import swal from 'sweetalert';
function AllJobs() {
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

        const [name, setName] = useState("");
        const [mobile_number, setMobile_number] = useState("");
        const [address, setAddress] = useState("");
        const [adharcard_number, setAdharcard_number] = useState("");
        const [experience, setExperience] = useState("");
       
        // useEffect(() => {
        //     fetchApplicantData()
        // }, [])

        const fetchApplicantData = () => {
            var URL = 'http://localhost:5000/api/applicant/';
           var applicantId =  sessionStorage.getItem('applicantId');
            fetch(URL + applicantId  ,{
                method: "GET",
                headers: {
                    'Content-Type':'application/json',
                    "auth-token":sessionStorage.getItem('token')
              }}).then((res) =>
                    res.json())
                .then((response) => { 
                    //console.log(response);
                    setName(response.name);
                    setMobile_number(response.mobile_number);
                    setAdharcard_number(response.adharcard_number);
                    setExperience(response.experience);
                    setAddress(response.address);
                  //  getApplicantData(response);
                })
                //console.log(applicantData);
                
        }
        fetchApplicantData();
console.log(name);

        let handleSubmit = (title, description, salary, tag) => {
            
            fetch('http://localhost:5000/api/applyRequest', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "auth-token":sessionStorage.getItem('token')
              },
              body: JSON.stringify({
                  title:title,
                  description: description,
                  tag :tag,
                  salary : salary,
                  name:name,
                  mobile_number: mobile_number,
                  address : address,
                  adharcard_number : adharcard_number,
                  experience : experience 
              }),
            })
              .then((res) => {
                swal("Good job!", "Your job is successfully apply!", "success");
              })
              .catch((err) => alert("Details Upload Error"));
          };


  return (
    <>
    <center>        
        <div class="card-category-1">
        {data.map((item, i) => (
            <div key={i} class="basic-card basic-card-aqua">
               
                <div class="card-content">
                    <div class="card-title"><h2>{item.title}</h2></div>
                    <p class="card-text"> {item.description} </p>
                    <h4>Salary : {item.salary}</h4>
                    <h4>Date : {item.date}</h4>
                </div>
                <div class="card-link">
                    <button onClick={() => handleSubmit(item.title, item.description, item.salary, item.tag)}title="Apply"><span>Apply Now</span></button>
                </div>
            </div>
              ))} 
        </div>
        <br/>
    </center>
   </>
  );
}

export default AllJobs;
