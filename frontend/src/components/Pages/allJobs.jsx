import React  from 'react';
import './css/card.css';
function allJobs() {
  return (
    <>
    <center>        
        <div class="card-category-1">
            <div class="basic-card basic-card-aqua">
                <div class="card-content">
                    <div class="card-title">Job Title</div>
                    <p class="card-text">
                        Job Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>Salary : 15000</p>
                    <p>Date : 15000</p>
                    <p>Posted by : 15000</p>
                </div>

                <div class="card-link">
                    <a href="/" title="Read Full"><span>Apply Now</span></a>
                </div>
            </div>

            <div class="basic-card basic-card-lips">
                <div class="card-content">
                    <span class="card-title">Card Title</span>
                    <p class="card-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                <div class="card-link">
                    <a href="/" title="Read Full"><span>Read Full</span></a>
                </div>
            </div>

            <div class="basic-card basic-card-light">
                <div class="card-content">
                    <span class="card-title">Card Title</span>
                    <p class="card-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                <div class="card-link">
                    <a href="/" title="Read Full"><span>Read Full</span></a>
                </div>
            </div>

            <div class="basic-card basic-card-dark">
                <div class="card-content">
                    <span class="card-title">Card Title</span>
                    <p class="card-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                <div class="card-link">
                    <a href="/" title="Read Full"><span>Read Full</span></a>
                </div>
            </div>
            
        </div>
        
        <br/>
        
        

        
    </center>
   </>
  );
}

export default allJobs;
