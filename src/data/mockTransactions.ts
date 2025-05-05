
import { Transaction } from '@/components/balance';

// Mock data for transactions
export const mockTransactions: Transaction[] = [
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
