import React, { useState } from 'react';
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL;

export default function Second() {
  const [data, setData] = useState({
    task: "",
    status: "",
    deadline: ""
  });

  // Use environment variable for API base URL
  const API_BASE = process.env.REACT_APP_API_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API_BASE}/api/addtask`, data)
      .then((response) => {
        if (response.status === 200) {
          alert('Data inserted');
          setData({
            task: "",
            status: "",
            deadline: ""
          });
          window.location.href = '';
        } else {
          alert('Failed');
        }
      })
      .catch((error) => {
        alert("Failed to add task.");
        console.error(error);
      });
  }

  return (
    <div className='col-md-4'>
      <h2 className='first'>Add Task</h2>
      <br />
      <div className="card">
        <div className="card-body">
          <form className='five' onSubmit={handleSubmit}>
            <label><h5>Task</h5></label>
            <br />
            <input
              type="text"
              placeholder='Enter Task'
              name="task"
              className='form-control'
              value={data.task}
              onChange={handleInputChange}
            />
            <br />
            <label><h5>Status</h5></label>
            <br />
            <input
              type="text"
              placeholder='Enter Status'
              name="status"
              className='form-control'
              value={data.status}
              onChange={handleInputChange}
            />
            <br />
            <label><h5>Deadline</h5></label>
            <br />
            <input
              type="date"
              className='form-control'
              name="deadline"
              value={data.deadline}
              onChange={handleInputChange}
            />
            <br />
            <button type='submit' className='seven'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}