'use client'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Menu from '../ui/menu' // Импорт компонента Menu

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false) // Состояние для управления наведением

  return (
    <Box position="relative">
      <Menu onHoverChange={setIsHovered} /> {/* Передаем setIsHovered в Menu */}
      {/* Overlay для затемнения контента */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        bg="blackAlpha.600"
        opacity={isHovered ? '1' : '0'}
        transition="opacity 0.3s"
        zIndex="5"
        pointerEvents={isHovered ? 'auto' : 'none'}
      />
      {/* Контент страницы, который передается через children */}
      <Box p={4} ml="60px" flex="1" position="relative" zIndex="1">
        {children}
      </Box>
    </Box>
  )
}
