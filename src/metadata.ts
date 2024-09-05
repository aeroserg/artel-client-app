import { Metadata } from 'next'

const metaDataArtel: Metadata = {
  metadataBase: new URL('https://www.artel.com'),
  title: 'Artel - Личный кабинет',
  description: 'Настраивайте ваш бизнес эффективно',
  keywords:
    'Artel, такси, Краснодар, такси в Краснодаре, личный кабинет таксопарка, личный кабинет, таксопарк, бизнес решения для такси, профиль компании, управление бизнесом',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.artel.com/personal-account',
  },
  openGraph: {
    title: 'Artel - Личный кабинет',
    description: 'Настраивайте ваш бизнес эффективно',
    url: 'https://www.artel.com/personal-account',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Artel',
    images: [
      {
        url: '/opengraph-image.png',
        width: 110,
        height: 107,
        alt: 'Artel Personal Account',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@artel',
    title: 'Artel - Личный кабинет',
    description: 'Настраивайте ваш бизнес эффективно',
    images: '/images/twitter-image.jpg',
  },
}
export default metaDataArtel
