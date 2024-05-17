import React, { useState } from 'react';
import "./Homework.css";
import Sidebar from './Sidebar'

function Homework() {
  const [homeworks, setHomeworks] = useState([]);
  const [newHomeworkText, setNewHomeworkText] = useState('');

  const handleCreateHomework = () => {
    setHomeworks([...homeworks, { text: newHomeworkText }]);
    setNewHomeworkText('');
  };

  return (
    <div>
      <Sidebar/>
      <div className="homework1-container">
<div className="homework1-icon">
All the practices from your therapist appear here. You can complete it and submit it here.
</div>
</div>
      <div className="create-button btn btn-primary" onClick={handleCreateHomework}>+ Create</div>
      <input 
          type="text" 
          value={newHomeworkText} 
          onChange={(e) => setNewHomeworkText(e.target.value)} 
          placeholder="Enter new homework text"
          className="input-field"
        />
      {homeworks.map((homework, index) => (
        <div key={index} className="homework2-container">
          <div className="homework2-icon">
            {homework.text}
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
      ))}
     
    </div>
  );
}

export default Homework;