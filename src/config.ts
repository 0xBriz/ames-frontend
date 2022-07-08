import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';
import { ExtinctionPoolInfo } from './bomb-finance/types';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 31337,
    networkName: 'BSC Forked Node',
    ftmscanUrl: '',
    defaultProvider: 'http://167.99.117.123:8545',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18], // this is WBNB
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      UST: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      QUARTZ: ['0x7ebc713a888cea488c20bb9ac1999ee758e21ff0', 18], // This is actually UST on mainnet not fusdt
      AMES: ['0xb9E05B4C168B56F73940980aE6EF366354357009', 18], // This is actually UST on mainnet not fusdt
      ASHARE: ['0xFa4b16b0f63F5A6D0651592620D585D308F749A4', 18], // This is actually UST on mainnet not fusdt
      QSHARE: ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      '1QSHARE': ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0x05faf555522fa3f93959f86b41a3808666093210', 18], // This is actually UST-1USDC
      'AMES-UST-LP': ['0x6f78a0d31adc7c9fb848850f9d2a40da5858ad03', 18], // This is actually AMES-UST
      'AMES-BUSD-LP': ['0x81722a6457e1825050b999548a35e30d9f11db5c', 18], // This is actually AMES-UST
      'AMES-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is AMES-WONE
      'AMES-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is AMETHYST-WONE
      'ASHARE-ONE-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-ONE
      'ASHARE-UST-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-UST
      'ASHARE-BUSD-LP': ['0x91da56569559b0629f076dE73C05696e34Ee05c1', 18], // This is QSHARE-UST
      '1QUARTZ-1QSHARE-LP': ['0x2D491e438A8aa722eCF96c9F2faa05FBe1F476E4', 18], // This is QSHARE-UST
      'AMES-ASHARE-LP': ['0xaE3Cda93486ec2B90172538534f7e2A7508D666F', 18], // This is QSHARE-UST
      '1QUARTZ-UST-LP': ['0x5553386c5a11788b00c353507b2ac8a93ad8f8b1', 18], // This is QSHARE-UST
      '1QSHARE-UST-LP': ['0x61503f74189074e8e793cc0827eae37798c2b8f7', 18], // This is QSHARE-UST
      AALTO: ['0xce18fbbad490d4ff9a9475235cfc519513cfb19a', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18], // this is WBNB
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      UST: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      QUARTZ: ['0x7ebc713a888cea488c20bb9ac1999ee758e21ff0', 18], // This is actually UST on mainnet not fusdt
      AMES: ['0xb9E05B4C168B56F73940980aE6EF366354357009', 18], // This is actually UST on mainnet not fusdt
      ASHARE: ['0xFa4b16b0f63F5A6D0651592620D585D308F749A4', 18], // This is actually UST on mainnet not fusdt
      QSHARE: ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      '1QSHARE': ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0x05faf555522fa3f93959f86b41a3808666093210', 18], // This is actually UST-1USDC
      'AMES-UST-LP': ['0x6f78a0d31adc7c9fb848850f9d2a40da5858ad03', 18], // This is actually AMES-UST
      'AMES-BUSD-LP': ['0x81722a6457e1825050b999548a35e30d9f11db5c', 18], // This is actually AMES-UST
      'AMES-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is AMES-WONE
      'AMES-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is AMETHYST-WONE
      'ASHARE-ONE-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-ONE
      'ASHARE-UST-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-UST
      'ASHARE-BUSD-LP': ['0x91da56569559b0629f076dE73C05696e34Ee05c1', 18], // This is QSHARE-UST
      '1QUARTZ-1QSHARE-LP': ['0x2D491e438A8aa722eCF96c9F2faa05FBe1F476E4', 18], // This is QSHARE-UST
      'AMES-ASHARE-LP': ['0xaE3Cda93486ec2B90172538534f7e2A7508D666F', 18], // This is QSHARE-UST
      '1QUARTZ-UST-LP': ['0x5553386c5a11788b00c353507b2ac8a93ad8f8b1', 18], // This is QSHARE-UST
      '1QSHARE-UST-LP': ['0x61503f74189074e8e793cc0827eae37798c2b8f7', 18], // This is QSHARE-UST
      AALTO: ['0xce18fbbad490d4ff9a9475235cfc519513cfb19a', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  hardhat: {
    chainId: 31337,
    networkName: 'Hardhat Local Node',
    ftmscanUrl: '',
    defaultProvider: 'http://localhost:8545',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18], // this is WBNB
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      UST: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually UST on mainnet not fusdt
      QUARTZ: ['0x7ebc713a888cea488c20bb9ac1999ee758e21ff0', 18], // This is actually UST on mainnet not fusdt
      AMES: ['0xb9E05B4C168B56F73940980aE6EF366354357009', 18], // This is actually UST on mainnet not fusdt
      ASHARE: ['0xFa4b16b0f63F5A6D0651592620D585D308F749A4', 18], // This is actually UST on mainnet not fusdt
      QSHARE: ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      '1QSHARE': ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0x05faf555522fa3f93959f86b41a3808666093210', 18], // This is actually UST-1USDC
      'AMES-UST-LP': ['0x6f78a0d31adc7c9fb848850f9d2a40da5858ad03', 18], // This is actually AMES-UST
      'AMES-BUSD-LP': ['0x81722a6457e1825050b999548a35e30d9f11db5c', 18], // This is actually AMES-UST
      'AMES-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is AMES-WONE
      'AMES-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is AMETHYST-WONE
      'ASHARE-ONE-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-ONE
      'ASHARE-UST-LP': ['0x39846550Ef3Cb8d06E3CFF52845dF42F71Ac3851', 18], // This is QSHARE-UST
      'ASHARE-BUSD-LP': ['0x91da56569559b0629f076dE73C05696e34Ee05c1', 18], // This is QSHARE-UST
      '1QUARTZ-1QSHARE-LP': ['0x2D491e438A8aa722eCF96c9F2faa05FBe1F476E4', 18], // This is QSHARE-UST
      'AMES-ASHARE-LP': ['0xaE3Cda93486ec2B90172538534f7e2A7508D666F', 18], // This is QSHARE-UST
      '1QUARTZ-UST-LP': ['0x5553386c5a11788b00c353507b2ac8a93ad8f8b1', 18], // This is QSHARE-UST
      '1QSHARE-UST-LP': ['0x61503f74189074e8e793cc0827eae37798c2b8f7', 18], // This is QSHARE-UST
      AALTO: ['0xce18fbbad490d4ff9a9475235cfc519513cfb19a', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BOMB
        - 2 = LP asset staking rewarding BSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  AmesAshareLPQShareRewardPool: {
    name: 'Earn ASHARE by AMES-ASHARE LP',
    poolId: 5,
    sectionInUI: 2,
    contract: 'AmesAshareLPQShareRewardPool',
    depositTokenName: 'AMES-ASHARE-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 4,
    closedForStaking: true,
  },
  AmesQShareRewardPool: {
    name: 'Earn ASHARE by AMES',
    poolId: 6,
    sectionInUI: 2,
    contract: 'AmesQShareRewardPool',
    depositTokenName: 'AMES',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 0,
    closedForStaking: false,
    onlyVault: true,
  },
  AmesBusdLPAShareRewardPool: {
    name: 'Earn ASHARE by AMES-BUSD LP',
    poolId: 9,
    sectionInUI: 2,
    contract: 'AmesBusdLPAShareRewardPool',
    depositTokenName: 'AMES-BUSD-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  AShareBusdLPAShareRewardPool: {
    name: 'Earn ASHARE by AMES-BUSD LP',
    poolId: 8,
    sectionInUI: 2,
    contract: 'AShareBusdLPAShareRewardPool',
    depositTokenName: 'ASHARE-BUSD-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  AmesNode: {
    name: 'Generate Ames with Nodes',
    poolId: 0,
    sectionInUI: 3,
    contract: 'AmesNode',
    depositTokenName: 'AMES',
    earnTokenName: 'AMES',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  ShareNode: {
    name: 'Generate AShare with Nodes',
    poolId: 0,
    sectionInUI: 3,
    contract: 'ShareNode',
    depositTokenName: 'ASHARE',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
};

export const extinctionPoolDefinitions: { [contractName: string]: ExtinctionPoolInfo } = {
  AmesExtinction: {
    name: 'AMES Peg Pool 1',
    contract: 'AmesExtinction',
    depositTokenName: 'AMES',
  },
};

export default configurations[process.env.NODE_ENV || 'hardhat'];
