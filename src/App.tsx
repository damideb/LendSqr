import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'


function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App
