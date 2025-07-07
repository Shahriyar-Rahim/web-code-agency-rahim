import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './pages/home/Pricing.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import Services from './pages/home/Services.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './context/AuthContext.jsx'
import 'sweetalert2/dist/sweetalert2.js'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
    <Routes>
      {/* main layout */}
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/pricing' element={<Pricing />} />

        {/* error page */}
        <Route path='*' element={<ErrorPage />} />
      </Route>

      {/* auth routes */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      {/* dashboard */}
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
  </AuthProvider>
)
