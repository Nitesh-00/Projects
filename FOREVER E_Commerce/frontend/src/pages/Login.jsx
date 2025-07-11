import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from '../context/Context';
import { toast } from 'react-toastify'


function Login() {
  const [currentPage, setCurrentPage] = useState('Signup');
  const { token, setToken, backendUrl, navigate } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (currentPage === 'Signup') {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
};

useEffect(() => {
  if (token && localStorage.getItem('token')) {
    navigate('/');
  }
}, [token, navigate]);


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 mb-40 m-auto gap-4 mt-14 text-gray-950" >
      <div className="inline-flex items-center gap-2 mb-4 mt-6">
        <p className="prata-regular text-3xl">{currentPage}</p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {currentPage === 'Login' ? null : (<input onChange={(e) => { setName(e.target.value) }} value={name} type="text" placeholder="Name" required
        className=" py-2 px-3 w-full border border-gray-800"
      />
      )}

      <input
        onChange={(e) => { setEmail(e.target.value) }} value={email}
        type="email"
        placeholder="Email"
        required
        className=" py-2 px-3 w-full border border-gray-800"
      />

      <input
        onChange={(e) => { setPassword(e.target.value) }} value={password}
        type="password"
        placeholder="Password"
        required
        className=" py-2 px-3 w-full border border-gray-800"
      />

      <div className="flex justify-between items-center w-full text-sm mb-4 mt-[-8px]">
        <p className="text-gray-500 cursor-pointer hover:underline">
          Forgot your password?
        </p>
        <button
          type="button"
          onClick={() =>
            setCurrentPage(currentPage === 'Signup' ? 'Login' : 'Signup')
          }
          className="text-gray-600 hover:underline"
        >
          {currentPage === 'Signup' ? 'Login Here' : 'Create Account'}
        </button>
      </div>

      <button
        className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
      >
        {currentPage === 'Signup' ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
}

export default Login;
