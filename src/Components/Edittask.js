import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_URL;
export default function Edittask() {
  const [data, setData] = useState({
    task: "",
    status: "",
    deadline: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const params = useParams();
  const edit_taskid = params.id;

  // Use environment variable for API base URL
  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_BASE}/api/get_task_data/${edit_taskid}`)
      .then((response) => {
        setData(response.data.task_data);
      })
      .catch((error) => {
        alert("Failed to fetch task data.");
        console.error(error);
      });
  }, [API_BASE, edit_taskid]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`${API_BASE}/api/edit_task/${edit_taskid}`, data)
      .then((response) => {
        if (response.status === 200) {
          alert("Updated successfully.");
          setData({
            task: "",
            status: "",
            deadline: ""
          });
          window.location.href = '/';
        } else {
          alert('Function not working');
        }
      })
      .catch((error) => {
        alert("Failed to update task.");
        console.error(error);
      });
  };

  return (
    <>
      <div className='col-md-4'>
        <h2 className='first'>Edit Task</h2>
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
                value={data.deadline ? data.deadline.substring(0, 10) : ""}
                onChange={handleInputChange}
              />
              <br />
              <input type='submit' name='update' value='update' className='seven' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}