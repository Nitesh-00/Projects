import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token') : "")
  
  useEffect(()=>{
    
    localStorage.setItem('token',token)
  },[token])


  return (
    <div className='bg-gray-50 max-h-screen'>
      <ToastContainer />
      {
        !token ? <Login setToken={setToken}></Login>
          : <>
            <NavBar setToken={setToken}></NavBar>
            <hr />
            <div className='flex w-full'>
              <SideBar></SideBar>
              <div className='w-[70%] ml-[max(5vw,25px)] my-8 mx-auto text-gray-600 text-base'>
                <Routes>
                  <Route path='/add' element={<Add token={token} />}></Route>
                  <Route path='/list' element={<List token={token} />}></Route>
                  <Route path='/orders' element={<Orders token={token} />}></Route>
                </Routes>
              </div>
            </div>

          </>
      }


    </div>
  )
}

export default App
