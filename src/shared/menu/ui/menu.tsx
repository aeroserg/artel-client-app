'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { menuItems, bottomMenuItems } from '../../menu-config'

interface MenuProps {
  onHoverChange: (hovered: boolean) => void
  children?: React.ReactNode // Made children optional
}

export default function Menu({ onHoverChange, children }: MenuProps) {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('Сводка')

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === pathname)
    if (currentItem) {
      setActiveLink(currentItem.label)
    } else {
      const currentBottomItem = bottomMenuItems.find((item) => item.path === pathname)
      if (currentBottomItem) {
        setActiveLink(currentBottomItem.label)
      }
    }
  }, [pathname])

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverChange(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverChange(false)
  }

  return (
    <Flex>
      {/* Sidebar Menu */}
      <Box
        as="nav"
        height="100vh"
        width={isHovered ? '250px' : '60px'}
        bg="#F5F6F8"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="10"
        transition="all 0.3s"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        display="block"
      >
        <Flex flexDirection="column" justifyContent="space-between" height="100%">
          <Flex flexDirection="column" p={4}>
            <Flex mb={4} alignItems="center" cursor="pointer">
              <Image src="/logo-menu.svg" alt="Главная" width={30} height={30} />
              <Text ml={3} fontWeight="bold" fontSize="lg">
                {activeLink}
              </Text>
            </Flex>

            <Flex flexDirection="row" gap={3}>
              <Flex flexDirection="column">
                {menuItems.map((item) => (
                  <Flex key={item.id} mb={4} alignItems="center">
                    <Link href={item.path}>
                      <Image
                        src={pathname === item.path ? item.iconOn : item.iconOff}
                        alt={item.label}
                        width={30}
                        height={30}
                      />
                    </Link>
                  </Flex>
                ))}
              </Flex>

              {isHovered && (
                <Flex flexDirection="column" ml={2}>
                  {menuItems.map((item) =>
                    pathname === item.path && item.subItems.length > 0 ? (
                      item.subItems.map((subItem, index) => (
                        <Link key={index} href={subItem.path}>
                          <Text
                            fontSize="sm"
                            mb={2}
                            cursor="pointer"
                            fontWeight={activeLink === subItem.label ? 'bold' : 'normal'}
                            onClick={() => setActiveLink(subItem.label)}
                          >
                            {subItem.label}
                          </Text>
                        </Link>
                      ))
                    ) : null
                  )}
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex flexDirection="column" p={4} mt={8}>
            {bottomMenuItems.map((item) => (
              <Link key={item.id} href={item.path}>
                <Flex alignItems="center" mb={4}>
                  <Image
                    src={pathname === item.path ? item.iconOn : item.iconOff}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                </Flex>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* Main Content with margin from the left */}
      <Box ml={isHovered ? '250px' : '60px'} mt="2rem" transition="all 0.3s">
        {children}
      </Box>
    </Flex>
  )
}
