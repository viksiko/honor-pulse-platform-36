
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication
    toast({
      title: "Вход выполнен!",
      description: "Вы успешно вошли в систему.",
      variant: "default",
    });
    // Redirect to user dashboard would happen here
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Вход в систему</h1>

          <form onSubmit={handleSubmit} className="honor-card">
            <div className="mb-6">
              <Label htmlFor="email" className="block mb-2">Электронная почта или телефон</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="honor-input pl-10"
                  placeholder="example@mail.ru"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <Label htmlFor="password">Пароль</Label>
                <Link to="/forgot-password" className="text-sm text-honor-blue hover:underline">
                  Забыли пароль?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="honor-input pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full honor-button-primary">
              Войти
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-honor-darkGray">
              Еще не зарегистрированы?{' '}
              <Link to="/register" className="text-honor-blue hover:underline">
                Регистрация
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/representative/login" className="text-honor-blue hover:underline">
              Войти как представитель власти
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
