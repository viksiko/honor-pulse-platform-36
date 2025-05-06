
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  User, 
  Users, 
  MapPin, 
  Plus, 
  MessageSquare, 
  ThumbsUp,
  Star 
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gradient-to-r from-honor-blue to-honor-darkBlue text-white py-16">
        <div className="honor-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Платформа «Честь»
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Цифровая платформа для прямого взаимодействия между избирателями и представителями власти
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="w-full sm:w-auto">
                  <Button className="bg-white text-honor-blue hover:bg-gray-100 font-bold px-6 py-6 rounded-xl w-full">
                    Для избирателей
                  </Button>
                </Link>
                <Link to="/register/representative" className="w-full sm:w-auto">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold px-6 py-6 rounded-xl w-full">
                    Для представителей власти
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:flex justify-center hidden">
              <img 
                src="/illustration-placeholder.png" 
                alt="Платформа Честь" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-16 bg-gray-50">
        <div className="honor-container">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности платформы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Карта округов</h3>
              <p className="text-honor-darkGray">
                Интерактивная карта избирательных округов с информацией о представителях и активных заданиях
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Plus className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Создание заданий</h3>
              <p className="text-honor-darkGray">
                Возможность создавать конкретные задания для представителей власти и отслеживать их выполнение
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Система сообщений</h3>
              <p className="text-honor-darkGray">
                Прямое общение между избирателями и представителями власти через встроенный мессенджер
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Профили представителей</h3>
              <p className="text-honor-darkGray">
                Подробная информация о представителях власти, их деятельности и результатах работы
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <ThumbsUp className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Система оценки</h3>
              <p className="text-honor-darkGray">
                Возможность оценивать работу представителей власти и оставлять отзывы о выполненных заданиях
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="bg-honor-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Star className="text-honor-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Система рейтинга</h3>
              <p className="text-honor-darkGray">
                Рейтинговая система для представителей власти на основе активности и качества выполнения заданий
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="py-16">
        <div className="honor-container">
          <h2 className="text-3xl font-bold text-center mb-4">Как это работает</h2>
          <p className="text-honor-darkGray text-center max-w-2xl mx-auto mb-12">
            Простой процесс взаимодействия избирателей и представителей власти
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-honor-gray rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <User className="text-honor-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Шаг 1</h3>
              <p className="text-honor-darkGray">
                Зарегистрируйтесь на платформе как избиратель или представитель власти
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-honor-gray rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-honor-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Шаг 2</h3>
              <p className="text-honor-darkGray">
                Найдите свой избирательный округ на интерактивной карте
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-honor-gray rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-honor-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Шаг 3</h3>
              <p className="text-honor-darkGray">
                Создавайте задания, общайтесь с представителями и отслеживайте результаты
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register">
              <Button className="honor-button-primary text-lg px-8 py-6">
                Начать пользоваться платформой
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
