import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-logo">PORTFOLIO</div>

      {/* Desktop Links */}
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Work</NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
        <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
      </div>

      <NavLink to="/contact" className="connect-btn">Connect</NavLink>

      {/* Toggle Button (Mobile only) */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </div>

      {/* Accordion Menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contact" className="mobile-connect" onClick={() => setOpen(false)}>
          Connect
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;