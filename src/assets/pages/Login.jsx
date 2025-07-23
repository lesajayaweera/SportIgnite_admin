import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({isAuthenticated}){
    // const navigate = useNavigate();

    // const [username, SetUsername] = useState('');
    // const [password,SetPassword]= useState('');
    function submitForm(){
        
    }
    return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-sans"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-2xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );

}

export default Login;