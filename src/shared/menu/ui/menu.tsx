'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { menuItems, bottomMenuItems } from '../../menu-config'

interface MenuProps {
  onHoverChange: (hovered: boolean) => void
  children?: React.ReactNode 
}

export default function Menu({ onHoverChange, children }: MenuProps) {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('Сводка') // Default active link

  useEffect(() => {
    // Find the current parent item or subitem based on the current path
    const currentItem = menuItems.find((item) => {
      // Check if the pathname starts with the parent item path
      if (pathname.startsWith(item.path)) {
        // Check if any subitem matches the pathname
        const activeSubItem = item.subItems?.find((sub) => pathname.startsWith(sub.path))
        if (activeSubItem) {
          // Set the active link to the subitem label if a subitem is selected
          setActiveLink(activeSubItem.label)
        } else {
          // Set the active link to the parent item label if no subitem is selected
          setActiveLink(item.label)
        }
        return true
      }
      return false
    })

    if (!currentItem) {
      const currentBottomItem = bottomMenuItems.find((item) => pathname.startsWith(item.path))
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
            {/* Logo and Active Link */}
            <Flex mb={4} alignItems="center" cursor="pointer">
              <Image src="/logo-menu.svg" alt="Главная" width={30} height={30} />
              {/* Display activeLink (either parent or subitem) */}
              <Text ml={3} variant={"menuHeader"}>
                {activeLink}
              </Text>
            </Flex>

            <Flex flexDirection="row" gap={3}>
              <Flex flexDirection="column">
                {menuItems.map((item) => {
                  const isActive = pathname.startsWith(item.path)

                  return (
                    <Flex key={item.id} mb={4} alignItems="center">
                      <Link href={item.path}>
                        <Image
                          src={isActive ? item.iconOn : item.iconOff} // Parent item icon "on"
                          alt={item.label}
                          width={30}
                          height={30}
                        />
                      </Link>
                    </Flex>
                  )
                })}
              </Flex>

              {isHovered && (
                <Flex flexDirection="column" ml={2}>
                  {menuItems.map((item) =>
                    item.subItems.length > 0 && pathname.startsWith(item.path) ? (
                      item.subItems.map((subItem, index) => (
                        <Link key={index} href={subItem.path}>
                          <Text
                            fontSize="sm"
                            mb={2}
                            cursor="pointer"
                            fontWeight="normal"
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
                    src={pathname.startsWith(item.path) ? item.iconOn : item.iconOff}
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
      <Box ml={isHovered ? '250px' : '60px'} mt="3rem" transition="all 0.3s">
        {children}
      </Box>
    </Flex>
  )
}
