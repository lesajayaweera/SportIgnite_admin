import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({isAuthenticated}){
    document.title ='Login';
    // const navigate = useNavigate();

    const [username, SetUsername] = useState('');
    const [password,SetPassword]= useState('');

    const [loading,setLoading] = useState(false);
    function submitForm(){
        
    }
    return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-sans"
      style={{
        backgroundImage:
          "url('/public/background.jpg')",
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