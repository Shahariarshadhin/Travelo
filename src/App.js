
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/CheckOut/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OurServices from './components/OurService/OurServices';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={

          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>


        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>





    </div>
  );
}

export default App;
