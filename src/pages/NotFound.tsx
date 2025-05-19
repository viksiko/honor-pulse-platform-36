
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, MapPin } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="honor-container py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-honor-blue mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Страница не найдена</h2>
          <p className="text-honor-darkGray mb-8">
            Извините, но страница, которую вы ищете, не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="flex items-center bg-honor-blue hover:bg-honor-darkBlue text-white w-full">
                <Home size={18} className="mr-2" />
                Вернуться на главную
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="outline" className="flex items-center w-full">
                <MapPin size={18} className="mr-2" />
                Карта округов
              </Button>
            </Link>
          </div>
          <div className="mt-6 text-sm text-honor-darkGray">
            <p>Если вы искали страницу управления задачами, перейдите в <Link to="/representative/tasks" className="text-honor-blue hover:underline">личный кабинет представителя</Link>.</p>
            <p className="mt-2">Или вы можете изучить <Link to="/representatives" className="text-honor-blue hover:underline">список всех представителей</Link>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
