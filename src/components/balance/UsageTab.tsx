
import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageSquare, MapPin } from 'lucide-react';

const UsageTab: React.FC = () => {
  return (
    <Card className="honor-card">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Как использовать билеты</h2>
        
        <div className="space-y-6">
          <div className="border rounded-xl p-4">
            <div className="flex items-center mb-2">
              <MessageSquare size={20} className="text-honor-blue mr-2" />
              <h3 className="text-lg font-semibold">Написать представителю власти</h3>
            </div>
            <p className="text-honor-darkGray mb-2">
              Отправка личного сообщения любому представителю власти стоит 10 билетов.
            </p>
            <p className="text-sm text-honor-darkGray">
              Вы получите уведомление, когда представитель власти прочитает ваше сообщение.
            </p>
          </div>
          
          <div className="border rounded-xl p-4">
            <div className="flex items-center mb-2">
              <MapPin size={20} className="text-honor-blue mr-2" />
              <h3 className="text-lg font-semibold">Создать задание</h3>
            </div>
            <p className="text-honor-darkGray mb-2">
              Создание нового задания для решения проблемы стоит 10 билетов.
            </p>
            <p className="text-sm text-honor-darkGray">
              Ваше задание будет видно всем пользователям платформы и представителям власти вашего округа.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UsageTab;
