// menu-config.ts

export const menuItems = [
  {
    id: 2,
    label: 'Статистика',
    iconOff: '/menu-icons/stats_off.svg',
    iconOn: '/menu-icons/stats_on.svg',
    path: '/summary',
    subItems: [
      { label: 'Сводка', path: '/summary/' },
      { label: 'Цели', path: '/summary/goals' },
    ],
  },
  {
    id: 3,
    label: 'Исполнители',
    iconOff: '/menu-icons/staff_off.svg',
    iconOn: '/menu-icons/staff_on.svg',
    path: '/staff',
    subItems: [{ label: 'Исполнители', path: '/staff' }],
  },
  {
    id: 4,
    label: 'Автомобили',
    iconOff: '/menu-icons/garage_off.svg',
    iconOn: '/menu-icons/garage_on.svg',
    path: '/vehicles',
    subItems: [{ label: 'Автомобили', path: '/vehicles' }],
  },
  {
    id: 5,
    label: 'Документы',
    iconOff: '/menu-icons/docs_off.svg',
    iconOn: '/menu-icons/docs_on.svg',
    path: '/documents',
    subItems: [{ label: 'Сводный отчёт', path: '/documents/report' }],
  },
]

// Экспортируем bottomMenuItems
export const bottomMenuItems = [
  {
    id: 6,
    label: 'Отчёт по транзакциям',
    iconOff: '/menu-icons/add_docs_off.svg',
    iconOn: '/menu-icons/add_docs_on.svg',
    path: '/transactions',
  },
  {
    id: 7,
    label: 'Правовые документы',
    iconOff: '/menu-icons/contacts_off.svg',
    iconOn: '/menu-icons/contacts_on.svg',
    path: '/legal',
  },
]
