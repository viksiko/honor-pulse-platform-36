
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { gosuslugiAuth, GosuslugiToken, GosuslugiUserData } from '@/services/gosuslugiAuth';
import Layout from '@/components/layout/Layout';
import { Loader2 } from 'lucide-react';

const GosuslugiCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [processingStatus, setProcessingStatus] = useState<string>('Обработка запроса...');
  
  useEffect(() => {
    const processCallback = async () => {
      try {
        // Get code and state from URL params
        const code = searchParams.get('code');
        const state = searchParams.get('state') || localStorage.getItem('gosuslugi_auth_state');
        
        if (!code) {
          throw new Error('Отсутствует код авторизации');
        }
        
        const isRepresentative = state === 'representative';
        
        setProcessingStatus('Получение токена доступа...');
        // Exchange code for token
        const token: GosuslugiToken = await gosuslugiAuth.exchangeCodeForToken(code);
        
        setProcessingStatus('Получение информации о пользователе...');
        // Get user info
        const userData: GosuslugiUserData = await gosuslugiAuth.getUserInfo(token.access_token, isRepresentative);
        
        // Convert to app format
        const appUser = gosuslugiAuth.mapUserDataToAppFormat(userData, isRepresentative);
        
        // Store in localStorage (in a real app, this would be more secure)
        localStorage.setItem('honorUser', JSON.stringify(appUser));
        localStorage.setItem('gosuslugi_token', token.access_token);
        
        setProcessingStatus('Авторизация успешна!');
        
        // Show success toast
        toast({
          title: "Успешная авторизация через Госуслуги",
          description: `Добро пожаловать, ${appUser.fullName}! ${
            appUser.verified ? "Ваша учетная запись подтверждена." : ""
          }`,
        });
        
        // Clear auth state
        localStorage.removeItem('gosuslugi_auth_state');
        
        // Redirect based on user type
        if (isRepresentative) {
          navigate('/representative/dashboard');
        } else {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error during Госуслуги authentication:', error);
        setProcessingStatus('Произошла ошибка при авторизации');
        
        toast({
          title: "Ошибка авторизации",
          description: "Не удалось выполнить вход через Госуслуги. Пожалуйста, попробуйте снова.",
          variant: "destructive",
        });
        
        // Redirect back to login after a delay
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    };
    
    processCallback();
  }, [searchParams, navigate, toast]);
  
  return (
    <Layout>
      <div className="honor-container py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="honor-card p-8 flex flex-col items-center">
            <Loader2 className="h-12 w-12 animate-spin text-honor-blue mb-4" />
            <h1 className="text-2xl font-bold mb-4">Авторизация через Госуслуги</h1>
            <p className="text-honor-darkGray">{processingStatus}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GosuslugiCallback;
