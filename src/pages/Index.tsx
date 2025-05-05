
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserIcon, Building, Users, MapPinIcon, CheckIcon, Star, MessageSquare, Ticket, Edit } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-honor-blue to-honor-darkBlue text-white py-20">
        <div className="honor-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Платформа «Честь»</h1>
              <p className="text-xl mb-8">
                Современная платформа для эффективного взаимодействия граждан с представителями власти
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="bg-white text-honor-blue hover:bg-honor-gray rounded-xl px-6 py-2 text-lg">
                    Зарегистрироваться
                  </Button>
                </Link>
                <Link to="/map">
                  <Button className="bg-transparent border border-white hover:bg-white/10 text-white rounded-xl px-6 py-2 text-lg">
                    Карта округов
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/placeholder.svg" alt="Платформа Честь" className="w-full max-w-md mx-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-honor-gray">
        <div className="honor-container">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности платформы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/map" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <MapPinIcon size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Карта округов</h3>
              <p className="text-honor-darkGray">
                Интерактивная карта избирательных округов с информацией о представителях власти
              </p>
            </Link>
            
            <Link to="/representatives" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <Building size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Профили представителей</h3>
              <p className="text-honor-darkGray">
                Публичные профили представителей власти с информацией о выполненных задачах
              </p>
            </Link>
            
            <Link to="/tasks/create" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <CheckIcon size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Создание заданий</h3>
              <p className="text-honor-darkGray">
                Возможность создавать задания для представителей власти и отслеживать их выполнение
              </p>
            </Link>

            <Link to="/representatives" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <Star size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Рейтинг представителей</h3>
              <p className="text-honor-darkGray">
                Автоматически формируемый рейтинг представителей власти на основе выполненных задач
              </p>
            </Link>

            <Link to="/messages" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <MessageSquare size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Прямая коммуникация</h3>
              <p className="text-honor-darkGray">
                Возможность напрямую общаться с представителями власти через систему сообщений
              </p>
            </Link>

            <Link to="/balance" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <Ticket size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Система билетов</h3>
              <p className="text-honor-darkGray">
                Система поощрений и вознаграждений за активность на платформе
              </p>
            </Link>

            <Link to="/blog" className="honor-card flex flex-col items-center text-center p-8 hover:bg-gray-50 transition-colors">
              <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                <Edit size={32} className="text-honor-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Блоги представителей</h3>
              <p className="text-honor-darkGray">
                Личные блоги представителей власти с новостями и информацией для избирателей
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="honor-container">
          <div className="honor-card bg-honor-blue text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к платформе!</h2>
                <p className="text-xl mb-6">
                  Зарегистрируйтесь сейчас и начните взаимодействовать с представителями власти
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button className="bg-white text-honor-blue hover:bg-honor-gray rounded-xl px-6 py-2 text-lg">
                      Для избирателей
                    </Button>
                  </Link>
                  <Link to="/register/representative">
                    <Button className="bg-transparent border border-white hover:bg-white/10 text-white rounded-xl px-6 py-2 text-lg">
                      Для представителей власти
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <Users size={180} className="text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-honor-gray">
        <div className="honor-container">
          <h2 className="text-3xl font-bold text-center mb-12">Платформа в цифрах</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="honor-card flex flex-col items-center text-center p-6">
              <span className="text-4xl font-bold text-honor-blue mb-2">1,000+</span>
              <p className="text-honor-darkGray">Активных пользователей</p>
            </div>
            
            <div className="honor-card flex flex-col items-center text-center p-6">
              <span className="text-4xl font-bold text-honor-blue mb-2">200+</span>
              <p className="text-honor-darkGray">Представителей власти</p>
            </div>
            
            <div className="honor-card flex flex-col items-center text-center p-6">
              <span className="text-4xl font-bold text-honor-blue mb-2">500+</span>
              <p className="text-honor-darkGray">Решенных задач</p>
            </div>
            
            <div className="honor-card flex flex-col items-center text-center p-6">
              <span className="text-4xl font-bold text-honor-blue mb-2">50+</span>
              <p className="text-honor-darkGray">Округов на карте</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
