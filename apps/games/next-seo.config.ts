import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | NbcSwap',
  defaultTitle: 'Game | NbcSwap',
  description: 'Play different games on NbcSwap, using CAKE and NbcSwap NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: '🥞 NbcSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'Play different games on NbcSwap, using CAKE and NbcSwap NFTs',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
