import type { Metadata } from 'next'
import { Inter, Fira_Sans } from 'next/font/google'
import './globals.css'
import metaDataArtel from '@/metadata'
import AppLayout from '@/shared/menu/layout/app-layout'
import ChakraWrapper from '@/chakra-provider' // Import the Chakra Wrapper

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const firaSans = Fira_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = metaDataArtel

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body
        style={{ backgroundColor: '#F5F6F8' }}
        className={`${inter.className} ${firaSans.className}`}
      >
        <ChakraWrapper>
          <AppLayout>{children}</AppLayout>
        </ChakraWrapper>
      </body>
    </html>
  )
}
