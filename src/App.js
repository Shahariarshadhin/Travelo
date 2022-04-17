
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import OurServices from './components/OurService/OurServices';
import Services from './components/Services/Services';
// import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/ourservices' element={<OurServices></OurServices>}></Route>

      </Routes>

      <Footer></Footer>





    </div>
  );
}

export default App;
