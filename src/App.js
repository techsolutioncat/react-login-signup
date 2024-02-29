import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LogIn'
import Register from './pages/auth/Register'

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
