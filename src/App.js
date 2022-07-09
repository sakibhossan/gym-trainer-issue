import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './UniquePages/About/About';
import Home from './UniquePages/Home/Home/Home';
import Header from './UniquePages/Shared/Header/Header';
import Footer from './UniquePages/Shared/Footer/Footer';

function App() {
  return (
 <div>
  <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    
    </Routes>
    <Footer></Footer>
 </div>


  );
}

export default App;
