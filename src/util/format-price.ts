export default function priceFormatter(value: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0, // you can change it to 2 if you want to display decimals
  }).format(value)
}
