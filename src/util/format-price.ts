export default function priceFormatter(value: number, zerosRemove: 0 | 3 | 6 | 9 = 0): string {
  if (zerosRemove) {
    value = Math.round(Number(Number(value.toString().replace(',', '.')) / 10 ** zerosRemove))
  }

  let formattedValue = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: zerosRemove ? 2 : 0,
  }).format(value)

  let suffix = ''
  if (zerosRemove === 3) {
    formattedValue = formattedValue.replace(',00', '')
    suffix = ' тыс.'
  } else if (zerosRemove === 6) {
    formattedValue = formattedValue.replace(',00', '')
    suffix = ' млн.'
  } else if (zerosRemove === 9) {
    formattedValue = formattedValue.replace(',00', '')
    suffix = ' млрд.'
  }

  return `${formattedValue}${suffix} ₽`
}
