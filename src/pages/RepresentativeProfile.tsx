
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, MessageSquare, MapPin, Building, Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data
const mockTasks = [
  {
    id: 1,
    title: "Ремонт дороги на ул. Ленина",
    address: "ул. Ленина, 10-20",
    description: "Ямочный ремонт асфальтового покрытия на участке дороги",
    solution: "Выделены средства из бюджета, составлен план работ",
    status: "in-progress",
    date: "2025-08-15",
    stages: [
      { id: 1, title: "Выделение средств", completed: true, date: "2025-05-10" },
      { id: 2, title: "Проведение конкурса подрядчиков", completed: true, date: "2025-06-20" },
      { id: 3, title: "Начало работ", completed: false, date: "2025-07-05" },
      { id: 4, title: "Завершение работ", completed: false, date: "2025-08-15" }
    ],
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    title: "Установка детской площадки",
    address: "ул. Пушкина, 42",
    description: "Установка современной детской площадки во дворе жилого дома",
    solution: "Проект согласован с жителями, выбрано оборудование",
    status: "completed",
    date: "2025-04-20",
    stages: [
      { id: 1, title: "Согласование с жителями", completed: true, date: "2025-02-10" },
      { id: 2, title: "Выбор оборудования", completed: true, date: "2025-02-25" },
      { id: 3, title: "Подготовка площадки", completed: true, date: "2025-03-15" },
      { id: 4, title: "Установка оборудования", completed: true, date: "2025-04-10" }
    ],
    likes: 56,
    comments: 12
  },
  {
    id: 3,
    title: "Озеленение сквера",
    address: "Центральный сквер",
    description: "Посадка деревьев и кустарников в центральном сквере",
    solution: "Определены виды деревьев, закуплены саженцы",
    status: "planned",
    date: "2025-09-30",
    stages: [
      { id: 1, title: "Разработка плана озеленения", completed: true, date: "2025-04-15" },
      { id: 2, title: "Закупка саженцев", completed: false, date: "2025-05-20" },
      { id: 3, title: "Подготовка почвы", completed: false, date: "2025-06-10" },
      { id: 4, title: "Высадка растений", completed: false, date: "2025-09-15" }
    ],
    likes: 38,
    comments: 8
  }
];

const mockRepresentative = {
  id: "1",
  name: "Иванов Иван Иванович",
  role: "Депутат городской думы",
  district: "Округ №1",
  party: "Единая Россия",
  bio: "Депутат городской думы с 2020 года. Активно занимаюсь вопросами благоустройства и развития инфраструктуры округа.",
  tasksTotal: 15,
  tasksCompleted: 8,
  rating: 4.7,
  contactEmail: "ivanov@duma.ru",
  contactPhone: "+7 (123) 456-78-90",
  officeAddress: "ул. Советская, 25, каб. 301",
};

const mockPosts = [
  {
    id: 1,
    title: "Отчет о проделанной работе за первый квартал",
    content: "За первый квартал 2025 года нам удалось реализовать несколько важных проектов...",
    date: "2025-04-01",
    likes: 42,
    comments: 7
  },
  {
    id: 2,
    title: "Встреча с жителями микрорайона",
    content: "Вчера провел встречу с жителями микрорайона. Обсудили насущные проблемы...",
    date: "2025-05-01",
    likes: 35,
    comments: 9
  }
];

const RepresentativeProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (taskId: number) => {
    const taskKey = `task-${taskId}`;
    if (liked[taskKey]) return;
    
    setLiked({...liked, [taskKey]: true});
    toast({
      title: "Реакция учтена",
      description: "Вы оценили задачу положительно",
      variant: "default",
    });
  };

  const handleSubscribe = () => {
    toast({
      title: "Подписка оформлена",
      description: "Вы подписались на обновления этого представителя власти",
      variant: "default",
    });
  };

  const handleSendMessage = () => {
    toast({
      title: "Сообщение",
      description: "Для отправки сообщения нужно 10 билетов",
      variant: "default",
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'completed': return 'Выполнено';
      case 'in-progress': return 'В процессе';
      case 'planned': return 'Запланировано';
      default: return 'Неизвестно';
    }
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="lg:col-span-1">
            <div className="honor-card mb-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <User size={48} />
                </Avatar>
                <h1 className="text-2xl font-bold text-center">{mockRepresentative.name}</h1>
                <p className="text-honor-darkGray">{mockRepresentative.role}</p>
                <div className="flex items-center mt-2">
                  <MapPin size={16} className="text-honor-blue mr-1" />
                  <span className="text-sm">{mockRepresentative.district}</span>
                </div>
                <Badge className="mt-2 bg-honor-blue">{mockRepresentative.party}</Badge>
              </div>

              <div className="border-t border-b py-4 mb-4">
                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">{mockRepresentative.tasksTotal}</p>
                    <p className="text-xs text-honor-darkGray">Всего задач</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">{mockRepresentative.tasksCompleted}</p>
                    <p className="text-xs text-honor-darkGray">Выполнено</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">{mockRepresentative.rating}</p>
                    <p className="text-xs text-honor-darkGray">Рейтинг</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">О представителе</h3>
                <p className="text-honor-darkGray text-sm">{mockRepresentative.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Контактная информация</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Mail size={16} className="text-honor-blue mr-2 mt-1" />
                    <span>{mockRepresentative.contactEmail}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone size={16} className="text-honor-blue mr-2 mt-1" />
                    <span>{mockRepresentative.contactPhone}</span>
                  </div>
                  <div className="flex items-start">
                    <Building size={16} className="text-honor-blue mr-2 mt-1" />
                    <span>{mockRepresentative.officeAddress}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button className="honor-button-primary" onClick={handleSubscribe}>
                  Подписаться
                </Button>
                <Button className="honor-button-secondary" onClick={handleSendMessage}>
                  Написать сообщение
                </Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="tasks">
              <TabsList className="mb-6 bg-honor-gray">
                <TabsTrigger value="tasks" className="flex-1">Задачи</TabsTrigger>
                <TabsTrigger value="blog" className="flex-1">Блог</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tasks" className="space-y-6">
                {mockTasks.map(task => (
                  <Card key={task.id} className="honor-card">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold">{task.title}</h2>
                      <Badge className={getStatusColor(task.status)}>
                        {getStatusText(task.status)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-honor-darkGray text-sm mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{task.address}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} className="mr-1" />
                      <span>До {new Date(task.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-honor-darkGray mb-2">{task.description}</p>
                      <p className="text-sm font-medium">Решение: {task.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Этапы выполнения</h3>
                      <div className="space-y-2">
                        {task.stages.map(stage => (
                          <div key={stage.id} className="flex items-center">
                            <div className={`h-4 w-4 rounded-full mr-3 ${stage.completed ? 'bg-honor-blue' : 'border border-honor-darkGray'}`}></div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className={`${stage.completed ? 'font-medium' : 'text-honor-darkGray'}`}>
                                  {stage.title}
                                </p>
                                <p className="text-xs text-honor-darkGray">
                                  {new Date(stage.date).toLocaleDateString('ru-RU')}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex space-x-4">
                        <button 
                          className={`flex items-center space-x-1 ${liked[`task-${task.id}`] ? 'text-honor-blue' : 'text-honor-darkGray hover:text-honor-blue'}`}
                          onClick={() => handleLike(task.id)}
                          disabled={liked[`task-${task.id}`]}
                        >
                          <ThumbsUp size={18} />
                          <span>{liked[`task-${task.id}`] ? task.likes + 1 : task.likes}</span>
                        </button>
                        <div className="flex items-center space-x-1 text-honor-darkGray">
                          <MessageSquare size={18} />
                          <span>{task.comments}</span>
                        </div>
                      </div>
                      <span className="text-sm text-honor-darkGray">
                        <Clock size={16} className="inline mr-1" />
                        Обновлено 2 дня назад
                      </span>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="blog" className="space-y-6">
                {mockPosts.map(post => (
                  <Card key={post.id} className="honor-card">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm text-honor-darkGray mb-4">
                      <Calendar size={16} className="inline mr-1" />
                      {new Date(post.date).toLocaleDateString('ru-RU')}
                    </p>
                    <p className="text-honor-darkGray mb-4">{post.content}</p>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1 text-honor-darkGray">
                          <ThumbsUp size={18} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-honor-darkGray">
                          <MessageSquare size={18} />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Button variant="link" className="text-honor-blue p-0">
                        Читать полностью
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RepresentativeProfile;
