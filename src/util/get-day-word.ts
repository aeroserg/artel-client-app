const getDayWord = (day: number | string) => {
  switch (day.toString().length) {
    case 1:
      switch (day.toString()) {
        case '1':
          return 'день'
        case '2':
        case '3':
        case '4':
          return 'дня'
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        default:
          return 'дней'
      }
    default:
      switch (day.toString().slice(-2, -1)) {
        case '1':
          return 'дней'
        default:
          switch (day.toString().slice(-1)) {
            case '1':
              return 'день'
            case '2':
            case '3':
            case '4':
              return 'дня'
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            default:
              return 'дней'
          }
      }
  }
}

export default getDayWord
