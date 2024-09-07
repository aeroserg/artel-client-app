import priceFormatter from '@/util/format-price'
import { ChakraStyledOptions, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface pieceProps {
  name?: string
  sum?: string | number
  percents?: string | number
  fall?: boolean | null
  children?: React.ReactNode
}

const CardPiece: FC<pieceProps & ChakraStyledOptions> = (pieceProps) => {
  return (
    <Flex
      borderRadius={'4px'}
      backgroundColor={'#F5F6F8'}
      p={2}
      fontSize={'13px'}
      fontWeight={500}
      w={'fit-content'}
      flexDir={'column'}
      gap={2}
      flexWrap={'nowrap'}
      width={'100%'}
    >
      {pieceProps?.children && pieceProps?.children}
      <Text letterSpacing={'-0.5px'}>{pieceProps?.name}</Text>
      <Flex gap={6}>
        <Text>
          {typeof pieceProps?.sum === 'string' && pieceProps?.sum}
          {typeof pieceProps?.sum?.toString().length !== 'undefined' &&
            typeof pieceProps?.sum === 'number' &&
            (pieceProps?.sum?.toString().split(/[.,]/)[0].length >= 4 &&
            pieceProps?.sum?.toString().split(/[.,]/)[0].length <= 6
              ? priceFormatter(Number(pieceProps?.sum?.toString().replace(',', '.')), 3)
              : pieceProps?.sum?.toString().split(/[.,]/)[0].length > 6 &&
                  pieceProps?.sum?.toString().split(/[.,]/)[0].length <= 9
                ? priceFormatter(Number(pieceProps?.sum?.toString().replace(',', '.')), 6)
                : pieceProps?.sum?.toString().split(/[.,]/)[0].length > 9 &&
                  priceFormatter(Number(pieceProps?.sum?.toString().replace(',', '.')), 9))}
        </Text>

        <Text
          fontWeight={400}
          color={pieceProps?.fall === false ? '#D86962' : pieceProps?.fall ? '#68B934' : '#1B364A'}
        >
          {typeof pieceProps?.fall === 'boolean'
            ? pieceProps?.fall
              ? `+${pieceProps?.percents} %`
              : `-${pieceProps?.percents} %`
            : `${pieceProps?.percents} %`}
        </Text>
      </Flex>
    </Flex>
  )
}
export default CardPiece
