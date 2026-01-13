
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HUD from './components/HUD';
import Home from './pages/Home';
import About from './pages/About';
import KitchensCategory from './pages/KitchensCategory';
import Contacts from './pages/Contacts';
import Planner from './pages/Planner';

// Плейсхолдеры для остальных страниц
const Promotions = () => (
  <div className="py-20 container mx-auto px-4 reveal active">
    <h1 className="text-4xl font-bold mb-8">Акции студии</h1>
    <div className="bg-primary p-12 rounded-2xl text-charcoal shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
      <h2 className="text-3xl font-bold mb-4">Скидка 15% на столешницы из камня</h2>
      <p className="text-lg mb-8">При заказе любой кухни до конца месяца замер и проект в подарок!</p>
      <button className="bg-charcoal text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">Узнать подробности</button>
    </div>
  </div>
);

const Designers = () => (
  <div className="py-20 container mx-auto px-4 reveal active">
    <h1 className="text-4xl font-bold mb-8">Дизайнерам</h1>
    <p className="text-xl text-gray-600 mb-12">Специальные условия сотрудничества для дизайнеров интерьера и архитекторов.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative group overflow-hidden rounded-2xl">
        <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl shadow-xl h-[400px] w-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Collaboration" />
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Ваши преимущества с нами:</h3>
        <ul className="space-y-4">
          {['Персональное агентское вознаграждение', 'Полная техническая поддержка проектов', 'Приоритет в производстве и доставке', 'Обширная библиотека материалов и текстур'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-primary text-charcoal px-8 py-4 font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all">Получить прайс-лист</button>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <HUD />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/about" element={<About />} />
            <Route path="/kitchens" element={<KitchensCategory />} />
            <Route path="/kitchens/:sub" element={<KitchensCategory />} />
            <Route path="/furniture" element={<KitchensCategory />} />
            <Route path="/furniture/:sub" element={<KitchensCategory />} />
            <Route path="/designers" element={<Designers />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
