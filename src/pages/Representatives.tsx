import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, User, MapPin, Building, ThumbsUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for representatives
const mockRepresentatives = [
  { 
    id: 1, 
    name: "Иванов Иван Иванович", 
    role: "Депутат городской думы", 
    district: "Округ №1", 
    party: "Единая Россия",
    tasksTotal: 15,
    tasksCompleted: 8,
    rating: 4.7
  },
  { 
    id: 2, 
    name: "Петрова Мария Сергеевна", 
    role: "Глава района", 
    district: "Центральный район", 
    party: "Справедливая Россия",
    tasksTotal: 12,
    tasksCompleted: 10,
    rating: 4.9
  },
  { 
    id: 3, 
    name: "Сидоров Алексей Петрович", 
    role: "Депутат городской думы", 
    district: "Округ №3", 
    party: "КПРФ",
    tasksTotal: 18,
    tasksCompleted: 7,
    rating: 4.3
  },
  { 
    id: 4, 
    name: "Козлова Екатерина Андреевна", 
    role: "Депутат городской думы", 
    district: "Округ №2", 
    party: "ЛДПР",
    tasksTotal: 10,
    tasksCompleted: 6,
    rating: 4.5
  },
  { 
    id: 5, 
    name: "Васильев Дмитрий Николаевич", 
    role: "Глава района", 
    district: "Промышленный район", 
    party: "Единая Россия",
    tasksTotal: 20,
    tasksCompleted: 15,
    rating: 4.8
  },
  { 
    id: 6, 
    name: "Смирнова Анна Викторовна", 
    role: "Депутат городской думы", 
    district: "Округ №4", 
    party: "Новые люди",
    tasksTotal: 8,
    tasksCompleted: 5,
    rating: 4.6
  },
];

const Representatives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDistrictFilter = (district: string) => {
    setSelectedDistrict(selectedDistrict === district ? '' : district);
  };

  const handlePartyFilter = (party: string) => {
    setSelectedParty(selectedParty === party ? '' : party);
  };

  const filteredRepresentatives = mockRepresentatives.filter(rep => {
    const matchesSearch = rep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        rep.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        rep.district.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDistrict = selectedDistrict === '' || rep.district === selectedDistrict;
    const matchesParty = selectedParty === '' || rep.party === selectedParty;
    
    return matchesSearch && matchesDistrict && matchesParty;
  });

  // Get unique districts and parties for filters
  const districts = Array.from(new Set(mockRepresentatives.map(rep => rep.district)));
  const parties = Array.from(new Set(mockRepresentatives.map(rep => rep.party)));

  return (
    <Layout>
      <div className="honor-container py-12">
        <h1 className="text-3xl font-bold mb-2">Представители власти</h1>
        <p className="text-honor-darkGray mb-8">
          Список представителей власти с информацией о их деятельности
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <div className="honor-card mb-6">
              <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Округ/Район</label>
                <div className="space-y-2">
                  {districts.map(district => (
                    <button
                      key={district}
                      onClick={() => handleDistrictFilter(district)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg text-sm ${
                        selectedDistrict === district
                          ? 'bg-honor-blue text-white'
                          : 'hover:bg-honor-gray text-honor-darkGray'
                      }`}
                    >
                      <MapPin size={16} className="mr-2" />
                      {district}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Партия</label>
                <div className="space-y-2">
                  {parties.map(party => (
                    <button
                      key={party}
                      onClick={() => handlePartyFilter(party)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg text-sm ${
                        selectedParty === party
                          ? 'bg-honor-blue text-white'
                          : 'hover:bg-honor-gray text-honor-darkGray'
                      }`}
                    >
                      <Building size={16} className="mr-2" />
                      {party}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button
                className="w-full honor-button-secondary"
                onClick={() => {
                  setSelectedDistrict('');
                  setSelectedParty('');
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
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

            <div className="space-y-4">
              {filteredRepresentatives.length > 0 ? (
                filteredRepresentatives.map(rep => (
                  <Link key={rep.id} to={`/representative/profile/${rep.id}`}>
                    <Card className="honor-card hover:shadow-lg transition-shadow">
                      <div className="flex items-start">
                        <Avatar className="h-16 w-16 mr-4">
                          <User size={32} />
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-bold">{rep.name}</h3>
                              <p className="text-honor-darkGray">{rep.role}</p>
                              
                              <div className="flex items-center space-x-4 mt-1">
                                <div className="flex items-center text-sm text-honor-darkGray">
                                  <MapPin size={14} className="mr-1" />
                                  <span>{rep.district}</span>
                                </div>
                                <Badge className="bg-honor-blue">{rep.party}</Badge>
                              </div>
                            </div>
                            
                            <div className="text-lg font-bold text-honor-blue">
                              {rep.rating}
                              <span className="text-xs text-honor-darkGray ml-1">рейтинг</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <ThumbsUp size={16} className="text-honor-blue mr-1" />
                                <span className="text-sm">{rep.tasksTotal} задач</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle size={16} className="text-green-500 mr-1" />
                                <span className="text-sm">{rep.tasksCompleted} выполнено</span>
                              </div>
                            </div>
                            
                            <Button variant="link" className="p-0 h-auto text-honor-blue">
                              Подробнее
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="honor-card text-center py-8">
                  <p className="text-honor-darkGray">По вашему запросу ничего не найдено</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Representatives;
