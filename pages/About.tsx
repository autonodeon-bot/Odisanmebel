
import React from 'react';
import { CheckCircle2, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Более 10 лет <br /><span className="text-primary font-light italic">создаем уют</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Odisan Studio — это не просто мебельная фабрика. Это команда единомышленников, которые верят, что мебель должна быть не только функциональной, но и красивой частью вашей жизни.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581447100512-35520abc19ef?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg mt-8 object-cover h-[400px]" alt="Production" />
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-lg object-cover h-[400px]" alt="Design" />
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest block mb-4">Наши принципы</span>
              <h2 className="text-4xl font-bold mb-8">Качество без компромиссов</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0"><Award className="text-primary" size={32} /></div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Европейские стандарты</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Мы используем только сертифицированные материалы из Европы, безопасные для здоровья и долговечные в эксплуатации.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0"><Users className="text-primary" size={32} /></div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Опытная команда</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Наши мастера имеют стаж более 15 лет в производстве элитной мебели и знают все тонкости работы с любым материалом.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0"><Lightbulb className="text-primary" size={32} /></div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Авторский дизайн</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Каждый проект уникален. Мы учитываем все ваши пожелания и особенности помещения для создания идеального пространства.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">1500+</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Счастливых семей</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">10+</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Лет на рынке</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">24</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Месяца гарантии</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">450+</p>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Готовых проектов в год</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
