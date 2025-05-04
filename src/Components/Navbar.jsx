import React, { useState, useEffect } from "react"; 
import { NavLink, useLocation } from "react-router-dom"; 
import { FaCoffee, FaShoppingBag, FaChartLine, FaBoxes, FaUsers, FaSignOutAlt, FaWallet, FaBars, FaTimes, FaHome, FaClipboardList } from "react-icons/fa";

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    // Handle scroll for sticky header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { path: '/', name: 'Dashboard', icon: <FaHome /> },
    { path: '/products', name: 'Products', icon: <FaShoppingBag /> },
    { path: '/orders', name: 'Orders', icon: <FaClipboardList /> },
    { path: '/inventory', name: 'Inventory', icon: <FaBoxes /> },
    { path: '/finance', name: 'Finance', icon: <FaWallet /> },
    { path: '/customers', name: 'Customers', icon: <FaUsers /> },
  ];

  // Close the menu when a link is clicked (mobile only)
  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return ( 
    <>
      {/* Desktop sidebar (visible on lg screens and up) */}
      {!isMobile && (
        <div className="fixed left-0 top-0 bottom-0 w-64 bg-[#5c4434] text-white shadow-xl z-40 transition-all ease-in-out duration-300">
          <div className="flex items-center justify-center py-6 border-b border-[#8c6d5c]">
            <FaCoffee className="text-3xl text-[#c69f80] mr-3" />
            <h1 className="text-2xl font-bold">Sleepy Owl</h1>
          </div>
          
          <div className="px-4 py-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center py-3 px-4 rounded-md transition-colors ${
                        isActive 
                          ? 'bg-[#8c6d5c] text-white' 
                          : 'text-[#f9f5f0] hover:bg-[#6e5242]'
                      }`
                    }
                    end={item.path === '/'}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-6 border-t border-[#8c6d5c] mt-8">
              <NavLink
                to="/login"
                className="flex items-center py-3 px-4 rounded-md text-[#f9f5f0] hover:bg-[#6e5242] transition-colors"
              >
                <span className="mr-3"><FaSignOutAlt /></span>
                <span>Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Mobile and tablet header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#5c4434] shadow-md' : 'bg-[#5c4434]'}`}>
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <FaCoffee className="text-2xl text-[#c69f80] mr-2" />
            <span className="text-xl font-bold text-white">Sleepy Owl</span>
          </div>

          {/* Current page title - only on mobile */}
          {isMobile && (
            <div className="text-white font-medium">
              {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
            </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && (
          <div 
            className={`absolute top-full left-0 right-0 bg-[#5c4434] border-t border-[#8c6d5c] overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="px-4 py-2">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center py-3 px-4 rounded-md transition-colors ${
                          isActive 
                            ? 'bg-[#8c6d5c] text-white' 
                            : 'text-[#f9f5f0] hover:bg-[#6e5242]'
                        }`
                      }
                      onClick={closeMenu}
                      end={item.path === '/'}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink
                    to="/login"
                    className="flex items-center py-3 px-4 rounded-md text-[#f9f5f0] hover:bg-[#6e5242] transition-colors"
                    onClick={closeMenu}
                  >
                    <span className="mr-3"><FaSignOutAlt /></span>
                    <span>Logout</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Page content spacer */}
      <div className={`${!isMobile ? 'ml-64' : ''}`}></div>
    </>
  ); 
}; 
 
export default Navbar;