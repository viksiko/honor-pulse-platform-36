
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wallet, CreditCard, Share2, Award, Plus, Clock, CheckCircle, ThumbsUp, MessageSquare, User, Minus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock data for transactions
const mockTransactions = [
  { id: 1, type: 'earn', description: 'Регистрация на платформе', amount: 10, date: '2025-05-01' },
  { id: 2, type: 'earn', description: 'Приглашённый друг', amount: 10, date: '2025-05-02' },
  { id: 3, type: 'spend', description: 'Создание задания', amount: -10, date: '2025-05-03' },
  { id: 4, type: 'earn', description: 'Просмотр рекламы', amount: 1, date: '2025-05-04' },
  { id: 5, type: 'earn', description: '5 лайков на посты', amount: 1, date: '2025-05-04' },
  { id: 6, type: 'spend', description: 'Сообщение представителю', amount: -10, date: '2025-05-05' },
  { id: 7, type: 'earn', description: 'Новая подписка', amount: 3, date: '2025-05-05' },
  { id: 8, type: 'earn', description: 'Комментарий к посту', amount: 1, date: '2025-05-05' },
  { id: 9, type: 'earn', description: 'Ежедневный вход', amount: 1, date: '2025-05-05' },
];

const Balance = () => {
  const { toast } = useToast();
  const [referralLink, setReferralLink] = useState('https://honor-platform.ru/ref/user123');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const currentBalance = mockTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const handleShareReferral = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Ссылка скопирована",
      description: "Реферальная ссылка скопирована в буфер обмена",
      variant: "default",
    });
  };

  const handlePurchase = () => {
    if (!selectedAmount) return;
    
    toast({
      title: "Переход к оплате",
      description: `Оплата ${selectedAmount} билетов на сумму ${selectedAmount * 10} руб.`,
      variant: "default",
    });
  };

  const handleWatchAd = () => {
    toast({
      title: "Реклама",
      description: "После просмотра рекламы вы получите 1 билет",
      variant: "default",
    });
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <h1 className="text-3xl font-bold mb-8">Баланс билетов</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance summary */}
          <div className="lg:col-span-1">
            <Card className="honor-card mb-6">
              <div className="flex flex-col items-center p-6">
                <div className="bg-honor-blue/10 p-4 rounded-full mb-4">
                  <Wallet size={32} className="text-honor-blue" />
                </div>
                <h2 className="text-2xl font-bold">Текущий баланс</h2>
                <p className="text-4xl font-bold text-honor-blue mt-2">{currentBalance} билетов</p>
              </div>
              
              <Separator />
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Способы получения билетов</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Регистрация:</span> 10 билетов
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Share2 size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Реферальная программа:</span> 10 билетов за друга
                    </p>
                  </div>
                  <div className="flex items-start">
                    <ThumbsUp size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Активность:</span> 1 билет за 5 лайков
                    </p>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Комментарии:</span> 1 билет за комментарий
                    </p>
                  </div>
                  <div className="flex items-start">
                    <User size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Подписки:</span> 3 билета за новую подписку
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Clock size={18} className="text-green-500 mr-2 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium">Ежедневный вход:</span> 1 билет в день
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="p-6">
                <button
                  className="flex items-center w-full justify-center bg-gray-100 hover:bg-gray-200 text-honor-darkGray rounded-xl py-3 transition-colors mb-4"
                  onClick={handleWatchAd}
                >
                  <Award size={18} className="mr-2" />
                  Посмотреть рекламу (+1 билет)
                </button>
                
                <div className="border border-honor-blue/30 rounded-xl p-4">
                  <h3 className="text-sm font-semibold mb-2">Ваша реферальная ссылка</h3>
                  <div className="flex">
                    <Input 
                      value={referralLink}
                      readOnly
                      className="text-xs bg-gray-50"
                    />
                    <Button 
                      className="ml-2 bg-honor-blue text-white" 
                      size="icon"
                      onClick={handleShareReferral}
                    >
                      <Share2 size={16} />
                    </Button>
                  </div>
                  <p className="text-xs text-honor-darkGray mt-2">
                    Пригласите друга и получите 10 билетов
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="purchase">
              <TabsList className="mb-6 bg-honor-gray">
                <TabsTrigger value="purchase" className="flex-1">Пополнение</TabsTrigger>
                <TabsTrigger value="history" className="flex-1">История</TabsTrigger>
                <TabsTrigger value="usage" className="flex-1">Расходы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="purchase">
                <Card className="honor-card mb-6">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Пополнение баланса билетов</h2>
                    <p className="text-honor-darkGray mb-6">
                      Выберите количество билетов для покупки. 10 билетов = 100 рублей.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {[10, 20, 50, 100, 200, 500].map(amount => (
                        <button
                          key={amount}
                          className={`border rounded-xl p-4 text-center transition-colors ${
                            selectedAmount === amount 
                              ? 'bg-honor-blue text-white border-honor-blue' 
                              : 'border-gray-300 hover:border-honor-blue'
                          }`}
                          onClick={() => setSelectedAmount(amount)}
                        >
                          <p className="font-bold text-lg">{amount}</p>
                          <p className={selectedAmount === amount ? 'text-white/80' : 'text-honor-darkGray'}>
                            билетов
                          </p>
                          <p className={`text-sm mt-1 ${selectedAmount === amount ? 'text-white/80' : 'text-honor-darkGray'}`}>
                            {amount * 10} ₽
                          </p>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="custom-amount" className="block mb-2">Или введите своё количество</Label>
                      <div className="flex">
                        <Input
                          id="custom-amount"
                          type="number"
                          min="1"
                          placeholder="Количество билетов"
                          className="honor-input"
                          onChange={(e) => setSelectedAmount(parseInt(e.target.value) || null)}
                        />
                        <div className="ml-4 py-2 px-4 bg-gray-100 rounded-xl flex items-center">
                          <span className="text-sm text-honor-darkGray">
                            {selectedAmount ? selectedAmount * 10 : 0} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4">Способ оплаты</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center border rounded-xl p-4">
                        <input
                          type="radio"
                          id="payment-card"
                          name="payment-method"
                          className="h-4 w-4 text-honor-blue"
                          defaultChecked
                        />
                        <label htmlFor="payment-card" className="ml-2 flex items-center">
                          <CreditCard size={18} className="text-honor-darkGray mr-2" />
                          <span>Банковская карта</span>
                        </label>
                      </div>
                      <div className="flex items-center border rounded-xl p-4">
                        <input
                          type="radio"
                          id="payment-sbp"
                          name="payment-method"
                          className="h-4 w-4 text-honor-blue"
                        />
                        <label htmlFor="payment-sbp" className="ml-2">
                          Система быстрых платежей (СБП)
                        </label>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full honor-button-primary"
                      disabled={!selectedAmount}
                      onClick={handlePurchase}
                    >
                      Перейти к оплате
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card className="honor-card">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">История операций</h2>
                    
                    <div className="space-y-4">
                      {mockTransactions.map(transaction => (
                        <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
                          <div className="flex items-start">
                            <div className={`rounded-full p-2 mr-3 ${
                              transaction.type === 'earn' ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              {transaction.type === 'earn' ? (
                                <Plus size={16} className="text-green-500" />
                              ) : (
                                <Minus size={16} className="text-honor-darkGray" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-xs text-honor-darkGray">
                                {new Date(transaction.date).toLocaleDateString('ru-RU')}
                              </p>
                            </div>
                          </div>
                          <div className={`font-bold ${
                            transaction.type === 'earn' ? 'text-green-500' : 'text-honor-darkGray'
                          }`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} билетов
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="usage">
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Balance;
