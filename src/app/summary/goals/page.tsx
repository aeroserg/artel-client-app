'use client'

import { Box, Flex, Image, Progress, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import Card from '@/shared/card/ui/card'
import priceFormatter from '@/util/format-price'

const daysLeft = 15 // Example days left, you can calculate this dynamically if needed
const driversNum = 58 // Current number of drivers, can be dynamically updated
const milestones = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] // Milestones for vertical progress bar

const Goals: FC = () => {
  return (
    <Flex flexDir={{base: "column", xl: "row"}} gap={4} p={4}>
      {/* Card with Title and Bottom Text */}
      <Card
        cardProps={{
          cardTitle: 'Привлеките 100 женщин-водителей',
          bottomText: `заканчивается через: ${daysLeft} дней`,
          chevronNeeded: false, // Disable chevron
        }}
      >
        {/* Main text for formatted price */}
        <Box mb={4}>
          <Text fontSize="45px" fontWeight="500" textAlign={"center"}>
            {priceFormatter(500000)}
          </Text>
        </Box>

        {/* Horizontal Progress Bar */}
        <Flex flexDirection="column" gap={1} mb={8}>
          <Progress
            value={driversNum}
            size="xs"
            borderRadius="6px"
            sx={{ '& > div': { backgroundColor: '#2977B5' } }}
          />
          <Flex justifyContent="space-between">
            <Text variant={'cardProgressUnder'}>{driversNum} из 100</Text>
            <Text variant={'cardProgressUnder'}>{driversNum} %</Text>
          </Flex>
        </Flex>

        <Box>
          <VStack align="start">
            {milestones.map((milestone, i) => (
              <Flex key={milestone} position="relative">
                <Box
                  h="40px"
                  w="3px"
                  bg={milestones[i+1] <= driversNum ? '#68B934' : '#E8EBEF'}
                  
                  display={i === milestones.length -1 ? 'none' : 'block'}
                />
                <Box
                  w="30px"
                  h="30px"
                  border={milestone <= driversNum ? "3px solid #ffffff": "none"}
                  outline={milestone <= driversNum ? "1.5px solid #E8EBEF" : "none"}
                  borderRadius="full"
                  bg={milestone <= driversNum ? '#68B934' : '#E8EBEF'}
                  ml="-13.5px"
                  zIndex={1}
                  position="absolute"
                  top="-10px"

                />

                {/* Label for each milestone */}
               <Flex mt={-3} ml={6} flexDir={"column"} alignItems={"space-around"}>
                    <Text fontSize={"16px"} fontWeight={400}>{priceFormatter(50000)}</Text>
                    <Text fontSize={"10px"} color={"#676E85"}>{`за ${milestone}`}</Text>
               </Flex>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Card>
    <Flex gap={4} flexDir={"column"}>
        <Card cardProps={{
              cardTitle: 'Требования',
              chevronNeeded: false, // Disable chevron
             
        }}
        sx={{maxWidth: "100%", height: "50%", fontSize: "20px"}}>
            {`Привлекайте женщин водителей и помогайте им совершать поездки. Учитываются водители, выполнившие 50 поездок только в пассажирских тарифах в течении 30 дней с даты совершения первой поездки. Дополнительное условие/важный момент: водитель не был привлечён в парк по каналам платного привлечения Артель такси и не выполнял поездки в сервисе до момента регистрации. 

Рекламные макеты https://`}
        </Card>
        <Card
                   sx={{maxWidth: "100%", height: "50%", alignItems: "center"}}>

            <Image src='/features-soon.svg'
                width={350}
            />
        </Card>
    </Flex>
    </Flex>
  )
}

export default Goals
