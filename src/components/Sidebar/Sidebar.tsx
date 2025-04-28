import React, { useState } from 'react';
import './Sidebar.css';

const menuItems = [
  { label: '分享', href: '/分享' },
  { label: '通知', href: '/通知' },
  { label: '如何使用', href: '/如何使用' },
  { label: '版本資訊', href: '/版本資訊' },
  { label: 'ID', href: '/ID' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}

      <aside className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={() => setIsOpen(false)} aria-label="Close menu">×</button>
        <h2>Menu</h2>
        <ul>
          {menuItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
