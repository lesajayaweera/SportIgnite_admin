import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust the path based on your project structure

function Login() {
  document.title = 'Login';
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const usersRef = collection(db, "admin"); // Collection: admin
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setMessage("No user found with this email.");
        setLoading(false);
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.password === password) {
        // Login success - you can store session/token here
        localStorage.setItem('userToken', 'pass');
        localStorage.setItem('adminEmail', userData.email);

        setMessage("Login successful!");
        setLoading(false);

        // Redirect to dashboard
        navigate("/");
      } else {
        setMessage("Incorrect password.");
        setLoading(false);
      }
    } catch (error) {
      setMessage("Error logging in: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-sans"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-2xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        {message && (
          <p className="text-sm text-center mb-4">
            {message}
          </p>
        )}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-white"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
