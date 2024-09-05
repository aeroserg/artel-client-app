'use client'

import { ChakraStyledOptions, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface cardProps {
  cardTitle?: string
  cardIconPath?: string
  chartData?: any
  isLink?: boolean
  link?: string
  bottomText?: string
  chevronNeeded?: boolean
}

interface CardProps {
  children?: React.ReactNode
  sx?: ChakraStyledOptions
  cardProps?: cardProps
}

const Card: FC<CardProps> = ({ children, sx, cardProps = { chevronNeeded: true } }) => {
  return (
    <Flex
      sx={sx}
      bgColor={'#ffffff'}
      borderRadius={'10px'}
      p={'2rem'}
      maxW={'550px'}
      minW={{ base: '100%', lg: '550px' }}
      gap={6}
      flexDirection={'column'}
    >
      {cardProps?.isLink ? (
        <Link href={cardProps?.link}>
          <CardTitle cardProps={cardProps} />
        </Link>
      ) : (
        <CardTitle cardProps={cardProps} />
      )}

      {children}
    </Flex>
  )
}

interface CardTitleProps {
  cardProps?: cardProps
}

const CardTitle: FC<CardTitleProps> = ({ cardProps }) => {
  return (
    <Flex gap={2} alignItems={cardProps?.chevronNeeded ? 'center' : 'flex-start'}>
      {cardProps?.cardIconPath && (
        <Image
          alt="Icon"
          src={cardProps.cardIconPath}
          width={'30px'}
          height={'30px'}
          mt={cardProps?.chevronNeeded ? '0' : '0.375rem'}
        />
      )}

      <Flex flexDir={'column'}>
        {cardProps?.cardTitle && (
          <Flex alignItems="center">
            <Text variant={'headers'} color="regularText.title">
              {cardProps?.cardTitle}
            </Text>
            {cardProps?.chevronNeeded && <ChevronRightIcon boxSize={'7'} />}
          </Flex>
        )}
        {cardProps?.bottomText && (
          <Flex alignItems={'center'} gap={2} mt={0}>
            <Image alt="Icon" src="/shared/timer.svg" width={'15px'} />
            <Text variant={'regularExplanation'}>{cardProps.bottomText}</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default Card
