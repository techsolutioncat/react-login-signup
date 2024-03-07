import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LogIn'
import Signup from './pages/auth/Signup'
import ResetPassword from './pages/auth/ResetPassword'
import MyFocus from './pages/MyFocus'

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/myfocus' element={<MyFocus />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
