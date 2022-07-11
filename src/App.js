import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './UniquePages/About/About';
import Home from './UniquePages/Home/Home/Home';
import Header from './UniquePages/Shared/Header/Header';
import Footer from './UniquePages/Shared/Footer/Footer';
import WorkOutDetail from './UniquePages/WorkOutDetail/WorkOutDetail';
import NotFound from './UniquePages/Shared/NotFound/NotFound';
import Login from './UniquePages/Login/Login/Login';
import Register from './UniquePages/Login/Register/Register';
import CheckOut from './UniquePages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './UniquePages/Login/RequireAuth/RequireAuth';
import Blogs from './UniquePages/Blogs/Blogs';


function App() {
  return (
 <div>
  <Header></Header>
  
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/workout/:workoutId' element={<WorkOutDetail></WorkOutDetail>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/checkout' element={
      <RequireAuth>
 <CheckOut></CheckOut>
      </RequireAuth>
   
    }></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
    
    
    </Routes>
    <Footer></Footer>
 </div>


  );
}

export default App;
