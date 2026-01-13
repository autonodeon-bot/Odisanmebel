
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { ArrowRight, Star, Ruler, Truck, ShieldCheck, MousePointer2 } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 lg:pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="container mx-auto h-full relative">
            <div className="absolute top-1/4 left-0 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-4">
              <div className="w-12 h-px bg-white/20"></div> [ Engineering Mode ]
            </div>
            <div className="absolute bottom-1/4 right-0 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-4">
               X: 42.09 / Y: 11.52 <div className="w-12 h-px bg-white/20"></div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-3 bg-primary/20 glass px-4 py-2 rounded-full border border-primary/30 mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
               <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">New Season 2025</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Эстетика <br />
              <span className="text-primary italic font-serif font-normal">вашего</span> дома
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed font-light max-w-xl animate-in fade-in duration-1000 delay-300">
              Мы не просто делаем мебель. Мы проектируем пространство, где каждый сантиметр работает на ваш комфорт и вдохновение.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
              <Link to="/kitchens" className="bg-primary text-charcoal px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-center hover:scale-105 hover:shadow-[0_0_30px_rgba(250,210,69,0.3)] transition-all">
                Каталог 2025
              </Link>
              <button onClick={() => window.scrollTo({ top: document.getElementById('quiz-section')?.offsetTop, behavior: 'smooth' })} className="glass text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-center hover:bg-white hover:text-charcoal transition-all">
                Расчет цены
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4 border-l-2 border-primary pl-4">Showroom</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Наши флагманские направления</h2>
            </div>
            <Link to="/kitchens" className="group flex items-center gap-4 font-bold text-charcoal bg-gray-50 px-8 py-4 rounded-full hover:bg-primary transition-all">
              Весь каталог <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Кухни', price: '45 000', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000', link: '/kitchens' },
              { title: 'Гостиные', price: '32 000', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000', link: '/furniture' },
              { title: 'Гардеробные', price: '28 000', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000', link: '/furniture/wardrobes' }
            ].map((cat, i) => (
              <div key={i} className="group relative h-[600px] overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
                <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-4xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-primary font-mono text-sm mb-8">от {cat.price} ₽/м²</p>
                  <Link to={cat.link} className="inline-flex items-center gap-3 bg-white text-charcoal px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all delay-100">
                    Смотреть <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Planner Section */}
      <section className="py-32 bg-gray-50 reveal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-10 h-full border-l border-charcoal/20">
                {Array.from({length: 10}).map((_, i) => <div key={i} className="border-r border-charcoal/10"></div>)}
            </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group cursor-pointer order-2 lg:order-1" onClick={() => navigate('/planner')}>
              <div className="bg-charcoal rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=1000" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" alt="3D" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 bg-primary text-charcoal rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(250,210,69,0.4)] group-hover:scale-110 transition-transform duration-500">
                    <MousePointer2 size={40} />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold uppercase tracking-[0.2em] mb-2">Live 3D Editor</p>
                    <p className="text-xs text-primary font-mono animate-pulse">SYSTEM READY :: START ENGINE</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40 uppercase">V-Ray Render Active</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold uppercase tracking-[0.3em] block mb-6 font-mono border-l-2 border-primary pl-4">Technology</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1]">Создайте проект мечты в 3D</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                Наш интеллектуальный конфигуратор позволяет не просто менять цвета, а полностью проектировать эргономику помещения с учетом реальных размеров и материалов.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Star />, text: '500+ Текстур Egger' },
                  { icon: <Ruler />, text: 'Авто-замер' },
                  { icon: <Activity />, text: 'Мгновенный расчет' },
                  { icon: <Settings />, text: 'AI Помощник' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="font-bold text-xs uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate('/planner')}
                className="bg-charcoal text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
              >
                Начать проектирование
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Interactive Quiz</span>
            <h2 className="text-5xl font-bold mb-6">Рассчитайте стоимость онлайн</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Advantages */}
      <section className="py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { icon: <Ruler size={40} />, title: 'Точный замер', desc: 'Бесплатный выезд дизайнера с образцами 24/7' },
              { icon: <Star size={40} />, title: 'Премиум фурнитура', desc: 'Blum, Hettich, Grass с пожизненной гарантией' },
              { icon: <Truck size={40} />, title: 'Своя логистика', desc: 'Бережная доставка и профессиональная сборка' },
              { icon: <ShieldCheck size={40} />, title: '2 года гарантии', desc: 'Полное сервисное обслуживание по договору' }
            ].map((adv, i) => (
              <div key={i} className="flex flex-col items-center text-center group reveal" style={{transitionDelay: `${i * 100}ms`}}>
                <div className="w-24 h-24 bg-white/5 text-primary rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-charcoal transition-all duration-500 shadow-xl">
                  {adv.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{adv.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Activity, Settings } from 'lucide-react';
