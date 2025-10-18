import type { Chain } from 'viem'
import { bsc } from 'viem/chains'

export const BSCMevGuardChain = {
  ...bsc,
  rpcUrls: {
    default: {
      http: ['https://bscrpc.pancakeswap.finance'],
    },
  },
  name: 'NbcSwap MEV Guard',
} satisfies Chain
