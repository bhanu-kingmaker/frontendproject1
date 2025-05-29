import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edittask from './Components/Edittask';

function App() {
  return (
    <BrowserRouter>
      <center>
        <h1 style={{ color: "#00215E", fontFamily: "Monaco" }}>To Do List</h1>
      </center>
      <br />
      <center>
        <div className='row'>
          <div className='col-md-1'></div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <First />
                  <Second />
                </>
              }
            />
            <Route path="/edittask/:id" element={<Edittask />} />
          </Routes>
        </div>
      </center>
    </BrowserRouter>
  );
}

export default App;