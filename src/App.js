import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Edittask from './Components/Edittask';

function App() {
  return (
    <>
    <center>
    <h1 style={{color:"#00215E",fontFamily:"Monaco"}}>To Do List</h1>
    </center>
    <br/>
    <center>
    <div className='row'>
      <BrowserRouter>
      <div className='col-md-1'></div>
      <First/>
      <Routes>
      <Route path="/" element={<Second/>}></Route>
      
        <Route path="/edittask/:id" element={<Edittask/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </center>
    </>
  );
}

export default App;
