
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Plus,
  ThumbsUp
} from 'lucide-react';

// Mock data
const mockTasks = [
  {
    id: 1,
    title: "Ремонт дороги на ул. Ленина",
    address: "ул. Ленина, 10-20",
    status: "in-progress",
    date: "2025-08-15",
    likes: 24,
    comments: 5,
    createdAt: "2025-05-01"
  },
  {
    id: 2,
    title: "Установка детской площадки",
    address: "ул. Пушкина, 42",
    status: "completed",
    date: "2025-04-20",
    likes: 56,
    comments: 12,
    createdAt: "2025-03-15"
  }
];

const mockNotifications = [
  {
    id: 1,
    title: "Новый ответ на ваше задание",
    text: "Представитель Иванов И.И. ответил на ваше задание",
    date: "2025-05-04",
    read: false
  },
  {
    id: 2,
    title: "Изменение статуса задания",
    text: "Задание «Ремонт дороги» перешло на новый этап",
    date: "2025-05-03",
    read: true
  },
  {
    id: 3,
    title: "Новая публикация",
    text: "От представителя, на которого вы подписаны",
    date: "2025-05-02",
    read: true
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User profile sidebar */}
          <div className="lg:col-span-1">
            <Card className="honor-card mb-6">
              <div className="flex flex-col items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <User size={48} />
                </Avatar>
                <h1 className="text-2xl font-bold">Иван Петров</h1>
                <p className="text-honor-darkGray">Избиратель</p>
                <div className="flex items-center mt-2">
                  <MapPin size={16} className="text-honor-blue mr-1" />
                  <span className="text-sm">Округ №1</span>
                </div>
                <Badge className="mt-2 bg-honor-blue">10 баллов активности</Badge>
              </div>

              <div className="border-t border-b py-4 mb-4">
                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">5</p>
                    <p className="text-xs text-honor-darkGray">Заданий</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">12</p>
                    <p className="text-xs text-honor-darkGray">Реакций</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">35</p>
                    <p className="text-xs text-honor-darkGray">Билетов</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Мой представитель</h3>
                <Link to="/representative/profile/1" className="flex items-center p-3 border rounded-xl hover:bg-honor-gray transition-colors">
                  <div className="bg-honor-gray rounded-full p-2 mr-3">
                    <User size={24} className="text-honor-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Иванов Иван Иванович</p>
                    <p className="text-sm text-honor-darkGray">Депутат городской думы</p>
                  </div>
                </Link>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Быстрые действия</h3>
                <div className="space-y-3">
                  <Link to="/tasks/create">
                    <Button className="w-full honor-button-primary flex items-center justify-center">
                      <Plus size={18} className="mr-2" />
                      Создать задание
                    </Button>
                  </Link>
                  <Link to="/map">
                    <Button className="w-full honor-button-secondary flex items-center justify-center">
                      <MapPin size={18} className="mr-2" />
                      Открыть карту округов
                    </Button>
                  </Link>
                  <Link to="/balance">
                    <Button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-honor-darkGray">
                      <Plus size={18} className="mr-2" />
                      Пополнить баланс
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="tasks">
              <TabsList className="mb-6 bg-honor-gray">
                <TabsTrigger value="tasks" className="flex-1">Мои задания</TabsTrigger>
                <TabsTrigger value="notifications" className="flex-1">Уведомления</TabsTrigger>
                <TabsTrigger value="subscriptions" className="flex-1">Подписки</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tasks" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Мои задания</h2>
                  <Link to="/tasks/create">
                    <Button className="honor-button-primary flex items-center">
                      <Plus size={18} className="mr-2" />
                      Создать задание
                    </Button>
                  </Link>
                </div>
                
                {mockTasks.map(task => (
                  <Card key={task.id} className="honor-card">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{task.title}</h3>
                      <Badge className={
                        task.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : task.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-orange-100 text-orange-800'
                      }>
                        {task.status === 'completed' ? 'Выполнено' : 
                         task.status === 'in-progress' ? 'В процессе' : 
                         'Запланировано'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-honor-darkGray text-sm mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{task.address}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} className="mr-1" />
                      <span>До {new Date(task.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1 text-honor-darkGray">
                          <ThumbsUp size={18} />
                          <span>{task.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-honor-darkGray">
                          <MessageSquare size={18} />
                          <span>{task.comments}</span>
                        </div>
                      </div>
                      <span className="text-sm text-honor-darkGray">
                        <Clock size={16} className="inline mr-1" />
                        Создано {new Date(task.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </Card>
                ))}
                
                {mockTasks.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-honor-darkGray mb-4">У вас пока нет заданий</p>
                    <Link to="/tasks/create">
                      <Button className="honor-button-primary">
                        Создать первое задание
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="notifications">
                <h2 className="text-2xl font-bold mb-6">Уведомления</h2>
                
                <div className="space-y-4">
                  {mockNotifications.map(notification => (
                    <Card key={notification.id} className={`p-4 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
                      <div className="flex items-start">
                        <div className={`rounded-full p-2 mr-3 ${notification.read ? 'bg-gray-100' : 'bg-blue-100'}`}>
                          <Bell size={18} className={notification.read ? 'text-honor-darkGray' : 'text-honor-blue'} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-honor-darkGray">
                              {new Date(notification.date).toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                          <p className="text-sm text-honor-darkGray mt-1">{notification.text}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {mockNotifications.length === 0 && (
                    <div className="text-center py-10">
                      <p className="text-honor-darkGray">У вас нет новых уведомлений</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="subscriptions">
                <h2 className="text-2xl font-bold mb-6">Мои подписки</h2>
                
                <div className="space-y-4">
                  <Card className="p-4">
                    <Link to="/representative/profile/1" className="flex items-center hover:bg-honor-gray/10 p-2 rounded-lg transition-colors">
                      <Avatar className="h-12 w-12 mr-4">
                        <User size={24} />
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Иванов Иван Иванович</h3>
                        <p className="text-sm text-honor-darkGray">Депутат городской думы</p>
                      </div>
                    </Link>
                  </Card>
                  
                  <Card className="p-4">
                    <Link to="/representative/profile/2" className="flex items-center hover:bg-honor-gray/10 p-2 rounded-lg transition-colors">
                      <Avatar className="h-12 w-12 mr-4">
                        <User size={24} />
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Петров Петр Петрович</h3>
                        <p className="text-sm text-honor-darkGray">Глава администрации</p>
                      </div>
                    </Link>
                  </Card>
                  
                  <div className="text-center pt-4">
                    <Link to="/representatives">
                      <Button className="honor-button-secondary">
                        Найти больше представителей
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
