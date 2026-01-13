
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const QUIZ_STEPS = [
  {
    question: "Какая планировка кухни вам нравится?",
    options: ["Прямая", "Угловая", "П-образная", "С островом", "Для студии"],
  },
  {
    question: "В каком стиле планируете интерьер?",
    options: ["Минимализм", "Классика", "Лофт", "Скандинавский", "Хай-тек"],
  },
  {
    question: "На какой бюджет рассчитываете (за м2)?",
    options: ["До 30 000 руб.", "30 000 - 50 000 руб.", "От 50 000 руб.", "Пока не знаю"],
  },
];

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < QUIZ_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone} для расчета стоимости.`);
    // Reset or redirect logic here
  };

  const progress = ((currentStep + 1) / QUIZ_STEPS.length) * 100;

  return (
    <div className="max-w-4xl mx-auto bg-charcoal text-white p-8 md:p-12 rounded-xl shadow-2xl overflow-hidden relative">
      {!isFinished ? (
        <>
          <div className="mb-8">
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Шаг {currentStep + 1} из {QUIZ_STEPS.length}</span>
            <h2 className="text-3xl font-bold mb-4">{QUIZ_STEPS[currentStep].question}</h2>
            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUIZ_STEPS[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="group flex items-center justify-between p-5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-primary rounded-lg transition-all text-left"
              >
                <span className="text-lg font-medium">{option}</span>
                <ArrowRight className="text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="mx-auto text-primary mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-4">Почти готово!</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Оставьте свои контакты, чтобы мы отправили вам предварительный расчет и персональную скидку.
          </p>
          <form onSubmit={handleFinalSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-primary text-charcoal font-bold py-5 rounded-lg uppercase tracking-widest hover:scale-[1.02] transition-transform"
            >
              Получить расчет и скидку
            </button>
          </form>
        </div>
      )}
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <span className="text-9xl font-bold italic">ODISAN</span>
      </div>
    </div>
  );
};

export default Quiz;
