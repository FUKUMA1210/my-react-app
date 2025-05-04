import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from '../../components/Sidebar/Sidebar';
import FeatureList from '../../components/FeatureList/FeatureList';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [fontSize, setFontSize] = useState<'small'|'medium'|'large'>('medium');

  useEffect(() => {
    const cls = ['font-small','font-medium','font-large'];
    document.body.classList.remove(...cls);
    document.body.classList.add(`font-${fontSize}`);
    return () => document.body.classList.remove(...cls);
  }, [fontSize]);

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="main">
        <div className="inner">
          {/* 字體大小切換 */}
          <div className="font-control">
            <button
              className={fontSize==='small'?'active':''}
              onClick={() => setFontSize('small')}
            >小</button>
            <button
              className={fontSize==='medium'?'active':''}
              onClick={() => setFontSize('medium')}
            >中</button>
            <button
              className={fontSize==='large'?'active':''}
              onClick={() => setFontSize('large')}
            >大</button>
          </div>

          {/* 左上角頭像 */}
          <img
            src={user.avatarUrl}
            alt={`${user.name} 的頭像`}
            className="dashboard-avatar"
            onClick={() => (window.location.href = '/profile')}
          />

          <FeatureList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
