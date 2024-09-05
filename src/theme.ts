import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    regularText: {
      title: '#1B364A',
      subtitle: '#676E85',
      regular: '#83899F',
    },
    bg: {
      main: '#F5F6F8',
    },
    buttons: {
      first: {
        bg: '#E0EDF6',
        text: '#1B364A',
      },
      second: {
        bg: '#2977B5',
        text: '#FFFFFF',
      },
      third: {
        bg: '#D86962',
        text: '#FFFFFF',
      },
      bgButton: {
        bg: '#5492C4',
        text: '#FFFFFF',
      },
    },
    tables: {
      bg: '#E8EBEF',
      text: '#83899F',
    },
    chartExplain: {
      light: '#68B934',
      medium: '#EFB110',
      hard: '#D86962',
    },
  },
  components: {
    Text: {
      variants: {
        headers: {
          fontSize: '26px',
          fontWeight: 500,
          color: 'regularText.title', // Make sure to refer to the color
        },
        menuSubitemNotSelected: {
          fontSize: '16px',
          fontWeight: 400,
          color: 'regularText.regular', // Color from theme
        },
        cardGoalsEA: {
          fontSize: '16px',
          fontWeight: 400,
          color: 'regularText.title',
        },
        menuSubitemSelected: {
          fontSize: '16px',
          fontWeight: 900,
          color: 'regularText.regular', // Color from theme
        },
        cardNumberMeasure: {
          fontSize: '18px',
          fontWeight: 500,
        },
        cardColorsExplanation: {
          fontSize: '14px',
          fontWeight: 200,
        },
        cardSubtitles: {
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '18px',
        },
        cardNumberSub: {
          fontSize: '32px',
          fontWeight: 500,
          lineHeight: '32px',
        },
        cardGrowth: {
          fontSize: '16px',
          fontWeight: 500,
        },
        subCardItem: {
          fontSize: '13px',
          fontWeight: 500,
        },
        cardPriceMain: {
          fontSize: '50px',
          fontWeight: 600,
          lineHeight: '45px',
        },
        subCardItemGrowth: {
          fontSize: '13px',
          fontWeight: 400,
        },
        subTitleCard: {
          fontSize: '22px',
          fontWeight: 500,
          color: 'regularText.subtitle',
        },

        regularText: {
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '24px',
          color: 'regularText.regular',
        },
        regularExplanation: {
          fontSize: '14px',
          fontWeight: 400,
        },
        tableRegularText: {
          fontSize: '18px',
          fontWeight: 400,
        },
        tableHeader: {
          fontSize: '14px',
          fontWeight: 400,
        },
        pivotTable: {
          fontSize: '12px',
          fontWeight: 400,
        },
        legalRegularText: {
          fontSize: '24px',
          fontWeight: 500,
        },
        cardProgressUnder: {
          fontSize: '20px',
          fontWeight: 500,
          color: 'regularText.regular',
        },
        cardGoalsBadge: {
          fontSize: '20px',
          fontWeight: 400,
          color: 'regularText.titles',
        },
      },
    },
  },
})

export default theme
