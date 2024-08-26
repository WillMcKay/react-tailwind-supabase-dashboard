import React, { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";


export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            navigate("/dashboard"); // Redirect to /dashboard
            break;
          case "SIGNED_OUT":
            setUser(null);
            navigate("/");
            break;
          default:
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, [navigate]);

  const login = async () => {
    setError(""); // Clear any previous errors
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      setError(error.message); // Display error if login fails
    } else {
      navigate("/dashboard"); // Redirect to /dashboard on successful login
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/dashboard" /> // Redirect logged-in users from the login page to /dashboard
          ) : (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              login={login}
              error={error}
            />
          )
        }
      />
      <Route
        path="/dashboard/*"
        element={user ? <Dashboard /> : <Navigate to="/" />} // Redirect non-logged-in users from /dashboard/* to /
      />
    </Routes>
  );
}
