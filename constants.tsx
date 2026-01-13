
import { MenuItem, Product } from './types';

export const COLORS = {
  primary: '#FAD245',
  charcoal: '#384343',
  white: '#FFFFFF',
};

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Главная', path: '/' },
  { name: '3D Планировщик', path: '/planner' },
  { name: 'Акции', path: '/promotions' },
  { name: 'О нас', path: '/about' },
  { 
    name: 'Кухни', 
    path: '/kitchens',
    children: [
      { name: 'Прямые кухни', path: '/kitchens/straight' },
      { name: 'Угловые кухни', path: '/kitchens/corner' },
      { name: 'П-образные кухни', path: '/kitchens/u-shaped' },
      { name: 'Кухни с островом', path: '/kitchens/island' },
      { name: 'Кухни в студию', path: '/kitchens/studio' },
    ]
  },
  { 
    name: 'Мебель', 
    path: '/furniture',
    children: [
      { name: 'Мебель для гостиной', path: '/furniture/living-room' },
      { name: 'Мебель для спальни', path: '/furniture/bedroom' },
      { name: 'Мебель для прихожей', path: '/furniture/hallway' },
      { name: 'Мебель для ванной', path: '/furniture/bathroom' },
      { name: 'Гардеробные', path: '/furniture/wardrobes' },
      { name: 'Шкафы-купе', path: '/furniture/sliding-wardrobes' },
      { name: 'Мебель для кабинетов', path: '/furniture/office' },
      { name: 'Мебель для детской', path: '/furniture/kids' },
    ]
  },
  { name: 'Дизайнерам', path: '/designers' },
  { name: 'Контакты', path: '/contacts' },
];

export const PRODUCTS: Product[] = [
  // КУХНИ
  {
    id: 'k1',
    name: 'Linear Graphite',
    pricePerM2: 45000,
    image: 'https://images.unsplash.com/photo-1556912177-f51b08d9aa55?q=80&w=1200&auto=format&fit=crop',
    category: 'kitchens',
    subcategory: 'straight',
    description: 'Минималистичная прямая кухня в графитовых тонах с интегрированными ручками.'
  },
  {
    id: 'k2',
    name: 'Nordic Corner',
    pricePerM2: 42000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    category: 'kitchens',
    subcategory: 'corner',
    description: 'Угловая планировка в скандинавском стиле. Максимальное использование пространства.'
  },
  {
    id: 'k3',
    name: 'Industrial U-Shape',
    pricePerM2: 55000,
    image: 'https://images.unsplash.com/photo-1556909212-d5b6043bc624?q=80&w=1200&auto=format&fit=crop',
    category: 'kitchens',
    subcategory: 'u-shaped',
    description: 'П-образная кухня для больших пространств. Фасады под бетон и массив дуба.'
  },
  {
    id: 'k4',
    name: 'Grand Island Luxury',
    pricePerM2: 75000,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    category: 'kitchens',
    subcategory: 'island',
    description: 'Премиальная кухня с массивным островом из натурального камня.'
  },
  {
    id: 'k5',
    name: 'Studio Compact',
    pricePerM2: 35000,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
    category: 'kitchens',
    subcategory: 'studio',
    description: 'Компактное решение для смарт-квартир. Скрытые системы хранения.'
  },
  
  // МЕБЕЛЬ
  {
    id: 'f1',
    name: 'City Living Wall',
    pricePerM2: 32000,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'living-room',
    description: 'Система хранения для гостиной с нишей под ТВ и подсветкой.'
  },
  {
    id: 'f2',
    name: 'Velvet Dream Bedroom',
    pricePerM2: 38000,
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'bedroom',
    description: 'Комплект мебели для спальни: кровать с мягким изголовьем и тумбы.'
  },
  {
    id: 'f3',
    name: 'Pure Glass Wardrobe',
    pricePerM2: 48000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'wardrobes',
    description: 'Открытая гардеробная система со стеклянными фасадами и алюминиевым профилем.'
  },
  {
    id: 'f4',
    name: 'Smart Hallway',
    pricePerM2: 28000,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'hallway',
    description: 'Функциональная прихожая с интегрированным пуфом и зеркалом во весь рост.'
  },
  {
    id: 'f5',
    name: 'Aqua Zen Bathroom',
    pricePerM2: 45000,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'bathroom',
    description: 'Влагостойкая мебель для ванной комнаты с текстурой дерева.'
  },
  {
    id: 'f6',
    name: 'Executive Office',
    pricePerM2: 52000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'office',
    description: 'Кабинет из массива дерева для продуктивной работы.'
  },
  {
    id: 'f7',
    name: 'Montessori Kids',
    pricePerM2: 30000,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'kids',
    description: 'Безопасная и экологичная мебель для детской комнаты.'
  },
  {
    id: 'f8',
    name: 'Mirror Slider',
    pricePerM2: 35000,
    image: 'https://images.unsplash.com/photo-1616486341351-702524d73ccc?q=80&w=1200&auto=format&fit=crop',
    category: 'furniture',
    subcategory: 'sliding-wardrobes',
    description: 'Шкаф-купе с зеркальными дверями, визуально расширяющий пространство.'
  }
];
