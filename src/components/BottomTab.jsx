import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomTab() {
  const location = useLocation();
  return (
    <div className="d-flex align-items-center justify-content-center bottom-tab">
      <Link
        className={`flex-grow-1 d-flex flex-column align-items-center justify-content-center text-decoration-none ${
          location.pathname !== '/leaderboard' ? 'link-light' : 'link-secondary'
        }`}
        to="/"
        replace
      >
        <i className="bi bi-grid-3x3"></i>
        Main
      </Link>
      <Link
        className={`flex-grow-1 d-flex flex-column align-items-center justify-content-center text-decoration-none ${
          location.pathname === '/leaderboard' ? 'link-light' : 'link-secondary'
        }`}
        to="/leaderboard"
        replace
      >
        <i className="bi bi-view-stacked"></i>
        Leaderboard
      </Link>
    </div>
  );
}
