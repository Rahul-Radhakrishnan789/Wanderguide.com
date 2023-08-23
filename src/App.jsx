import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Loginpage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import {HotelOwnerLogin}  from './pages/HotelOwnerPages/HotelOwnerLogin'
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
           </Routes>
      </Router>
 
    </div>
  );
}

export default App;
