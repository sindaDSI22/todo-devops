import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      </header>
      <footer style={footerStyle}>
        <p>Abdaoui Sinda 2GL2</p>
      </footer>
    </div>
  )
}

const headerStyle = {
  background: '#ffa500',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const footerStyle = {
  background: '#ffa500',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%'
}

export default Header;
