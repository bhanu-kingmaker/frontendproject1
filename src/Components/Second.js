import React, { useState } from 'react';
import axios from 'axios';

export default function Second() {
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
    console.log(data);
  };

     const handleSubmit=(event)=>
      {

      event.preventDefault();

      console.log(data)
      axios.post('http://localhost:4000/api/addtask',data)
      .then((response) => {
            console.log(response.data)

            if(response.status==200)
            {
                alert('data inserted');

                window.location.href = '';

                
            }
            else{
                alert('failed');
            }
        });

    }


  return (
    <div className='col-md-4'>
      <h2 className='first'>Add Task</h2>
      <br />
      <div class="card">
      <div class="card-body">
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
