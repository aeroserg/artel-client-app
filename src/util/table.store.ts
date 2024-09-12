import priceFormatter from '@/util/format-price'

export const staffData = [
  {
    id: 1,
    data: {
      concat_1: {
        photo: '/photo-instance.png',
        name: 'John Doe',
      },
      license: 'AB1234567',
      phone: '+1 (555) 555-1234',
      balance: `${priceFormatter(12000)} | ${priceFormatter(3482)}`,
      task: 'Deliver goods',
    },
  },
  {
    id: 2,
    data: {
      concat_1: {
        photo: '/photo-instance.png',
        name: 'Jane Smith',
      },
      license: 'XY9876543',
      phone: '+1 (555) 555-5678',
      balance: priceFormatter(15000),
      task: 'Pick up passengers',
    },
  },
]

export const tableSettings = {
  header: {
    columns: [
      { name: 'Имя', width: 150, sortable: false },
      { name: 'Водительские права', width: 200, sortable: true },
      { name: 'Телефон', width: 150, sortable: true },
      { name: 'Баланс', width: 150, sortable: true },
      { name: 'Задача', width: 250, sortable: false },
      { name: null, width: 150, sortable: false }, // для колонки с редактированием (если надо редактировать)
    ],
  },
  editable: true, // если не надо, то поставить false
  fontSize: 'md', // или число
}
