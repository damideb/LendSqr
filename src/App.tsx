import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import UserDetails from './pages/UserDetails/UserDetails';
import Error404 from './components/404/Error404';

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user/:id' element={<UserDetails />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
  )
}

export default App
