
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, User, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for districts
const mockDistricts = [
  { id: 1, name: "Округ №1", description: "Центральный район", representatives: 3 },
  { id: 2, name: "Округ №2", description: "Советский район", representatives: 2 },
  { id: 3, name: "Округ №3", description: "Промышленный район", representatives: 4 },
  { id: 4, name: "Округ №4", description: "Ленинский район", representatives: 2 },
  { id: 5, name: "Округ №5", description: "Кировский район", representatives: 3 },
];

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDistricts = mockDistricts.filter(district => 
    district.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    district.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectDistrict = (id: number) => {
    setSelectedDistrict(id === selectedDistrict ? null : id);
  };

  const selectedDistrictData = mockDistricts.find(d => d.id === selectedDistrict);

  return (
    <Layout>
      <div className="honor-container py-12">
        <h1 className="text-3xl font-bold mb-2">Карта округов</h1>
        <p className="text-honor-darkGray mb-8">
          Интерактивная карта избирательных округов с информацией о представителях власти
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
          <Input
            className="honor-input pl-10"
            placeholder="Поиск округа или района"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="honor-card relative min-h-[400px] flex items-center justify-center">
              <div className="text-honor-darkGray text-center">
                <MapPin size={48} className="mx-auto mb-4 text-honor-blue" />
                <p>Интерактивная карта округов</p>
                <p className="text-sm">(В этом прототипе используется заглушка вместо реальной карты)</p>
              </div>

              {/* Mock district pins on the map */}
              {mockDistricts.map((district, index) => (
                <button
                  key={district.id}
                  className={`absolute rounded-full p-2 transition-all ${
                    selectedDistrict === district.id 
                      ? 'bg-honor-blue text-white scale-125' 
                      : 'bg-white border border-honor-blue text-honor-blue hover:bg-honor-blue/10'
                  }`}
                  style={{
                    top: `${20 + (index * 15)}%`,
                    left: `${15 + (index * 18)}%`,
                  }}
                  onClick={() => handleSelectDistrict(district.id)}
                >
                  <MapPin size={24} />
                </button>
              ))}

              {/* Create task button */}
              <div className="absolute bottom-4 right-4">
                <Link to="/tasks/create">
                  <Button className="honor-button-primary flex items-center space-x-2">
                    <Plus size={18} />
                    <span>Создать задание</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {selectedDistrict ? (
              <div className="honor-card">
                <div className="flex items-center mb-4">
                  <MapPin className="text-honor-blue mr-2" size={24} />
                  <h2 className="text-2xl font-bold">{selectedDistrictData?.name}</h2>
                </div>
                <p className="text-honor-darkGray mb-4">{selectedDistrictData?.description}</p>
                
                <h3 className="text-lg font-semibold mb-2">Представители округа</h3>
                <div className="space-y-3 mb-6">
                  {Array.from({ length: selectedDistrictData?.representatives || 0 }).map((_, i) => (
                    <Link key={i} to={`/representative/profile/${selectedDistrict}-${i+1}`} className="flex items-center p-3 border rounded-xl hover:bg-honor-gray transition-colors">
                      <div className="bg-honor-gray rounded-full p-2 mr-3">
                        <User size={24} className="text-honor-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Представитель {i + 1}</p>
                        <p className="text-sm text-honor-darkGray">Должность представителя</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button className="honor-button-secondary" onClick={() => setSelectedDistrict(null)}>
                    Назад к карте
                  </Button>
                  <Link to={`/districts/${selectedDistrict}`}>
                    <Button className="honor-button-primary">
                      Подробнее об округе
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="honor-card">
                <h2 className="text-xl font-bold mb-4">Избирательные округа</h2>
                <p className="text-honor-darkGray mb-6">
                  Выберите округ на карте или из списка для получения подробной информации
                </p>
                
                <div className="space-y-2">
                  {filteredDistricts.map(district => (
                    <button
                      key={district.id}
                      className={`w-full flex items-center justify-between p-3 border rounded-xl transition-colors ${
                        selectedDistrict === district.id 
                          ? 'bg-honor-blue text-white' 
                          : 'hover:bg-honor-gray'
                      }`}
                      onClick={() => handleSelectDistrict(district.id)}
                    >
                      <div className="flex items-center">
                        <MapPin className={selectedDistrict === district.id ? 'text-white' : 'text-honor-blue'} size={20} />
                        <span className="ml-2">{district.name}</span>
                      </div>
                      <span className={`text-sm ${selectedDistrict === district.id ? 'text-white' : 'text-honor-darkGray'}`}>
                        {district.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
