// src/app/summary/page.tsx
'use client'
import { Box, Divider, Flex, Link, Progress, Text } from '@chakra-ui/react'
import Card from '@/shared/card/ui/card'
import ChartExplanation from '@/shared/chart/explanation/ui/explanation'
import BarChart from '@/shared/chart/chart/ui/bar-chart'
import { ChevronRightIcon } from '@chakra-ui/icons'
import getDayWord from '@/util/get-day-word'
import priceFormatter from '@/util/format-price'
import GoalAchivements from '@/shared/goal-badge-ea'

const cardObjStaff = {
  cardTitle: 'Исполнители',
  cardIconPath: '/card/staff.svg',
  isLink: true,
  link: 'staff',
  chevronNeeded: true,
}

const cardObjCars = {
  cardTitle: 'Автомобили',
  cardIconPath: '/card/cars.svg',
  isLink: true,
  link: 'vehicles',
  chevronNeeded: true,
}

const now = new Date()
const daysLeft = new Date(now.getFullYear(), 1, 0).getDate() - now.getDate() - 1
const cardObjGoals = {
  cardTitle: `Цели на ${now.toLocaleString('ru-ru', { month: 'long' })}`,
  cardIconPath: '/card/goals.svg',
  isLink: true,
  bottomText: `заканчивается через ${daysLeft} ${getDayWord(daysLeft)}`,
  chevronNeeded: false,
  link: '/summary/goals/',
}

const chart1 = {
  data: [209, 385, 402],
  colors: ['#68B934', '#EFB110', '#D86962'],
}
const chart2 = {
  data: [20, 0, 0, 0, 0],
  colors: ['#68B934', '#EFB110', '#999999', '#D86962', '#2977B5'],
}

export default function Summary() {
  return (
    <>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={6} flexWrap="wrap">
        {/* Исполнители */}
        <Card cardProps={cardObjStaff}>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={6}
          >
            <Flex flexDirection="column" justifyContent="space-between" gap={2}>
              <Flex gap={2} alignItems="flex-end">
                <Text variant="cardPriceMain">748</Text>
                <Text variant="cardSubtitles">на линии</Text>
              </Flex>
              <Flex flexDirection="column">
                <ChartExplanation text="209 свободны" mode="light" />
                <ChartExplanation text="385 свободны" mode="medium" />
                <ChartExplanation text="402 свободны" mode="hard" />
              </Flex>
            </Flex>
            <Flex>
              <Box width={250} height={125}>
                <BarChart
                  data={chart1.data}
                  labels={['Свободны', 'На линии', 'Заняты']}
                  colors={chart1.colors}
                  showXAxes={false}
                  width={250}
                  height={125}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Text variant="cardSubtitles">Ср. время на линии</Text>
            <Text variant="cardNumberSub">{`${new Date().getHours()} ч ${new Date().getMinutes()} мин`}</Text>
          </Flex>
          <Flex>
            <Flex flexDirection="column" w="50%">
              <Flex alignItems="center">
                <Text variant="cardSubtitles">Новые</Text>
                <ChevronRightIcon />
              </Flex>
              <Flex gap={2} alignItems="flex-end">
                <Text variant="cardNumberSub">50</Text>
                <Text variant="cardGrowth" color="chartExplain.light">
                  +30%
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" w="50%">
              <Flex alignItems="center">
                <Text variant="cardSubtitles">Отток</Text>
                <ChevronRightIcon />
              </Flex>
              <Flex gap={2} alignItems="flex-end">
                <Text variant="cardNumberSub">20</Text>
                <Text variant="cardGrowth" color="chartExplain.hard">
                  -10%
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>

        {/* Авто */}
        <Card cardProps={cardObjCars}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Flex flexDirection="column" justifyContent="space-between" gap={2}>
              <Flex gap={2} alignItems="flex-end">
                <Text variant="cardPriceMain">41</Text>
                <Text variant="cardSubtitles">парковых автомобилей</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Flex gap={2} overflow="scroll" flexWrap="nowrap">
                <ChartExplanation text="41 работает" color="#68B934" />
                <ChartExplanation text="0 нет водителя" mode="medium" />
                <ChartExplanation text="0 другое" color="#999999" />
                <ChartExplanation text="0 сервис" mode="hard" />
                <ChartExplanation text="0 подготовка" color="#2977B5" />
              </Flex>
              <Box width="100%" height={200}>
                <BarChart
                  data={chart2.data}
                  labels={['работает', ' нет водителя', 'другое', 'сервис', 'подготовка']}
                  colors={chart2.colors}
                  showXAxes={false}
                  width={475}
                  height={200}
                />
              </Box>
            </Flex>
          </Flex>
        </Card>

        {/* Цели */}
        <Card cardProps={cardObjGoals}>
          <Flex justifyContent="space-between" flexDirection="column" gap={6}>
            <Text variant="subTitleCard">Привлеките 100 женщин-водителей</Text>
            <Flex flexDirection="column" gap={1}>
              <Flex justifyContent="flex-end">
                <Text variant={'menuSubitemNotSelected'}>1 из 10</Text>
              </Flex>
              <Progress
                value={10}
                size="xs"
                borderRadius="6px"
                sx={{ '& > div': { backgroundColor: '#68B934' } }}
              />
              <Flex justifyContent="space-between">
                <Text variant={'cardProgressUnder'}>1 из 10</Text>
                <Text variant={'cardProgressUnder'}>{priceFormatter(500000)}</Text>
              </Flex>
            </Flex>
            <Divider bgColor={'#E8EBEF'} height={'1px'} my={4} />
            <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
              <Flex gap={4} flexDirection="column" justifyContent={'space-between'}>
                <Text variant={'regularText'} color={'regularText.title'}>
                  Ожидаемые награды
                </Text>
                <GoalAchivements text={50000} />
              </Flex>
              {cardObjGoals?.link && (
                <Flex alignItems={'center'}>
                  <Link
                    href={cardObjGoals.link}
                    variant={'cardGoalsEA'}
                    color={'regularText.subtitle'}
                  >
                    {'Подробнее'}
                    <ChevronRightIcon boxSize={6} />
                  </Link>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}
