import priceFormatter from '@/util/format-price'
import { Flex, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface goalProps {
  text: number | string
}

const GoalAchivements: FC<goalProps> = ({ text }) => {
  return (
    <Flex
      position={'relative'}
      background="linear-gradient(90deg, #FAB043 0%, #FAE843 100%)"
      p={1}
      px={10}
      gap={2}
      borderRadius={'50px'}
      w={'fit-content'}
    >
      <Image
        position={'absolute'}
        left={2.5}
        top={1.5}
        src="shared/achivements.svg"
        alt="награды"
      />
      {typeof text === 'number' && <Text variant={'cardGoalsBadge'}>{priceFormatter(text)}</Text>}
      {typeof text === 'string' && <Text variant={'cardGoalsBadge'}>{text}</Text>}
    </Flex>
  )
}
export default GoalAchivements
