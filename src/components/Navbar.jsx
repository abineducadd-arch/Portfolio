// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `font-inter tracking-[0.15em] uppercase text-[10px] font-bold transition-all duration-500 whitespace-nowrap ${
      isActive
        ? 'text-white relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white'
        : 'text-white/40 hover:text-white'
    }`;

  return (
    <nav className="navbar">
  <div className="navbar-logo">PORTFOLIO</div>
  <div className="navbar-links">
    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Work</NavLink>
    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
    <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
  </div>
  <NavLink to="/contact" className="connect-btn">Connect</NavLink>
</nav>
  );
};

export default Navbar;