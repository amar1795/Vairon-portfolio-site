import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Next.js App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
};

export default Layout;