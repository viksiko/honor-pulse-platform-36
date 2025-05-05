
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, User, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Register = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    address: '',
    useAddress: false,
    verificationCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы запрос на отправку кода верификации
    toast({
      title: "Код подтверждения отправлен",
      description: "Мы отправили код подтверждения на указанный вами номер телефона",
      variant: "default",
    });
    setStep(2);
  };

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы проверка кода верификации и регистрация пользователя
    toast({
      title: "Регистрация успешна!",
      description: "Вы успешно зарегистрировались на платформе. Вам начислено 10 билетов!",
      variant: "default",
    });
    // В реальном приложении здесь был бы редирект на dashboard
    window.location.href = '/dashboard';
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Регистрация избирателя</h1>

          {step === 1 ? (
            <form onSubmit={handleSubmitStep1} className="honor-card">
              <div className="mb-6">
                <Label htmlFor="fullName" className="block mb-2">ФИО</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="honor-input pl-10"
                    placeholder="Иванов Иван Иванович"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="phone" className="block mb-2">Номер телефона</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="honor-input pl-10"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="email" className="block mb-2">Электронная почта</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="honor-input pl-10"
                    placeholder="example@mail.ru"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input
                    id="useAddress"
                    name="useAddress"
                    type="checkbox"
                    checked={formData.useAddress}
                    onChange={handleChange}
                    className="h-4 w-4 text-honor-blue border-gray-300 rounded focus:ring-honor-blue"
                  />
                  <label htmlFor="useAddress" className="ml-2 block text-sm">
                    Указать адрес вместо избирательного участка
                  </label>
                </div>

                {formData.useAddress ? (
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="honor-input pl-10"
                      placeholder="Город, улица, дом"
                      required={formData.useAddress}
                    />
                    <p className="text-xs text-honor-darkGray mt-1">
                      Система автоматически определит ваш избирательный участок
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                    <Input
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="honor-input pl-10"
                      placeholder="Номер избирательного участка"
                      required={!formData.useAddress}
                    />
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full honor-button-primary">
                Продолжить
              </Button>

              <div className="mt-4 text-xs text-honor-darkGray text-center">
                Нажимая "Продолжить", вы соглашаетесь с правилами использования платформы и даете согласие на обработку персональных данных
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmitStep2} className="honor-card">
              <div className="text-center mb-6">
                <CheckCircle className="mx-auto text-honor-blue" size={48} />
                <h2 className="text-xl font-bold mt-4 mb-2">Подтвердите регистрацию</h2>
                <p className="text-honor-darkGray">
                  Мы отправили код подтверждения на указанный вами номер телефона
                </p>
              </div>

              <div className="mb-6">
                <Label htmlFor="verificationCode" className="block mb-2">Код подтверждения</Label>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  value={formData.verificationCode}
                  onChange={handleChange}
                  className="honor-input text-center text-xl tracking-widest"
                  placeholder="• • • • • •"
                  maxLength={6}
                  required
                />
                <div className="flex justify-between mt-2 text-sm">
                  <button type="button" className="text-honor-blue hover:underline">
                    Отправить код повторно
                  </button>
                  <span className="text-honor-darkGray">00:59</span>
                </div>
              </div>

              <Button type="submit" className="w-full honor-button-primary mb-4">
                Завершить регистрацию
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-honor-blue hover:underline"
                >
                  Вернуться назад
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-honor-darkGray">
              Уже зарегистрированы?{' '}
              <Link to="/login" className="text-honor-blue hover:underline">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
