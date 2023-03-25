import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar"
import PageNotFound from './component/PageNotFound';
import Table1 from './component/Table1';

function App() {
  const user = JSON.parse(localStorage.getItem("PreFlight")) || [];
  // console.log(user.length);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={user.length === undefined ? <Home /> : <Login />}></Route>
        {/* <Route path='/table1' element={user.length === undefined ? <Table1 /> : <Login />}></Route> */}
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
