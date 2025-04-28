// src/pages/Dashboard/Dashboard.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from '../../components/Sidebar/Sidebar';
import FeatureList from '../../components/FeatureList/FeatureList';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="main">
        <div className="inner">
          <img
            src={user.avatarUrl}
            alt={`${user.name} 的頭像`}
            className="dashboard-avatar"
            onClick={() => window.location.href = '/profile'}
          />

          <FeatureList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
