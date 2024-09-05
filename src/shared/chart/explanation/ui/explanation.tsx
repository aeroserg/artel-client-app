import { Flex, Text } from '@chakra-ui/react'

export default function ChartExplanation({
  text = '',
  mode = null,
  color = '',
}: {
  text: string
  mode?: 'light' | 'medium' | 'hard' | null
  color?: string
}) {
  // mode ? mode === "hard" ? "#D86962" : mode === "light" ? "#68B934" : "#EFB110" : color
  function pickColor(mode: 'light' | 'medium' | 'hard' | null, color: string): string {
    let result: string | null = null
    switch (mode) {
      case 'light':
        result = '#68B934'
        break
      case 'medium':
        result = '#EFB110'
        break
      case 'hard':
        result = '#D86962'
        break
      case null:
      default:
        switch (color) {
          case '':
            result = '#68B934'
            break
          default:
            result = color
        }
    }
    return result
  }
  const stroke: string = pickColor(mode, color)
  return (
    <Flex
      minW={'fit-content'}
      gap={1}
      flexDirection={'row'}
      alignItems={'center'}
      flexWrap={'nowrap'}
    >
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6.06403" r="4.5" stroke={stroke ? stroke : '#68B934'} strokeWidth="3" />
      </svg>
      <Text variant={'cardColorsExplanation'}>{text}</Text>
    </Flex>
  )
}
