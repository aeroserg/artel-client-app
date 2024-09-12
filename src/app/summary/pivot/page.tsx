'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect, FC } from 'react'
import Card from '@/shared/card/ui/card'
import LineChart from '@/shared/chart/chart/ui/line-chart'
import priceFormatter from '@/util/format-price'
import CardPiece from '@/shared/card/piece/ui/card-piece'
import { cardData, cardPieceData } from '@/util/card.store'

const getDaysInMonth = () => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
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
      const sums = [10000, 250000, 150000]
      return sums.map((sum) => priceFormatter(sum, 3)) // Format sums with the custom formatter
    }

    // Set generated labels and data to state
    setLabels(generateLabelsForCurrentMonth())
    setData(generateDataForCurrentMonth())

    // Set the calculated sums for CardPiece
    setCardPieceSums(calculateSums())
  }, [])

  return (
    <>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={6} flexWrap="wrap">
        {/* Водители */}
        <Card cardProps={cardData.chiefs}>
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
        <Card cardProps={cardData.taxiIncome}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Flex flexDirection="column" justifyContent="space-between" gap={2}>
              <Flex gap={6} alignItems={'flex-end'}>
                <Text fontWeight={400} fontSize={'34px'} lineHeight={'34px'}>
                  {cardPieceSums[0]}
                </Text>
                <Text
                  fontWeight={400}
                  fontSize={'16px'}
                  color={
                    cardPieceData.main[0].fall === false
                      ? '#D86962'
                      : cardPieceData.main[0].fall
                        ? '#68B934'
                        : '#1B364A'
                  }
                >
                  {typeof cardPieceData.main[0].fall === 'boolean'
                    ? cardPieceData.main[0].fall
                      ? `+${cardPieceData.main[0].percents} %`
                      : `-${cardPieceData.main[0].percents} %`
                    : `${cardPieceData.main[0].percents} %`}
                </Text>
              </Flex>
            </Flex>

            <Flex gap={4}>
              {cardPieceData.main.map((piece, index) => (
                <CardPiece
                  key={index}
                  name={piece.name}
                  sum={cardPieceSums[index]}
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
        <Card cardProps={cardData.tripSum}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Flex gap={6} alignItems={'flex-end'}>
              <Text fontWeight={400} fontSize={'34px'} lineHeight={'34px'}>
                {cardPieceSums[1]}
              </Text>
              <Text
                fontWeight={400}
                fontSize={'16px'}
                color={
                  cardPieceData.trip[1].fall === false
                    ? '#D86962'
                    : cardPieceData.trip[1].fall
                      ? '#68B934'
                      : '#1B364A'
                }
              >
                {typeof cardPieceData.trip[1].fall === 'boolean'
                  ? cardPieceData.trip[1].fall
                    ? `+${cardPieceData.trip[1].percents} %`
                    : `-${cardPieceData.trip[1].percents} %`
                  : `${cardPieceData.trip[1].percents} %`}
              </Text>
            </Flex>

            <Flex gap={4}>
              {cardPieceData.trip.map((piece, index) => (
                <CardPiece
                  key={index}
                  name={piece.name}
                  sum={cardPieceSums[index]}
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
