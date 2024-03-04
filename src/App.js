import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LogIn'
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail'
import CreatePassword from './pages/auth/CreatePassword'
import ResetPassword from './pages/auth/ResetPassword'

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verifyemail' element={<VerifyEmail />} />
          <Route path='/createpassword' element={<CreatePassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
