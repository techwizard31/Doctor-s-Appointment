import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
          method:"POST",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(formData)
      })
      const json = await response.json()
      if(!response.ok){
         alert(json.error)
      }
      if(response.ok){
          localStorage.setItem('Patient',JSON.stringify(json))
          navigate("/appointment")
      }
      setFormData({
            email: '',
            password: ''
        });
    }
  return (
    <div className="grid place-items-center h-screen">
    <form className="bg-white w-1/4 dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800" onSubmit={handleSubmit} >
      <div className="px-8 py-10 md:px-10">
        <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
          Welcome Back!
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
          We missed you, login to continue.
        </p>
        <div className="mt-10">
          <div className="relative">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              for="email"
            >
              Email
            </label>
            <input
              placeholder="you@example.com"
              className="block w-5/6 px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              for="password"
            >
              Password
            </label>
            <input
              placeholder="••••••••"
              className="block w-5/6 px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={(e)=>handleChange(e)}
            />
          </div>    
          <div className="mt-10">
            <button
              className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800 cursor-pointer"
              type="submit"
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
        <div className="text-sm text-blue-900 dark:text-blue-300 text-center flex flex-row justify-center gap-1">
          Don't have an account ? 
          <a className="font-medium underline text-cyan-400" href="/signup">
             Sign up
          </a>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Login;
