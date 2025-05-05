
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, MapPin, Plus, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="honor-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-honor-blue">Честь</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/tasks/create" className="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors">
              <Plus size={20} />
              <span>Создать задание</span>
            </Link>
            <Link to="/map" className="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors">
              <MapPin size={20} />
              <span>Карта округов</span>
            </Link>
            <Link to="/representatives" className="flex items-center space-x-1 text-honor-text hover:text-honor-blue transition-colors">
              <User size={20} />
              <span>Представители</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button className="honor-button-secondary flex items-center space-x-1">
                <LogIn size={18} />
                <span>Войти</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button className="honor-button-primary">Регистрация</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
