
import React, { useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { PRODUCTS, MENU_ITEMS } from '../constants';
import { ChevronRight, Filter, Star, Eye, Home } from 'lucide-react';

const KitchensCategory: React.FC = () => {
  const { sub } = useParams();
  const location = useLocation();
  
  // Определяем основную категорию по пути
  const isFurniture = location.pathname.includes('/furniture');
  const currentCategory = isFurniture ? 'furniture' : 'kitchens';
  const categoryLabel = isFurniture ? 'Мебель' : 'Кухни';
  
  // Фильтруем товары
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = p.category === currentCategory;
      const matchSub = sub ? p.subcategory === sub : true;
      return matchCategory && matchSub;
    });
  }, [currentCategory, sub]);

  // Находим данные для сайдбара
  const sideMenu = MENU_ITEMS.find(m => m.path === `/${currentCategory}`);
  
  // SEO заголовок и описание
  const pageTitle = useMemo(() => {
    if (!sub) return `Каталог ${categoryLabel}`;
    const subItem = sideMenu?.children?.find(c => c.path.endsWith(sub));
    return subItem ? subItem.name : categoryLabel;
  }, [sub, sideMenu, categoryLabel]);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4 flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home size={12} /> Главная
          </Link>
          <ChevronRight size={10} />
          <Link to={`/${currentCategory}`} className="hover:text-primary transition-colors">
            {categoryLabel}
          </Link>
          {sub && (
            <>
              <ChevronRight size={10} />
              <span className="text-charcoal">{pageTitle}</span>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-12">
            <div className="reveal active">
              <h4 className="font-bold mb-8 uppercase tracking-[0.3em] text-xs border-l-4 border-primary pl-4">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to={`/${currentCategory}`} 
                    className={`font-bold text-sm block py-2 px-4 rounded-lg transition-all ${!sub ? 'bg-primary text-charcoal' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    Все модели
                  </Link>
                </li>
                {sideMenu?.children?.map(child => {
                  const isActive = location.pathname === child.path;
                  return (
                    <li key={child.path}>
                      <Link 
                        to={child.path} 
                        className={`text-sm block py-2 px-4 rounded-lg transition-all font-medium ${isActive ? 'bg-charcoal text-white' : 'text-gray-500 hover:text-charcoal hover:bg-gray-50'}`}
                      >
                        {child.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="p-8 bg-charcoal text-white rounded-3xl relative overflow-hidden group reveal active">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">Бесплатный проект</h4>
              <p className="text-xs text-gray-400 mb-8 font-light leading-relaxed relative z-10">
                Закажите замер сегодня и получите 3D-визуализацию вашего интерьера в подарок.
              </p>
              <button onClick={() => window.scrollTo({top: 1000, behavior: 'smooth'})} className="w-full bg-primary text-charcoal py-4 rounded-xl font-bold uppercase tracking-widest text-xs relative z-10 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                Вызвать замерщика
              </button>
            </div>
          </aside>

          {/* Catalog Content */}
          <main className="lg:w-3/4">
            <div className="mb-16 reveal active">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{pageTitle}</h1>
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
                {sub 
                  ? `Предлагаем индивидуальные решения в категории "${pageTitle}". Современные материалы, премиальная фурнитура и безупречный монтаж.`
                  : `Ознакомьтесь с нашим полным каталогом изделий в разделе "${categoryLabel}". Мы создаем мебель, которая служит десятилетиями.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 bg-gray-50 p-6 rounded-2xl reveal active">
              <span className="text-charcoal text-xs font-mono uppercase">Результатов: {filteredProducts.length}</span>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-gray-400">Сортировка:</span>
                  <select className="bg-transparent focus:outline-none cursor-pointer">
                    <option>По популярности</option>
                    <option>Сначала дешевле</option>
                    <option>Сначала дороже</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-charcoal text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">
                  <Filter size={14} /> Фильтр
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredProducts.map((product, idx) => (
                  <div 
                    key={product.id} 
                    className="group border border-gray-100 rounded-[2.5rem] overflow-hidden bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 reveal active"
                    style={{transitionDelay: `${idx * 100}ms`}}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-charcoal scale-50 group-hover:scale-100 transition-transform duration-500">
                              <Eye size={24} />
                          </button>
                      </div>
                      <div className="absolute top-6 left-6 flex flex-col gap-2">
                          <div className="glass text-charcoal px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg border border-white/20">
                            Premium Collection
                          </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                          <div className="flex items-center gap-1 text-primary">
                              <Star size={14} fill="currentColor" />
                              <span className="text-charcoal font-bold text-sm">5.0</span>
                          </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-light leading-relaxed">{product.description}</p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block mb-1">Стоимость от</span>
                          <p className="text-2xl font-bold text-charcoal">{product.pricePerM2.toLocaleString()} <span className="text-sm font-normal text-gray-400">₽/м²</span></p>
                        </div>
                        <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-charcoal group-hover:bg-primary transition-all">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-400 text-lg">В данной подкатегории пока нет товаров. Пожалуйста, выберите другой раздел.</p>
                <Link to={`/${currentCategory}`} className="inline-block mt-8 text-primary font-bold uppercase tracking-widest border-b-2 border-primary">Вернуться в общий каталог</Link>
              </div>
            )}
            
            {/* Bottom SEO Text */}
            <div className="mt-24 p-12 bg-gray-50 rounded-[3rem] reveal active">
               <h3 className="text-2xl font-bold mb-6">Особенности наших изделий</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed font-light">
                  <p>Мы используем только высококачественные ЛДСП и МДФ от ведущих производителей Egger и Kronospan. Вся фурнитура поставляется брендами Blum и Hettich, что гарантирует плавность хода и долговечность механизмов на протяжении всего срока службы.</p>
                  <p>Каждый проект проходит тщательную проверку качества на производстве перед отправкой клиенту. Мы гарантируем точность размеров до 1 мм и идеальную стыковку всех элементов вашей будущей мебели.</p>
               </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default KitchensCategory;
