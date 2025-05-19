
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Plus,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';

// Task type definition
type Task = {
  id: number;
  title: string;
  address: string;
  status: "in-progress" | "completed" | "planned";
  date: string;
  likes: number;
  comments: number;
  createdAt: string;
  hasEscalation?: boolean;
};

// Mock data
const mockTasks: Task[] = [
  {
    id: 1,
    title: "Ремонт дороги на ул. Ленина",
    address: "ул. Ленина, 10-20",
    status: "in-progress",
    date: "2025-08-15",
    likes: 24,
    comments: 5,
    createdAt: "2025-05-01",
    hasEscalation: true
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

const TasksTab = () => {
  const handleUpdateTaskStatus = (taskId: number) => {
    toast.success("Статус обновлен", {
      description: "Статус задачи успешно обновлен"
    });
  };

  return (
    <>
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
        <Card key={task.id} className="honor-card mb-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start">
              <h3 className="text-xl font-bold">{task.title}</h3>
              {task.hasEscalation && (
                <Badge className="ml-2 bg-red-100 text-red-800">
                  Эскалация
                </Badge>
              )}
            </div>
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
              className={`flex-1 ${task.hasEscalation ? 'bg-red-100 hover:bg-red-200 text-red-800' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
              onClick={() => handleUpdateTaskStatus(task.id)}
            >
              {task.hasEscalation ? 'Ответить на эскалацию' : 'Обновить статус'}
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
    </>
  );
};

export default TasksTab;
