
import React, { useState, useEffect } from 'react';
import { MousePointer2, Save, Send, HelpCircle, Loader2 } from 'lucide-react';

const Planner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Имитация загрузки для плавного появления iframe
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-gray-100">
      {/* Planner Toolbar */}
      <div className="bg-charcoal text-white px-6 py-3 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <MousePointer2 size={20} className="text-primary" />
            3D Конструктор Odisan
          </h1>
          <div className="hidden md:flex gap-4 ml-8 text-xs text-gray-400 uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-1"><HelpCircle size={14} /> Инструкция</span>
            <span className="flex items-center gap-1"><Save size={14} /> Сохранить проект</span>
          </div>
        </div>
        <button className="bg-primary text-charcoal px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors flex items-center gap-2">
          <Send size={16} /> Отправить дизайнеру
        </button>
      </div>

      <div className="flex-grow relative bg-[#f0f0f0]">
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center">
            <Loader2 className="animate-spin text-primary mb-4" size={48} />
            <h2 className="text-xl font-bold text-charcoal">Запуск bplanner 3D...</h2>
            <p className="text-gray-500 mt-2">Пожалуйста, подождите, загружается библиотека модулей</p>
          </div>
        )}
        
        {/* Интеграция bplanner через iframe */}
        {/* ПРИМЕЧАНИЕ: Здесь используется демонстрационный URL bplanner. 
            Для работы с вашим аккаунтом замените src на ваш персональный URL. */}
        <iframe 
          src="https://bplanner.me/demo/kitchen" 
          className="w-full h-full border-none shadow-inner"
          title="Odisan 3D Planner"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Quick Tips Footer */}
      <div className="bg-white border-t border-gray-200 px-6 py-2 hidden md:flex items-center justify-between text-[11px] text-gray-500 font-medium">
        <div className="flex gap-6">
          <span>ЛКМ — Вращение камеры</span>
          <span>ПКМ — Перемещение</span>
          <span>Scroll — Масштаб</span>
        </div>
        <div className="text-charcoal font-bold">
          ODISAN STUDIO <span className="text-primary">×</span> BPLANNER
        </div>
      </div>
    </div>
  );
};

export default Planner;
