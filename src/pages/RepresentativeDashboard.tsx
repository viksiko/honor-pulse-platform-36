
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Plus,
  ThumbsUp,
  Settings,
  Edit,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
  },
  {
    id: 3,
    title: "Озеленение сквера",
    address: "Центральный сквер",
    status: "planned",
    date: "2025-09-30",
    likes: 38,
    comments: 8,
    createdAt: "2025-04-15"
  }
];

const mockMessages = [
  {
    id: 1,
    sender: "Иванов Иван",
    text: "Добрый день! Хотел узнать о планах по ремонту дороги на ул. Ленина.",
    timestamp: "2025-05-04",
    unread: true
  },
  {
    id: 2,
    sender: "Петрова Мария",
    text: "Здравствуйте! Когда будет построена новая школа в микрорайоне?",
    timestamp: "2025-05-03",
    unread: true
  },
  {
    id: 3,
    sender: "Сидоров Алексей",
    text: "Спасибо за помощь с решением проблемы освещения в нашем дворе!",
    timestamp: "2025-05-02",
    unread: false
  }
];

const RepresentativeDashboard = () => {
  const { toast } = useToast();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send post to backend
    toast({
      title: "Публикация создана",
      description: "Ваша публикация успешно создана и опубликована",
      variant: "default",
    });
    
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleUpdateTaskStatus = (taskId: number) => {
    toast({
      title: "Статус обновлен",
      description: "Статус задачи успешно обновлен",
      variant: "default",
    });
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="lg:col-span-1">
            <Card className="honor-card mb-6">
              <div className="flex flex-col items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <User size={48} />
                </Avatar>
                <h1 className="text-2xl font-bold">Иванов Иван Иванович</h1>
                <p className="text-honor-darkGray">Депутат городской думы</p>
                <div className="flex items-center mt-2">
                  <MapPin size={16} className="text-honor-blue mr-1" />
                  <span className="text-sm">Округ №1</span>
                </div>
                <Badge className="mt-2 bg-honor-blue">Единая Россия</Badge>
              </div>

              <div className="border-t border-b py-4 mb-4">
                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">15</p>
                    <p className="text-xs text-honor-darkGray">Задач</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">8</p>
                    <p className="text-xs text-honor-darkGray">Выполнено</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-honor-blue">4.7</p>
                    <p className="text-xs text-honor-darkGray">Рейтинг</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Быстрые действия</h3>
                <div className="space-y-3">
                  <Link to="/tasks/create">
                    <Button className="w-full honor-button-primary flex items-center justify-center">
                      <Plus size={18} className="mr-2" />
                      Создать новую задачу
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button className="w-full honor-button-secondary flex items-center justify-center">
                      <Edit size={18} className="mr-2" />
                      Написать в блог
                    </Button>
                  </Link>
                  <Link to="/messages">
                    <Button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-honor-darkGray">
                      <MessageSquare size={18} className="mr-2" />
                      Центр сообщений
                      {mockMessages.filter(m => m.unread).length > 0 && (
                        <Badge className="ml-2 bg-honor-blue">{mockMessages.filter(m => m.unread).length}</Badge>
                      )}
                    </Button>
                  </Link>
                  <Link to="/settings">
                    <Button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-honor-darkGray">
                      <Settings size={18} className="mr-2" />
                      Настройки профиля
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
                <TabsTrigger value="tasks" className="flex-1">Задачи</TabsTrigger>
                <TabsTrigger value="messages" className="flex-1">Сообщения</TabsTrigger>
                <TabsTrigger value="blog" className="flex-1">Блог</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tasks" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Мои задачи</h2>
                  <Link to="/tasks/create">
                    <Button className="honor-button-primary flex items-center">
                      <Plus size={18} className="mr-2" />
                      Создать задачу
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
                    
                    <div className="flex justify-between items-center mb-2">
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
                    
                    <div className="flex space-x-2 mt-4 pt-4 border-t">
                      <Button 
                        className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800"
                        onClick={() => handleUpdateTaskStatus(task.id)}
                      >
                        Обновить статус
                      </Button>
                      <Link to={`/tasks/edit/${task.id}`} className="flex-1">
                        <Button className="w-full honor-button-secondary">
                          Редактировать
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
                
                {mockTasks.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-honor-darkGray mb-4">У вас пока нет задач</p>
                    <Link to="/tasks/create">
                      <Button className="honor-button-primary">
                        Создать первую задачу
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="messages">
                <h2 className="text-2xl font-bold mb-6">Новые сообщения</h2>
                
                <div className="space-y-4">
                  {mockMessages.map(message => (
                    <Card key={message.id} className={`p-4 ${message.unread ? 'bg-blue-50' : 'bg-white'}`}>
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-3 mt-1">
                          <User size={20} />
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">
                              {message.sender}
                              {message.unread && (
                                <Badge className="ml-2 bg-honor-blue text-white text-xs">Новое</Badge>
                              )}
                            </h3>
                            <span className="text-xs text-honor-darkGray">
                              {new Date(message.timestamp).toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                          <p className="text-sm mt-1">{message.text}</p>
                          <div className="flex space-x-2 mt-3">
                            <Link to="/messages" className="flex-1">
                              <Button className="w-full honor-button-primary text-sm py-1">
                                Ответить
                              </Button>
                            </Link>
                            {message.unread && (
                              <Button className="text-sm py-1 px-3 bg-gray-100 hover:bg-gray-200 text-honor-darkGray">
                                Пометить как прочитанное
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {mockMessages.length === 0 && (
                    <div className="text-center py-10">
                      <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                      <p className="text-honor-darkGray">У вас нет новых сообщений</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/messages">
                    <Button className="honor-button-secondary">
                      Перейти в центр сообщений
                    </Button>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="blog">
                <h2 className="text-2xl font-bold mb-6">Новая публикация в блог</h2>
                
                <Card className="honor-card">
                  <form onSubmit={handleCreatePost}>
                    <div className="mb-4">
                      <Label htmlFor="post-title" className="block mb-2">Заголовок</Label>
                      <Input
                        id="post-title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        className="honor-input"
                        placeholder="Введите заголовок публикации"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="post-content" className="block mb-2">Содержание</Label>
                      <Textarea
                        id="post-content"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        className="honor-input min-h-[200px]"
                        placeholder="Введите текст публикации..."
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Label className="block mb-2">Приложенные файлы</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                        <p className="text-honor-darkGray mb-2">
                          Перетащите файлы сюда или нажмите для выбора
                        </p>
                        <Button type="button" variant="outline" className="text-honor-blue">
                          Выбрать файлы
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-honor-darkGray">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="text-sm">Публикация будет видна всем избирателям</span>
                      </div>
                      <Button type="submit" className="honor-button-primary">
                        Опубликовать
                      </Button>
                    </div>
                  </form>
                </Card>
                
                <div className="mt-6 text-center">
                  <Link to="/blog">
                    <Button className="honor-button-secondary">
                      Перейти в мой блог
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RepresentativeDashboard;
