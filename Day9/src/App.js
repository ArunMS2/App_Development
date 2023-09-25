import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import SellerSignup from './Components/SellerSignup';
import SideBar from './Components/SideBar';
import Settings from './Components/Settings';
import Reports from './Components/Reports';
import Navbar from './Components/Navbar';
import Brand from './Components/Brand';
import Categories from './Components/Categories';
import AdminDashboard from './Components/AdminDashboard';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Pp from './Components/pp';
import Aboutus from './Components/aboutus';
import Contactus from './Components/Contactus';
import Faq from './Components/faq';
import Men from'./Components/Men';
import Adminlogin from'./Components/adminlogin';
import Adminds from'./Components/adminds';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/buyer-signup' element={<Signup/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/seller-signup' element={<SellerSignup/>}/>
      <Route path='/Brand' element={<Brand/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/pp' element={<Pp/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/adminds' element={<Adminds/>}/>
      
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
