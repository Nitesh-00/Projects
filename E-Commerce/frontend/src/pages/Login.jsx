import React, { useState } from 'react';

function Login() {
  const [currentPage, setCurrentPage] = useState('Signup');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 mb-40 m-auto gap-4 mt-14 text-gray-950" >
      <div className="inline-flex items-center gap-2 mb-4 mt-6">
        <p className="prata-regular text-3xl">{currentPage}</p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {currentPage === 'Login' ? null : ( <input type="text" placeholder="Name" required
          className=" py-2 px-3 w-full border border-gray-800"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        required
        className=" py-2 px-3 w-full border border-gray-800"
      />

      <input
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
