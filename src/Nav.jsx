
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Team', to: '/team' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Events', to: '/events' }
  ];
  

  return (
    <header className="bg-[#242424] font-['Special Gothic Expanded One'] sticky top-0 z-50">
      <nav className="py-1 px-1 container mx-auto">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="text-xl font-bold tracking-wider">
            <a href="#" className="text-white hover:text-green-400">
              <img 
                src="/logo.png" 
                alt="E M F Logo" 
                className="w-[140px] h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div 
                className="text-white text-lg font-bold hidden"
                style={{ display: 'none' }}
              >
                EMF LOGO
              </div>
            </a>
          </div>
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col items-center text-white  font-bold space-y-4 mt-4 mb-6`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          <div>
            <a href="#">
              <img 
                src="/logo.png" 
                alt="E M F Logo" 
                className="w-[140px] h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div 
                className="text-white text-lg font-bold hidden"
                style={{ display: 'none' }}
              >
                EMF LOGO
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center text-white  font-bold space-x-10 text-lg">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Add Font Awesome for the hamburger icon */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
    </header>
  );
}