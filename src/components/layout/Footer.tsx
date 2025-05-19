
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-honor-gray mt-auto">
      <div className="honor-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Платформа «Честь»</h3>
            <p className="text-honor-darkGray">
              Цифровая платформа взаимодействия между гражданами и представителями власти
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Для избирателей</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-honor-darkGray hover:text-honor-blue">Регистрация</Link></li>
              <li><Link to="/map" className="text-honor-darkGray hover:text-honor-blue">Карта округов</Link></li>
              <li><Link to="/tasks/create" className="text-honor-darkGray hover:text-honor-blue">Создать задание</Link></li>
              <li><Link to="/blog" className="text-honor-darkGray hover:text-honor-blue">Новости округов</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Для представителей</h3>
            <ul className="space-y-2">
              <li><Link to="/register/representative" className="text-honor-darkGray hover:text-honor-blue">Регистрация</Link></li>
              <li><Link to="/representative/dashboard" className="text-honor-darkGray hover:text-honor-blue">Личный кабинет</Link></li>
              <li><Link to="/representative/tasks" className="text-honor-darkGray hover:text-honor-blue">Управление задачами</Link></li>
              <li><Link to="/representative/statistics" className="text-honor-darkGray hover:text-honor-blue">Статистика и отчеты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-honor-darkGray">support@chest.ru</p>
            <p className="text-honor-darkGray">+7 (800) 123-45-67</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/messages" className="text-honor-blue hover:underline">
                Центр сообщений
              </Link>
              <Link to="/help" className="text-honor-blue hover:underline flex items-center">
                <HelpCircle size={14} className="mr-1" />
                Помощь и поддержка
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-honor-darkGray">
          <p>© 2025 Платформа «Честь». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
