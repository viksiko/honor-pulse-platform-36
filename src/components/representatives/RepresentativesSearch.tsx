
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface RepresentativesSearchProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RepresentativesSearch = ({ searchTerm, handleSearch }: RepresentativesSearchProps) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
        <Input
          className="honor-input pl-10"
          placeholder="Поиск представителя власти"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default RepresentativesSearch;
