
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  MapPin, 
  User, 
  Plus, 
  Filter, 
  ChevronDown, 
  BarChart, 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger, 
} from '@/components/ui/dialog';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

// Расширенные данные для округов
const mockDistricts = [
  { 
    id: 1, 
    name: "Округ №1", 
    description: "Центральный район", 
    representatives: [
      { id: 101, name: "Иванов И.И.", type: "депутат", position: "Депутат городской думы", rating: 4.5, tasksCompleted: 45, lastActivity: "2025-05-02", attendance: 87 },
      { id: 102, name: "Петров П.П.", type: "чиновник", position: "Глава района", rating: 3.8, tasksCompleted: 32, lastActivity: "2025-05-01", attendance: 92 },
      { id: 103, name: "Сидорова А.В.", type: "муниципальный служащий", position: "Начальник отдела благоустройства", rating: 4.2, tasksCompleted: 38, lastActivity: "2025-04-28", attendance: 79 }
    ],
    problems: [
      { id: 1001, title: "Ремонт дороги", status: "в работе", priority: "высокий", createdAt: "2025-04-15" },
      { id: 1002, title: "Освещение парка", status: "выполнено", priority: "средний", createdAt: "2025-03-20" }
    ],
    stats: { 
      tasksTotal: 65, 
      tasksCompleted: 48, 
      tasksInProgress: 17, 
      satisfactionRate: 76, 
      responseTime: 2.3 
    },
    events: [
      { id: 2001, title: "Встреча с жителями", date: "2025-05-20", location: "ДК Центральный" },
      { id: 2002, title: "Субботник", date: "2025-05-25", location: "Парк Центральный" }
    ],
    boundaries: [[55.751, 37.617], [55.755, 37.627], [55.761, 37.624], [55.759, 37.614]]
  },
  { 
    id: 2, 
    name: "Округ №2", 
    description: "Советский район", 
    representatives: [
      { id: 201, name: "Смирнов К.Н.", type: "депутат", position: "Депутат городской думы", rating: 4.1, tasksCompleted: 39, lastActivity: "2025-05-03", attendance: 81 },
      { id: 202, name: "Кузнецова О.Д.", type: "чиновник", position: "Заместитель главы района", rating: 3.9, tasksCompleted: 28, lastActivity: "2025-04-29", attendance: 88 }
    ],
    problems: [
      { id: 2001, title: "Благоустройство двора", status: "запланировано", priority: "средний", createdAt: "2025-04-25" },
      { id: 2002, title: "Ремонт детской площадки", status: "в работе", priority: "высокий", createdAt: "2025-04-10" }
    ],
    stats: { 
      tasksTotal: 55, 
      tasksCompleted: 37, 
      tasksInProgress: 18, 
      satisfactionRate: 72, 
      responseTime: 2.7 
    },
    events: [
      { id: 3001, title: "Прием граждан", date: "2025-05-15", location: "Администрация района" },
      { id: 3002, title: "Открытие детского сада", date: "2025-06-01", location: "ул. Советская, 15" }
    ],
    boundaries: [[55.731, 37.587], [55.735, 37.597], [55.741, 37.594], [55.739, 37.584]]
  },
  { 
    id: 3, 
    name: "Округ №3", 
    description: "Промышленный район", 
    representatives: [
      { id: 301, name: "Андреев А.А.", type: "депутат", position: "Депутат городской думы", rating: 3.7, tasksCompleted: 31, lastActivity: "2025-05-01", attendance: 75 },
      { id: 302, name: "Волков С.Г.", type: "чиновник", position: "Глава района", rating: 4.0, tasksCompleted: 42, lastActivity: "2025-05-04", attendance: 83 },
      { id: 303, name: "Соколова И.П.", type: "муниципальный служащий", position: "Начальник отдела ЖКХ", rating: 3.5, tasksCompleted: 25, lastActivity: "2025-04-25", attendance: 80 },
      { id: 304, name: "Морозов Д.К.", type: "муниципальный служащий", position: "Специалист по благоустройству", rating: 4.3, tasksCompleted: 36, lastActivity: "2025-04-30", attendance: 95 }
    ],
    problems: [
      { id: 3001, title: "Реконструкция завода", status: "запланировано", priority: "высокий", createdAt: "2025-04-05" },
      { id: 3002, title: "Экологический мониторинг", status: "в работе", priority: "высокий", createdAt: "2025-03-15" },
      { id: 3003, title: "Строительство спортплощадки", status: "выполнено", priority: "средний", createdAt: "2025-02-10" }
    ],
    stats: { 
      tasksTotal: 78, 
      tasksCompleted: 52, 
      tasksInProgress: 26, 
      satisfactionRate: 68, 
      responseTime: 3.1 
    },
    events: [
      { id: 4001, title: "Общественные слушания", date: "2025-05-18", location: "Администрация района" },
      { id: 4002, title: "Экологическая акция", date: "2025-05-30", location: "Парк Промышленный" }
    ],
    boundaries: [[55.711, 37.557], [55.715, 37.567], [55.721, 37.564], [55.719, 37.554]]
  },
  { 
    id: 4, 
    name: "Округ №4", 
    description: "Ленинский район", 
    representatives: [
      { id: 401, name: "Лебедев М.С.", type: "депутат", position: "Депутат городской думы", rating: 4.4, tasksCompleted: 47, lastActivity: "2025-05-03", attendance: 91 },
      { id: 402, name: "Козлов И.А.", type: "муниципальный служащий", position: "Начальник отдела образования", rating: 4.2, tasksCompleted: 35, lastActivity: "2025-04-29", attendance: 86 }
    ],
    problems: [
      { id: 4001, title: "Ремонт школы", status: "в работе", priority: "высокий", createdAt: "2025-04-20" },
      { id: 4002, title: "Обновление библиотеки", status: "запланировано", priority: "средний", createdAt: "2025-04-15" }
    ],
    stats: { 
      tasksTotal: 62, 
      tasksCompleted: 45, 
      tasksInProgress: 17, 
      satisfactionRate: 82, 
      responseTime: 2.0 
    },
    events: [
      { id: 5001, title: "День района", date: "2025-06-12", location: "Площадь Ленина" },
      { id: 5002, title: "Образовательный форум", date: "2025-05-22", location: "Школа №5" }
    ],
    boundaries: [[55.751, 37.647], [55.755, 37.657], [55.761, 37.654], [55.759, 37.644]]
  },
  { 
    id: 5, 
    name: "Округ №5", 
    description: "Кировский район", 
    representatives: [
      { id: 501, name: "Никитин В.П.", type: "депутат", position: "Депутат городской думы", rating: 3.6, tasksCompleted: 29, lastActivity: "2025-04-28", attendance: 77 },
      { id: 502, name: "Зайцева Н.О.", type: "чиновник", position: "Заместитель главы района", rating: 3.9, tasksCompleted: 33, lastActivity: "2025-05-02", attendance: 84 },
      { id: 503, name: "Орлов П.С.", type: "муниципальный служащий", position: "Начальник отдела транспорта", rating: 4.0, tasksCompleted: 31, lastActivity: "2025-05-01", attendance: 89 }
    ],
    problems: [
      { id: 5001, title: "Организация транспортных маршрутов", status: "в работе", priority: "высокий", createdAt: "2025-04-10" },
      { id: 5002, title: "Ремонт фасадов зданий", status: "запланировано", priority: "средний", createdAt: "2025-04-05" },
      { id: 5003, title: "Благоустройство сквера", status: "выполнено", priority: "средний", createdAt: "2025-03-15" }
    ],
    stats: { 
      tasksTotal: 70, 
      tasksCompleted: 43, 
      tasksInProgress: 27, 
      satisfactionRate: 71, 
      responseTime: 2.8 
    },
    events: [
      { id: 6001, title: "Встреча с предпринимателями", date: "2025-05-17", location: "Бизнес-центр 'Кировский'" },
      { id: 6002, title: "Спортивный праздник", date: "2025-06-05", location: "Стадион 'Динамо'" }
    ],
    boundaries: [[55.731, 37.617], [55.735, 37.627], [55.741, 37.624], [55.739, 37.614]]
  }
];

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [representativeType, setRepresentativeType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [showProblems, setShowProblems] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [selectedRepresentative, setSelectedRepresentative] = useState<any | null>(null);
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredDistricts = mockDistricts.filter(district => 
    district.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    district.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    district.representatives.some(rep => 
      rep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rep.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSelectDistrict = (id: number) => {
    setSelectedDistrict(id === selectedDistrict ? null : id);
    setSelectedRepresentative(null);
  };

  const selectedDistrictData = mockDistricts.find(d => d.id === selectedDistrict);

  const filteredRepresentatives = selectedDistrictData?.representatives.filter(rep => 
    representativeType ? rep.type === representativeType : true
  ).sort((a, b) => {
    if (!sortBy) return 0;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'tasks') return b.tasksCompleted - a.tasksCompleted;
    if (sortBy === 'attendance') return b.attendance - a.attendance;
    return 0;
  });

  const handleRequestMeeting = (representativeId: number) => {
    toast({
      title: "Запрос отправлен",
      description: "Ваш запрос на встречу успешно отправлен",
    });
  };

  const handleSubscribe = (districtId: number) => {
    toast({
      title: "Подписка оформлена",
      description: "Вы подписались на обновления округа",
    });
  };

  return (
    <Layout>
      <div className="honor-container py-12">
        <h1 className="text-3xl font-bold mb-2">Карта округов</h1>
        <p className="text-honor-darkGray mb-8">
          Интерактивная карта избирательных округов с информацией о представителях власти
        </p>

        <div className="relative mb-8">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-honor-darkGray" size={18} />
              <Input
                className="honor-input pl-10"
                placeholder="Поиск округа или представителя власти"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="flex gap-2">
              <Select onValueChange={(value) => setRepresentativeType(value === "all" ? null : value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Тип представителя" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="депутат">Депутаты</SelectItem>
                  <SelectItem value="чиновник">Чиновники</SelectItem>
                  <SelectItem value="муниципальный служащий">Муниципальные служащие</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setSortBy(value === "none" ? null : value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Без сортировки</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="tasks">По выполненным задачам</SelectItem>
                  <SelectItem value="attendance">По посещаемости</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="honor-card relative min-h-[500px] flex items-center justify-center">
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
                      ? 'bg-honor-blue text-white scale-125 z-10' 
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

              {/* Отображение проблем на карте, если включено */}
              {showProblems && selectedDistrictData && selectedDistrictData.problems.map((problem, index) => (
                <div 
                  key={problem.id}
                  className={`absolute p-2 rounded-lg z-20 ${
                    problem.priority === 'высокий' ? 'bg-red-100 text-red-800 border border-red-300' :
                    'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                  style={{
                    top: `${30 + (index * 10)}%`,
                    left: `${30 + (index * 8)}%`,
                    maxWidth: '200px'
                  }}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className={problem.priority === 'высокий' ? 'text-red-600' : 'text-amber-600'} />
                    <div>
                      <p className="text-sm font-medium">{problem.title}</p>
                      <p className="text-xs">Статус: {problem.status}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Управление картой */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <Link to="/tasks/create">
                  <Button className="honor-button-primary flex items-center space-x-2">
                    <Plus size={18} />
                    <span>Создать задание</span>
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-white" 
                  onClick={() => setShowProblems(!showProblems)}
                >
                  <AlertTriangle size={18} className="mr-2" />
                  {showProblems ? 'Скрыть проблемы' : 'Показать проблемы'}
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white" 
                  onClick={() => setShowStats(!showStats)}
                >
                  <BarChart size={18} className="mr-2" />
                  {showStats ? 'Скрыть статистику' : 'Показать статистику'}
                </Button>
              </div>

              {/* Статистика по округам на карте */}
              {showStats && mockDistricts.map((district, index) => (
                <div 
                  key={`stat-${district.id}`}
                  className="absolute bg-white/90 p-3 rounded-lg border border-honor-blue shadow-sm"
                  style={{
                    bottom: `${20 + (index * 15)}%`,
                    right: `${15 + (index * 8)}%`,
                    maxWidth: '180px',
                    zIndex: 5
                  }}
                >
                  <p className="text-sm font-semibold text-honor-blue">{district.name}</p>
                  <div className="flex items-center gap-1 text-xs text-honor-darkGray mt-1">
                    <TrendingUp size={14} />
                    <span>Выполнено: {district.stats.tasksCompleted}/{district.stats.tasksTotal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-honor-blue h-1.5 rounded-full" 
                      style={{ width: `${(district.stats.tasksCompleted/district.stats.tasksTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {selectedDistrict && selectedRepresentative ? (
              <div className="honor-card">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <User className="text-honor-blue mr-2" size={24} />
                    <h2 className="text-2xl font-bold">{selectedRepresentative.name}</h2>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedRepresentative(null)}
                    className="p-2 h-auto"
                  >
                    <ChevronDown size={20} />
                  </Button>
                </div>
                
                <div className="text-honor-darkGray mb-4">
                  <p className="font-medium">{selectedRepresentative.position}</p>
                  <p className="text-sm">Тип: {selectedRepresentative.type}</p>
                </div>
                
                <div className="mb-6 space-y-4">
                  <div className="bg-honor-gray p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Рейтинг эффективности</span>
                      <span className="font-bold text-honor-blue">{selectedRepresentative.rating}/5.0</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                      <div 
                        className="bg-honor-blue h-2 rounded-full" 
                        style={{ width: `${(selectedRepresentative.rating/5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-honor-gray p-3 rounded-lg">
                      <p className="text-xs text-honor-darkGray">Выполнено задач</p>
                      <p className="font-bold text-honor-blue text-xl">{selectedRepresentative.tasksCompleted}</p>
                    </div>
                    <div className="bg-honor-gray p-3 rounded-lg">
                      <p className="text-xs text-honor-darkGray">Посещаемость</p>
                      <p className="font-bold text-honor-blue text-xl">{selectedRepresentative.attendance}%</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full honor-button-primary flex items-center gap-2">
                        <Mail size={16} />
                        Запросить встречу
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запрос встречи с представителем</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Представитель:</p>
                          <p>{selectedRepresentative.name}, {selectedRepresentative.position}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Выберите удобный формат встречи:</p>
                          <RadioGroup defaultValue="personal" className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="personal" id="personal" />
                              <label htmlFor="personal">Личная встреча</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="video" id="video" />
                              <label htmlFor="video">Видеоконференция</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <label htmlFor="phone">Телефонный звонок</label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button 
                          className="w-full" 
                          onClick={() => handleRequestMeeting(selectedRepresentative.id)}
                        >
                          Отправить запрос
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Link to={`/representative/profile/${selectedRepresentative.id}`}>
                    <Button className="w-full honor-button-secondary">
                      Полный профиль
                    </Button>
                  </Link>
                </div>
              </div>
            ) : selectedDistrict ? (
              <div className="honor-card">
                <div className="flex items-center mb-4">
                  <MapPin className="text-honor-blue mr-2" size={24} />
                  <h2 className="text-2xl font-bold">{selectedDistrictData?.name}</h2>
                </div>
                <p className="text-honor-darkGray mb-4">{selectedDistrictData?.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Статистика округа</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => handleSubscribe(selectedDistrictData!.id)}
                  >
                    <Bell size={16} />
                    Подписаться
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-honor-gray p-3 rounded-lg">
                    <p className="text-xs text-honor-darkGray">Заданий выполнено</p>
                    <p className="font-bold text-honor-blue text-xl">
                      {selectedDistrictData?.stats.tasksCompleted}/{selectedDistrictData?.stats.tasksTotal}
                    </p>
                  </div>
                  <div className="bg-honor-gray p-3 rounded-lg">
                    <p className="text-xs text-honor-darkGray">Удовлетворенность</p>
                    <p className="font-bold text-honor-blue text-xl">{selectedDistrictData?.stats.satisfactionRate}%</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Предстоящие события</h3>
                    <Link to={`/districts/${selectedDistrict}/events`} className="text-sm text-honor-blue hover:underline">
                      Все события
                    </Link>
                  </div>
                  {selectedDistrictData?.events.slice(0, 2).map(event => (
                    <div key={event.id} className="flex items-start gap-2 p-2 border-b last:border-0">
                      <Calendar size={18} className="text-honor-blue mt-1" />
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-honor-darkGray">{event.date} - {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">Представители округа</h3>
                <div className="space-y-3 mb-6">
                  {filteredRepresentatives && filteredRepresentatives.map((rep) => (
                    <button 
                      key={rep.id} 
                      onClick={() => setSelectedRepresentative(rep)}
                      className="w-full text-left flex items-center p-3 border rounded-xl hover:bg-honor-gray transition-colors"
                    >
                      <div className="bg-honor-gray rounded-full p-2 mr-3">
                        <User size={24} className="text-honor-blue" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">{rep.name}</p>
                        <p className="text-sm text-honor-darkGray">{rep.position}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm">
                          <TrendingUp size={14} className="text-honor-blue" />
                          <span className="ml-1">{rep.rating}</span>
                        </div>
                        <p className="text-xs text-honor-darkGray">{rep.type}</p>
                      </div>
                    </button>
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

        {/* Таблица сравнения представителей */}
        {selectedDistrict && selectedDistrictData?.representatives.length > 1 && (
          <div className="mt-8 honor-card">
            <h2 className="text-xl font-bold mb-4">Сравнение представителей округа</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Представитель</TableHead>
                    <TableHead>Должность</TableHead>
                    <TableHead className="text-center">Тип</TableHead>
                    <TableHead className="text-center">Рейтинг</TableHead>
                    <TableHead className="text-center">Выполнено задач</TableHead>
                    <TableHead className="text-center">Посещаемость</TableHead>
                    <TableHead className="text-center">Последняя активность</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedDistrictData?.representatives.map(rep => (
                    <TableRow key={rep.id} className="cursor-pointer hover:bg-honor-gray" onClick={() => setSelectedRepresentative(rep)}>
                      <TableCell className="font-medium">{rep.name}</TableCell>
                      <TableCell>{rep.position}</TableCell>
                      <TableCell className="text-center">{rep.type}</TableCell>
                      <TableCell className="text-center">
                        <div className="inline-flex items-center">
                          <span className="text-honor-blue font-medium">{rep.rating}</span>
                          <TrendingUp size={14} className="ml-1 text-honor-blue" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{rep.tasksCompleted}</TableCell>
                      <TableCell className="text-center">{rep.attendance}%</TableCell>
                      <TableCell className="text-center">{rep.lastActivity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Map;
