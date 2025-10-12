import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
    <footer className="footer">
      <p>© {new Date().getFullYear()} Event Management System. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer