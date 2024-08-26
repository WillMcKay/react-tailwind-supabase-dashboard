import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Home from './Home';
import Settings from './Settings';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/" element={<Home />} /> {/* Default route */}
          </Routes>
          <Outlet /> {/* This will render the nested routes */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
