
export const mockDistricts = [
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
