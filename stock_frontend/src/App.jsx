import './App.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import { Manager } from './components/Layouts/Manager/Manager'
import { User } from './components/Layouts/User/User'
import { Home } from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
