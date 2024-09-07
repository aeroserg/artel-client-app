'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect, FC } from 'react'
import Card from '@/shared/card/ui/card'
import LineChart from '@/shared/chart/chart/ui/line-chart'
import getDayWord from '@/util/get-day-word'
import priceFormatter from '@/util/format-price'
import CardPiece from '@/shared/card/piece/ui/card-piece'

const now = new Date()
const daysLeft = new Date(now.getFullYear(), 1, 0).getDate() - now.getDate() - 1

const getDaysInMonth = () => {
  const now = new Date()
  const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  return days
}

const Pivot: FC = () => {
  const [labels, setLabels] = useState<string[]>([])
  const [data, setData] = useState<number[]>([])
  const [cardPieceSums, setCardPieceSums] = useState<number[] | string[]>([])

  useEffect(() => {
    const generateLabelsForCurrentMonth = (fullDateName: boolean = false) => {
      const labels = []
      const now = new Date()
      const days = getDaysInMonth()

      for (let day = 1; day <= days; day++) {
        labels.push(
          `${day}${fullDateName ? ' ' + now.toLocaleString('ru', { month: 'short' }) : ''}`
        )
      }
      return labels
    }

    const generateDataForCurrentMonth = () => {
      const days = getDaysInMonth()
      const data = Array.from({ length: days }, () => Math.floor(Math.random() * 100)) // Random data
      return data
    }

    const calculateSums = () => {
      const sums = [10000, 250000, 150000] // Example sums to apply the formatter to
      return sums.map((sum) => priceFormatter(sum, 3)) // Format with rules like zeros removal
    }

    // Set generated labels and data to state
    setLabels(generateLabelsForCurrentMonth())
    setData(generateDataForCurrentMonth())

    // Set the calculated sums for CardPiece
    setCardPieceSums(calculateSums())
  }, [])

  // Data for all cards
  const cardsData = {
    chiefs: {
      cardTitle: 'Водители',
      cardIconPath: '/card/staff.svg',
      isLink: true,
      link: 'staff',
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
    goals: {
      cardTitle: `Цели на ${now.toLocaleString('ru-ru', { month: 'long' })}`,
      cardIconPath: '/card/goals.svg',
      isLink: true,
      bottomText: `заканчивается через ${daysLeft} ${getDayWord(daysLeft)}`,
      chevronNeeded: false,
      link: '/summary/goals/',
    },
  }

  // Data for CardPiece components
  const cardPiecesData = [
    {
      name: 'Автомобили',
      sum: cardPieceSums[0],
      percents: 2.5,
      fall: false,
    },
    {
      name: 'Выручка',
      sum: cardPieceSums[1],
      percents: 1.8,
      fall: true,
    },
    {
      name: 'Расходы',
      sum: cardPieceSums[2],
      percents: 0.5,
      fall: null,
    },
  ]

  // Data for the duplicated card (Сумма по поездкам)
  const tripCardPiecesData = [
    {
      name: 'Наличные',
      sum: cardPieceSums[0],
      percents: 2.2,
      fall: false,
    },
    {
      name: 'Оплата по карте',
      sum: cardPieceSums[1],
      percents: 1.5,
      fall: true,
    },
    {
      name: 'Корпоративная оплата',
      sum: cardPieceSums[2],
      percents: 0.8,
      fall: null,
    },
  ]

  return (
    <>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={6} flexWrap="wrap">
        {/* Водители */}
        <Card cardProps={cardsData.chiefs}>
          <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={6}>
            <Flex flexDirection="column" justifyContent="space-between" gap={8}>
              <Text variant="cardPriceMain">74</Text>
              <Text variant="cardPriceMain">244</Text>
              <Text variant="cardPriceMain">500</Text>
              <Text variant="cardPriceMain">3 204</Text>
            </Flex>
            <Flex flexDirection="column" justifyContent="flex-end" gap={14}>
              <Text variant="cardSubtitles">на линии</Text>
              <Text variant="cardSubtitles">на линии</Text>
              <Text variant="cardSubtitles">на линии</Text>
              <Text variant="cardSubtitles">на линии</Text>
            </Flex>
          </Flex>
        </Card>

        {/* Авто */}
        <Card cardProps={cardsData.taxiIncome}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Flex flexDirection="column" justifyContent="space-between" gap={2}>
              <Flex gap={6} alignItems={'flex-end'}>
                <Text fontWeight={400} fontSize={'34px'} lineHeight={'34px'}>
                  {cardPiecesData[0].sum}
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={'16px'}
                  color={
                    cardPiecesData[0].fall === false
                      ? '#D86962'
                      : cardPiecesData[0].fall
                        ? '#68B934'
                        : '#1B364A'
                  }
                >
                  {typeof cardPiecesData[0].fall === 'boolean'
                    ? cardPiecesData[0].fall
                      ? `+${cardPiecesData[0].percents} %`
                      : `-${cardPiecesData[0].percents} %`
                    : `${cardPiecesData[0].percents} %`}
                </Text>
              </Flex>
            </Flex>

            <Flex gap={4}>
              {cardPiecesData.map((piece, index) => (
                <CardPiece
                  key={index}
                  name={piece.name}
                  sum={piece.sum}
                  percents={piece.percents}
                  fall={piece.fall}
                />
              ))}
            </Flex>

            <Flex flexDirection="column">
              <Box width="100%" height={150}>
                <LineChart
                  data={data}
                  labels={labels} // Pass in generated labels
                  axisLabelSuffix="тыс" // Suffix for Y-axis
                  width={490}
                  height={150}
                />
              </Box>
            </Flex>
          </Flex>
        </Card>

        {/* Сумма по поездкам */}
        <Card cardProps={cardsData.tripSum}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Flex gap={6} alignItems={'flex-end'}>
              <Text fontWeight={400} fontSize={'34px'} lineHeight={'34px'}>
                {cardPiecesData[1].sum}
              </Text>
              <Text
                fontWeight={400}
                fontSize={'16px'}
                color={
                  cardPiecesData[1].fall === false
                    ? '#D86962'
                    : cardPiecesData[1].fall
                      ? '#68B934'
                      : '#1B364A'
                }
              >
                {typeof cardPiecesData[1].fall === 'boolean'
                  ? cardPiecesData[1].fall
                    ? `+${cardPiecesData[1].percents} %`
                    : `-${cardPiecesData[1].percents} %`
                  : `${cardPiecesData[1].percents} %`}
              </Text>
            </Flex>

            <Flex gap={4}>
              {tripCardPiecesData.map((piece, index) => (
                <CardPiece
                  key={index}
                  name={piece.name}
                  sum={piece.sum}
                  percents={piece.percents}
                  fall={piece.fall}
                />
              ))}
            </Flex>

            <Flex flexDirection="column">
              <Box width="100%" height={150}>
                <LineChart
                  data={data}
                  labels={labels} // Pass in generated labels
                  axisLabelSuffix="тыс" // Suffix for Y-axis
                  width={490}
                  height={150}
                />
              </Box>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}

export default Pivot
