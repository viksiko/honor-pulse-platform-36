
import React from 'react';
import { Card } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

// Transaction type definition
export interface Transaction {
  id: number;
  type: 'earn' | 'spend';
  description: string;
  amount: number;
  date: string;
}

interface HistoryTabProps {
  transactions: Transaction[];
}

const HistoryTab: React.FC<HistoryTabProps> = ({ transactions }) => {
  return (
    <Card className="honor-card">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">История операций</h2>
        
        <div className="space-y-4">
          {transactions.map(transaction => (
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
  );
};

export default HistoryTab;
