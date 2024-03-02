import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className="text-white bg-orange-400 flex justify-between items-center px-8 py-2">
      <a href="/#projects">
        {' '}
        <h3 className="text-xl font-medium">PhilV1</h3>
      </a>
      <nav
        className="bg-orange-400 flex gap-6 text-xl font-medium"
        ref={navRef}
      >
        <a className="hover:underline" href="/#h" onClick={showNavbar}>
          Home
        </a>
        <a className="hover:underline" href="/#about" onClick={showNavbar}>
          About
        </a>
        <a className="hover:underline" href="/#projects" onClick={showNavbar}>
          Projects
        </a>
        <a className="hover:underline" href="/#contact" onClick={showNavbar}>
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
