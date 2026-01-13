
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send, MapPin, Mail, Phone } from 'lucide-react';

const FooterLogo: React.FC = () => (
  <div className="flex items-center gap-3 h-10">
    <svg viewBox="0 0 100 100" className="h-full w-auto fill-primary" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C60.5 100 70.3 96.7 78.4 91.1L64.4 77.1C60.2 79.5 55.3 80.9 50 80.9C32.9 80.9 19.1 67.1 19.1 50C19.1 32.9 32.9 19.1 50 19.1C55.3 19.1 60.2 20.5 64.4 22.9L78.4 8.9C70.3 3.3 60.5 0 50 0Z" />
      <path d="M68.5 27.5V72.5L84 50L68.5 27.5Z" />
    </svg>
    <div className="flex items-baseline font-logo leading-none text-white">
      <span className="text-lg lowercase">o</span>
      <span className="text-2xl font-medium tracking-tight uppercase">disan</span>
      <span className="text-2xl font-light tracking-widest uppercase ml-2 text-primary">Studio</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/">
              <FooterLogo />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Создаем современную мебель, которая вдохновляет на жизнь. Индивидуальный подход и безупречное качество в каждой детали.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all"><Send size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-widest">Продукция</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/kitchens" className="hover:text-primary transition-colors">Кухни на заказ</Link></li>
              <li><Link to="/furniture/living-room" className="hover:text-primary transition-colors">Мебель для гостиной</Link></li>
              <li><Link to="/furniture/bedroom" className="hover:text-primary transition-colors">Спальни</Link></li>
              <li><Link to="/furniture/wardrobes" className="hover:text-primary transition-colors">Гардеробные системы</Link></li>
              <li><Link to="/furniture/sliding-wardrobes" className="hover:text-primary transition-colors">Шкафы-купе</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-widest">Компания</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/promotions" className="hover:text-primary transition-colors">Акции и скидки</Link></li>
              <li><Link to="/designers" className="hover:text-primary transition-colors">Сотрудничество с дизайнерами</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Гарантия и сервис</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-widest">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>г. Москва, ул. Примерная, д. 15, оф. 204</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+78000000000" className="hover:text-primary">+7 (800) 000-00-00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@odisan.ru" className="hover:text-primary">info@odisan.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2024 Odisan Studio. Все права защищены.</p>
          <p className="text-xs text-gray-500">Политика конфиденциальности | Разработка сайта</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
