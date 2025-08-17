import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "home", scroll: true },
    { name: "About", to: "about", scroll: true },
    { name: "Events", to: "events", scroll: true },
    { name: "Gallery", to: "gallery", scroll: true },
    { name: "Team", to: "/team", scroll: false }, // only this is a new page
  ];

  const handleNavClick = (item) => {
    if (item.scroll) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(item.to);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(item.to);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#242424] font-['Special Gothic Expanded One'] sticky top-0 z-50">
      <nav className="py-1 px-1 container mx-auto">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="text-xl font-bold tracking-wider">
            <a
              onClick={() => handleNavClick({ name: "Home", to: "home", scroll: true })}
              className="text-white hover:text-green-400 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="E M F Logo"
                className="w-[140px] h-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div
                className="text-white text-lg font-bold hidden"
                style={{ display: "none" }}
              >
                EMF LOGO
              </div>
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col items-center text-white font-bold space-y-4 mt-4 mb-6`}
        >
          {navItems.map((item, index) =>
            item.scroll ? (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={index}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          <div>
            <a
              onClick={() => handleNavClick({ name: "Home", to: "home", scroll: true })}
              className="cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="E M F Logo"
                className="w-[140px] h-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div
                className="text-white text-lg font-bold hidden"
                style={{ display: "none" }}
              >
                EMF LOGO
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center text-white font-bold space-x-10 text-lg">
            {navItems.map((item, index) =>
              item.scroll ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(item)}
                  className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="hover:bg-[#FFBF00] focus:bg-[#FFBF00] rounded-2xl px-2 py-1 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
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
