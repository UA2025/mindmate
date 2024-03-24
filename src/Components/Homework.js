import React from 'react';
import "./Homework.css";

function Homework() {
  return (
    <div>
      <div className="homework1-container">
        <div className="homework1-icon">
          All the practices from your therapist appear here. You can complete it and submit it here.  
        </div>
      </div>
      
      <div className="homework2-container">
        <div className="homework2-icon">
          Read this article and this
        </div>
        <br/>
        <div className="options-container">
          <div className="rounded-box completed">
            <i className="fa fa-check"></i> Completed
          </div>
          <div className="rounded-box start">
            <i className="fa fa-play"></i> Start
          </div>
          <div className="rounded-box submit">
            <i className="fa fa-upload"></i> Submit
          </div>
        </div>
        </div> 
    </div>
  );
}

export default Homework;
