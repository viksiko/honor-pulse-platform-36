
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, User, CheckCircle, Upload, Building } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RepresentativeRegister = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    party: '',
    district: '',
    bio: '',
    verificationCode: '',
    idCard: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        idCard: e.target.files[0],
      });
    }
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
    // В реальном приложении здесь была бы проверка кода верификации
    setStep(3);
  };

  const handleSubmitStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка данных о представителе власти
    toast({
      title: "Заявка отправлена!",
      description: "Ваша заявка на регистрацию отправлена и будет рассмотрена в ближайшее время.",
      variant: "default",
    });
    // Редирект на страницу ожидания верификации
    // window.location.href = '/verification-pending';
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Регистрация представителя власти</h1>

          {step === 1 && (
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

              <Button type="submit" className="w-full honor-button-primary">
                Продолжить
              </Button>

              <div className="mt-4 text-xs text-honor-darkGray text-center">
                Нажимая "Продолжить", вы соглашаетесь с правилами использования платформы и даете согласие на обработку персональных данных
              </div>
            </form>
          )}

          {step === 2 && (
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
                Продолжить
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

          {step === 3 && (
            <form onSubmit={handleSubmitStep3} className="honor-card">
              <h2 className="text-xl font-bold mb-6">Информация о представителе</h2>

              <div className="mb-6">
                <Label htmlFor="position" className="block mb-2">Должность</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="honor-input pl-10"
                    placeholder="Депутат городской думы"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="party" className="block mb-2">Политическая партия</Label>
                <Select
                  defaultValue=""
                  onValueChange={(value) => handleSelectChange("party", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите партию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="er">Единая Россия</SelectItem>
                    <SelectItem value="sr">Справедливая Россия</SelectItem>
                    <SelectItem value="kprf">КПРФ</SelectItem>
                    <SelectItem value="ldpr">ЛДПР</SelectItem>
                    <SelectItem value="other">Другая</SelectItem>
                    <SelectItem value="none">Беспартийный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <Label htmlFor="district" className="block mb-2">Избирательный округ/Район</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
                  <Input
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="honor-input pl-10"
                    placeholder="Округ №1 / Ленинский район"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="bio" className="block mb-2">О себе</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="honor-input min-h-[100px]"
                  placeholder="Кратко расскажите о себе и своей деятельности..."
                  required
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="idCard" className="block mb-2">Загрузите удостоверение</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  {formData.idCard ? (
                    <div>
                      <p className="font-medium text-honor-blue mb-2">
                        {formData.idCard.name}
                      </p>
                      <p className="text-sm text-honor-darkGray">
                        {(formData.idCard.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="mt-2"
                        onClick={() => setFormData({...formData, idCard: null})}
                      >
                        Заменить файл
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto mb-2 text-honor-darkGray" size={32} />
                      <p className="text-honor-darkGray mb-2">
                        Перетащите файл сюда или нажмите для выбора
                      </p>
                      <Input
                        id="idCard"
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="text-honor-blue"
                        onClick={() => document.getElementById('idCard')?.click()}
                      >
                        Выбрать файл
                      </Button>
                    </>
                  )}
                </div>
                <p className="text-xs text-honor-darkGray mt-2">
                  Загрузите скан или фото удостоверения для верификации вашего аккаунта. Допустимые форматы: JPG, PNG, PDF. Максимальный размер: 5MB.
                </p>
              </div>

              <Button type="submit" className="w-full honor-button-primary mb-4">
                Отправить заявку
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
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

export default RepresentativeRegister;
