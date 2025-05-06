
import React from 'react';
import { Button } from '@/components/ui/button';
import { gosuslugiAuth } from '@/services/gosuslugiAuth';
import gosUslugiLogo from '@/assets/gosuslugi-logo.svg'; // We'll create this asset

interface GosuslugiAuthButtonProps {
  isRepresentative?: boolean;
  className?: string;
}

const GosuslugiAuthButton: React.FC<GosuslugiAuthButtonProps> = ({ isRepresentative = false, className }) => {
  const handleClick = () => {
    gosuslugiAuth.initiateLogin(isRepresentative);
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#0065B1] hover:bg-[#00539C] text-white p-2 flex items-center justify-center w-full ${className}`}
      type="button"
    >
      <div className="flex items-center">
        {/* This would use the actual Госуслуги logo in a real implementation */}
        <div className="bg-white p-1 rounded mr-2">
          <span className="text-[#0065B1] font-bold text-sm">ГОС</span>
        </div>
        <span>
          {isRepresentative
            ? 'Войти как представитель власти'
            : 'Войти через Госуслуги'}
        </span>
      </div>
    </Button>
  );
};

export default GosuslugiAuthButton;
