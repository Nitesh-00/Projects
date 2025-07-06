import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }



    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[90%] sm:max-w-96 bg-white p-6 rounded-lg shadow-lg gap-5"
            >
                {/* Header */}
                <div className="mb-4">
                    <p className="text-3xl font-semibold text-gray-800">Admin Panel</p>
                </div>

                {/* Email Field */}
                <div className="w-full">
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                        required
                        className="py-2 px-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Password Field */}
                <div className="w-full">
                    <label className="block mb-1 text-gray-700">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        required
                        className="py-2 px-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
