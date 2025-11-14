import React from 'react';
import './Header1.css';

const Header1 = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className="header1">
      <div className="header1-content">
        <a href="#main-content" className="skip-link">
          Skip to main content.
        </a>
        <div className="divider"></div>
        <div className="date-time">
          {formattedDate} | {dayName}
        </div>
      </div>
    </div>
  );
};

export default Header1;

