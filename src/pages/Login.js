import React from 'react';

const Login = ({ email, setEmail, password, setPassword, login, error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border mb-4 px-4 py-2 w-full rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border mb-4 px-4 py-2 w-full rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
