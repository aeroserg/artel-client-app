'use client'

import { ChakraStyledOptions, Flex, Image, Link, Text, Box } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface cardProps {
  cardTitle?: string
  cardIconPath?: string
  chartData?: any
  isLink?: boolean
  link?: string
  bottomText?: string
  chevronNeeded?: boolean
  isQuestionable?: boolean
  questionAnswer?: string
  rightLink?: string
  rightLinkName?: string
}

interface CardProps {
  children?: React.ReactNode
  sx?: ChakraStyledOptions
  cardProps?: cardProps
}

const Card: FC<CardProps> = ({
  children,
  sx,
  cardProps = {
    chevronNeeded: true,
    rightLink: '',
    rightLinkName: '',
    isQuestionable: false,
    questionAnswer: '',
  },
}) => {
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
      {cardProps?.cardTitle && <CardTitle cardProps={cardProps} />}

      {children}
    </Flex>
  )
}

interface CardTitleProps {
  cardProps?: cardProps
}

const CardTitle: FC<CardTitleProps> = ({ cardProps }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Flex justifyContent="space-between" alignItems="center">
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

        <Flex gap={2} alignItems={'center'}>
          <Flex flexDir={'column'}>
            {cardProps?.cardTitle && (
              <Flex alignItems="center">
                {cardProps?.isLink ? (
                  <Link href={cardProps?.link}>
                    <Text variant={'headers'} color="regularText.title">
                      {cardProps?.cardTitle}
                    </Text>
                  </Link>
                ) : (
                  <Text variant={'headers'} color="regularText.title">
                    {cardProps?.cardTitle}
                  </Text>
                )}

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

          {cardProps?.isQuestionable && (
            <Box position="relative">
              <Image
                src="/shared/info-icon.svg"
                width={'20px'}
                cursor="pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              {isHovered && (
                <Box
                  position="absolute"
                  top="35px"
                  left="0"
                  bgColor="#00000080"
                  p={2}
                  borderRadius="md"
                  boxShadow="md"
                  zIndex="100"
                  width={"150px"}
                >
                  <Text color="#ffffff" fontSize="sm">{cardProps?.questionAnswer}</Text>
                </Box>
              )}
            </Box>
          )}
        </Flex>
      </Flex>

      {/* Right link and chevron */}
      {cardProps?.rightLink && cardProps?.rightLink !== '' && (
        <Flex alignItems="center" gap={1}>
          <Link
            href={cardProps?.rightLink}
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '16.8px',
              textAlign: 'left',
            }}
          >
            {cardProps?.rightLinkName}
          </Link>
          <ChevronRightIcon boxSize={'5'} />
        </Flex>
      )}
    </Flex>
  )
}

export default Card
