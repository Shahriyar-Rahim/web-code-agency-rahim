import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import './App.css'
import Footer from './components/Footer'
function App() {
  console.log(import.meta.env.VITE_APIKEY)

  return (
    <>
      <NavBar />

        <main className='min-h-screen'>
          <Outlet/>
        </main>

      <Footer />
    </>
  )
}

export default App
