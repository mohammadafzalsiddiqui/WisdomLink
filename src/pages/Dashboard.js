import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {currentUser.email}</p>
      </div>
      <div className="dashboard-actions">
        <button onClick={() => navigate('/create-replica')}>Create New Replica</button>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;