import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Loginpage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import {HotelOwnerLogin}  from './pages/HotelOwnerPages/HotelOwnerLogin'
import { HotelOwnerHomePage } from './pages/HotelOwnerPages/HotelOwnerHomePage';
import { OwnerHotels } from './components/OwnerHotels';
import { HotelForm } from './components/HotelForm';
import {DisplayHotels} from './pages/DisplayHotels'
import { Mapbox } from './components/Mapbox';
import { Wishlist } from './components/Wishlist';
import { HotelPage } from './pages/HotelPage';
import { PaymentPage } from './pages/PaymentPage';
import { Orders } from './pages/Orders';
import { UserDetails } from './pages/UserDetails';
import {AdminHomePage} from './pages/AdminPages/AdminHomePage'
import {AdminLogin} from './pages/AdminPages/AdminLogin'
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
                 <Route path='/mapbox' element={<Mapbox/>} />
                 <Route path='/displayhotels' element={<DisplayHotels/> }/>
                 <Route path='/wishlist' element={<Wishlist/>} />
                 <Route path='/hotelpage/:paramid' element={<HotelPage/>}/>
                 <Route path='/paymentpage' element={<PaymentPage/>} />
                 <Route path='/orders' element={<Orders/>} />
                 <Route path='/userdetails' element={<UserDetails/>} />
                 <Route path='/adminlogin' element={<AdminLogin/>} />
                 <Route path='/adminhome' element={<AdminHomePage/>} />
           </Routes>
      </Router>
 
    </div>
  );
}

export default App;
