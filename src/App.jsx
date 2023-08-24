import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Loginpage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import {HotelOwnerLogin}  from './pages/HotelOwnerPages/HotelOwnerLogin'
import { HotelOwnerHomePage } from './pages/HotelOwnerPages/HotelOwnerHomePage';
import { OwnerHotels } from './components/OwnerHotels';
import { HotelForm } from './components/HotelForm';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
                 <Route path='/' element={<HomePage/>}/>
                 <Route path='/loginpage' element={<Loginpage/>}/>
                 <Route path='/register' element={<RegistrationPage/>}/>
                 <Route path='/hotelownerlogin' element={<HotelOwnerLogin/>} />
                 <Route path='/hotelownerhomepage' element={<HotelOwnerHomePage/>}/>
                 <Route path='/ownerhotel' element={<OwnerHotels/>} />
                 <Route path='/hotelform' element={<HotelForm/>} />
           </Routes>
      </Router>
 
    </div>
  );
}

export default App;
