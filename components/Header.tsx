
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-auto fill-charcoal" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C60.5 100 70.3 96.7 78.4 91.1L64.4 77.1C60.2 79.5 55.3 80.9 50 80.9C32.9 80.9 19.1 67.1 19.1 50C19.1 32.9 32.9 19.1 50 19.1C55.3 19.1 60.2 20.5 64.4 22.9L78.4 8.9C70.3 3.3 60.5 0 50 0Z" />
      <path d="M68.5 27.5V72.5L84 50L68.5 27.5Z" />
    </svg>
    <div className="flex items-baseline font-logo leading-none text-charcoal">
      <span className="text-xl lowercase">o</span>
      <span className="text-3xl font-medium tracking-tight uppercase">disan</span>
      <span className="text-3xl font-light tracking-widest uppercase ml-3">Studio</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'h-16 glass shadow-lg' : 'h-24 bg-white'}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="transition-transform duration-500 hover:scale-105">
            <Logo className={isScrolled ? "h-8" : "h-10 md:h-12"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${activeDropdown === item.name ? 'text-primary' : 'text-charcoal'}`}
                >
                  {item.name}
                  {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </Link>
                
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 glass shadow-2xl py-4 flex flex-col border-t-2 border-primary animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-charcoal hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+78000000000" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-primary/10' : 'bg-gray-100'} group-hover:bg-primary`}>
                <Phone size={16} />
              </div>
              <span className="text-sm font-bold">+7 (800) 000-00-00</span>
            </a>
            <button className="bg-charcoal text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-charcoal transition-all shadow-md active:scale-95">
              Расчет
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-0 bg-white z-[60] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
           <div className="flex justify-between items-center mb-12">
             <Logo className="h-10" />
             <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
           </div>
           <nav className="space-y-6 flex-grow">
             {MENU_ITEMS.map((item) => (
               <div key={item.name}>
                 <Link 
                   to={item.path}
                   className="text-2xl font-bold uppercase tracking-tighter"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {item.name}
                 </Link>
                 {item.children && (
                   <div className="mt-4 pl-4 grid grid-cols-1 gap-2 border-l border-primary/20">
                     {item.children.map((child) => (
                       <Link
                         key={child.name}
                         to={child.path}
                         className="text-gray-500 text-sm py-1"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {child.name}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
             ))}
           </nav>
           <div className="mt-auto">
             <a href="tel:+78000000000" className="text-3xl font-bold block mb-6">+7 (800) 000-00-00</a>
             <button className="w-full bg-primary text-charcoal py-5 rounded-xl font-bold uppercase tracking-widest text-lg">
                Оставить заявку
             </button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
