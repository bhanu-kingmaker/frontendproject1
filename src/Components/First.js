import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL;

export default function First() {
  const [list, setList] = useState([]);

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_BASE}/api/getTask`)
      .then(res => setList(res.data.tas))
      .catch((err) => {
        alert("Failed to fetch tasks.");
        console.error(err);
      });
  }, [API_BASE]);

  // Delete function
  const handleDelete = (_id) => {
    axios.delete(`${API_BASE}/api/deletetask/${_id}`)
      .then((response) => {
        if (response.status === 200) {
          alert("Data deleted");
          window.location.href = '/';
        }
      })
      .catch((err) => {
        alert("Failed to delete task.");
        console.error(err);
      });
  };

  return (
    <>
      <div className='col-md-6'>
        <center>
          <h2 className='first'>To-Do-List</h2>
        </center>
        <br />
        <table align="center" border={2} height={50} className='table table-bordered' >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Task</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              list && list.map((e, i) => (
                <tr key={e._id}>
                  <td>{i + 1}</td>
                  <td>{e.task}</td>
                  <td>{e.status}</td>
                  <td>{e.deadline}</td>
                  <td>
                    <Link to={`/edittask/${e._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button className='btn btn-danger' onClick={() => handleDelete(e._id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}