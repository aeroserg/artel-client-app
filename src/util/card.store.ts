import getDayWord from './get-day-word'
const now = new Date()
const daysLeft = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate()

export const cardData = {
  staffCard: {
    cardTitle: 'Исполнители',
    cardIconPath: '/card/staff.svg',
    isLink: true,
    link: 'staff',
    chevronNeeded: true,
  },
  carsCard: {
    cardTitle: 'Автомобили',
    cardIconPath: '/card/cars.svg',
    isLink: true,
    link: 'vehicles',
    chevronNeeded: true,
  },
  goalsCard: {
    cardTitle: `Цели на ${now.toLocaleString('ru-ru', { month: 'long' })}`,
    cardIconPath: '/card/goals.svg',
    isLink: true,
    bottomText: `заканчивается через ${daysLeft} ${getDayWord(daysLeft)}`,
    chevronNeeded: false,
    link: '/summary/goals/',
  },
  chiefs: {
    cardTitle: 'Водители',
    cardIconPath: '/card/staff.svg',
    isLink: true,
    link: '/staff',
    chevronNeeded: true,
  },
  taxiIncome: {
    cardTitle: 'Доход таксопарка',
    cardIconPath: '/shared/incomes-icon.svg',
    isLink: true,
    link: 'vehicles',
    chevronNeeded: true,
    isQuestionable: true,
    questionAnswer: 'This is a helpful answer.',
    rightLink: '/summary',
    rightLinkName: 'на карте',
  },
  tripSum: {
    cardTitle: 'Сумма по поездкам',
    cardIconPath: '/shared/summ-chart-icon.svg',
    isLink: true,
    link: '/trips',
    chevronNeeded: true,
    isQuestionable: true,
    questionAnswer: 'Details about the trip sum.',
    rightLink: '/summary',
    rightLinkName: 'отчет',
  },
}

export const chartData = {
  chart1: {
    data: [209, 385, 402],
    colors: ['#68B934', '#EFB110', '#D86962'],
  },
  chart2: {
    data: [20, 0, 0, 0, 0],
    colors: ['#68B934', '#EFB110', '#999999', '#D86962', '#2977B5'],
  },
}

export const cardPieceData = {
  main: [
    {
      name: 'Автомобили',
      percents: 2.5,
      fall: false,
    },
    {
      name: 'Выручка',
      percents: 1.8,
      fall: true,
    },
    {
      name: 'Расходы',
      percents: 0.5,
      fall: null,
    },
  ],
  trip: [
    {
      name: 'Наличные',
      percents: 2.2,
      fall: false,
    },
    {
      name: 'Оплата по карте',
      percents: 1.5,
      fall: true,
    },
    {
      name: 'Корпоративная оплата',
      percents: 0.8,
      fall: null,
    },
  ],
}
