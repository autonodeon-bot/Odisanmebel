
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Send, MessageCircle } from 'lucide-react';

const Contacts: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-16 text-center">Контакты</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Info Blocks */}
          <div className="bg-gray-50 p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-charcoal" />
            </div>
            <h3 className="text-xl font-bold mb-4">Наш адрес</h3>
            <p className="text-gray-500 font-light">
              г. Москва, ул. Примерная, д. 15, оф. 204 <br />
              БЦ "Центральный", 2 этаж
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Phone className="text-charcoal" />
            </div>
            <h3 className="text-xl font-bold mb-4">Телефоны</h3>
            <a href="tel:+78000000000" className="text-lg font-medium hover:text-primary transition-colors">+7 (800) 000-00-00</a>
            <a href="tel:+74950000000" className="text-lg font-medium hover:text-primary transition-colors">+7 (495) 000-00-00</a>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Mail className="text-charcoal" />
            </div>
            <h3 className="text-xl font-bold mb-4">Электронная почта</h3>
            <a href="mailto:info@odisan.ru" className="text-lg font-medium hover:text-primary transition-colors">info@odisan.ru</a>
            <a href="mailto:sale@odisan.ru" className="text-lg font-medium hover:text-primary transition-colors">sale@odisan.ru</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center overflow-hidden">
             <div className="text-center p-8">
               <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
               <p className="text-gray-500 font-bold">Интерактивная карта Yandex/Google</p>
               <p className="text-gray-400 text-sm mt-2">Здесь будет размещена карта с меткой вашего салона</p>
             </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Имя</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-4 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Телефон</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-4 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Сообщение</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-lg p-4 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-charcoal text-white font-bold py-5 rounded-lg uppercase tracking-widest hover:bg-black transition-all">
                Отправить запрос
              </button>
              <div className="flex items-center justify-center gap-6 mt-8">
                <span className="text-sm text-gray-400">Мы в мессенджерах:</span>
                <a href="#" className="text-[#25D366] hover:scale-110 transition-transform"><MessageCircle size={28} /></a>
                <a href="#" className="text-[#0088cc] hover:scale-110 transition-transform"><Send size={28} /></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
