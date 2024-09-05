'use client' // This is required for ChakraProvider

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '@/theme'

export default function ChakraWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
