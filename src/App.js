import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LogIn'
import Signup from './pages/auth/Signup'
import ResetPassword from './pages/auth/ResetPassword'
import Home from './pages/auth/Home'

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/home' element={<Home />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
