import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
        console.log(data);
      };

      let params = useParams('id');
      let edit_taskid = params.id; // get id from url




      let api = 'http://localhost:4000/api/get_task_data/'+edit_taskid
        useEffect(() => {
        axios.get(api).then((response) => {
            console.log(response.data.task_data)
            setData(response.data.task_data);            
        });
      },[]);

     
 

    
     
//updating the form after click update button
  const handleSubmit = (event) => {
    event.preventDefault();

    const api = 'http://localhost:4000/api/edit_task/'+edit_taskid
        axios.put(api,data).then((response) => {
            console.log(response.data)
            if(response.status==200){
              alert("Updated successfully.")
              setData({
                task: "",
                status: "",
                deadline: ""
              });


              window.location.href='/';

            }       
            else
            {
              alert('function not working')
            }   
        });

    // alert('working')
       };
    


  return (
    <>
    
   <div className='col-md-4'>
      <h2 className='first'>Edit Task</h2>
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
        <input type='submit' name='update' value='update' className='seven'/>
      </form>
      </div>
      </div>
    </div>
    </>
  )
}