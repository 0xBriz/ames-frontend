import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18], // this is WBNB
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x23396cF899Ca06c4472205fC903bDB4de249D6fC', 18], // This is actually UST on mainnet not fusdt
      UST: ['0x23396cF899Ca06c4472205fC903bDB4de249D6fC', 18], // This is actually UST on mainnet not fusdt
      QUARTZ: ['0x7ebc713a888cea488c20bb9ac1999ee758e21ff0', 18], // This is actually UST on mainnet not fusdt
      QSHARE: ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0x05faf555522fa3f93959f86b41a3808666093210', 18], // This is actually UST-1USDC
      'AMES-UST-LP': ['0xeb50f489581b0fe627f1eb083800ee474f7a4b7d', 18], // This is actually AMES-UST
      'AMES-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is AMES-WONE
      'AMES-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is AMETHYST-WONE
      'ASHARE-ONE-LP': ['0x2f12ce9e2f919513e8be4205e6677a28bfca938b', 18], // This is QSHARE-ONE
      'ASHARE-UST-LP': ['0x2f12ce9e2f919513e8be4205e6677a28bfca938b', 18], // This is QSHARE-UST
      '1QUARTZ-1QSHARE-LP': ['0x2D491e438A8aa722eCF96c9F2faa05FBe1F476E4', 18], // This is QSHARE-UST
      '1QUARTZ-UST-LP': ['0x5553386c5a11788b00c353507b2ac8a93ad8f8b1', 18], // This is QSHARE-UST
      '1QSHARE-UST-LP': ['0x61503f74189074e8e793cc0827eae37798c2b8f7', 18], // This is QSHARE-UST
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
      BTCB: ['0x23396cF899Ca06c4472205fC903bDB4de249D6fC', 18], // This is actually UST on mainnet not fusdt
      UST: ['0x23396cF899Ca06c4472205fC903bDB4de249D6fC', 18], // This is actually UST on mainnet not fusdt
      QUARTZ: ['0x7ebc713a888cea488c20bb9ac1999ee758e21ff0', 18], // This is actually UST on mainnet not fusdt
      QSHARE: ['0x36d53ed6380313f3823eed2f44dddb6d1d52f656', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0x05faf555522fa3f93959f86b41a3808666093210', 18], // This is actually UST-1USDC
      'AMES-UST-LP': ['0xeb50f489581b0fe627f1eb083800ee474f7a4b7d', 18], // This is actually AMES-UST
      'AMES-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is AMES-WONE
      'AMES-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is AMES-WONE
      'ASHARE-ONE-LP': ['0x2f12ce9e2f919513e8be4205e6677a28bfca938b', 18], // This is QSHARE-ONE
      'ASHARE-UST-LP': ['0x2f12ce9e2f919513e8be4205e6677a28bfca938b', 18], // This is QSHARE-UST
      '1QUARTZ-1QSHARE-LP': ['0x2D491e438A8aa722eCF96c9F2faa05FBe1F476E4', 18], // This is QSHARE-UST
      '1QUARTZ-UST-LP': ['0x5553386c5a11788b00c353507b2ac8a93ad8f8b1', 18], // This is QSHARE-UST
      '1QSHARE-UST-LP': ['0x61503f74189074e8e793cc0827eae37798c2b8f7', 18], // This is QSHARE-UST
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
  // BombBTCApeLPBombRewardPool: {
  //   name: 'Earn BOMB by BOMB-BTCB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 1,
  //   contract: 'BombBTCApeLPBombRewardPool',
  //   depositTokenName: 'BOMB-BTCB-APELP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 2,
  //   closedForStaking: true,
  // },
  // BombBTCLPBombRewardPool: {
  //   name: 'Earn BOMB by BOMB-BTC LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BombBTCLPBombRewardPool',
  //   depositTokenName: 'BOMB-BTCB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 7,
  //   closedForStaking: true,
  // },
  // BombCakeRewardPool: {
  //   name: 'Earn BOMB by CAKE',
  //   poolId: 0,
  //   sectionInUI: 0,
  //   contract: 'BombCAKERewardPool',
  //   depositTokenName: 'CAKE',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 3,
  //   closedForStaking: true,
  // },
  // BombSBTCRewardPool: {
  //   name: 'Earn BOMB by SBTC',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'BombSBTCRewardPool',
  //   depositTokenName: 'SBTC',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 4,
  //   closedForStaking: true,
  // },
  // BombSUSDRewardPool: {
  //   name: 'Earn BOMB by SUSD',
  //   poolId: 1,
  //   sectionInUI: 0,
  //   contract: 'BombSUSDRewardPool',
  //   depositTokenName: 'SUSD',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 5,
  //   closedForStaking: true,
  // },
  // BombSVLRewardPool: {
  //   name: 'Earn BOMB by SVL',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BombSVLRewardPool',
  //   depositTokenName: 'SVL',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 6,
  //   closedForStaking: true,
  // },
  // BombWBNBGenesisRewardPool: {
  //   name: 'Earn BOMB by WBNB',
  //   poolId: 4,
  //   sectionInUI: 0,
  //   contract: 'BombWBNBGenesisRewardPool',
  //   depositTokenName: 'WBNB',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 1,
  //   closedForStaking: true,
  // },
  // BombBnbLPRewardPool: {
  //   name: 'Earn BOMB by BOMB-BNB LP',
  //   poolId: 1,
  //   sectionInUI: 1,
  //   contract: 'BombBnbLPRewardPool',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 8,
  //   closedForStaking: false,
  // },
  // BombShibaRewardPool: {
  //   name: 'Earn BOMB by SHIBA',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'BombShibaGenesisRewardPool',
  //   depositTokenName: 'SHIBA',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: true,
  // },
  // BombZooRewardPool: {
  //   name: 'Earn BOMB by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BombZooGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: true,
  // },
  // BombFtmLPBombRewardPoolOld: {
  //   name: 'Earn BOMB by BOMB-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BombFtmLpBombRewardPoolOld',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: true,
  // },
  // BombFtmLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 2,
  //   contract: 'BombFtmLPBShareRewardPool',
  //   depositTokenName: 'BOMB-BNB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 6,
  //   closedForStaking: false,
  // },
  // BshareBnbLPApeBShareRewardPool: {
  //   name: 'Earn BSHARE by BSHARE-BNB LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'BshareBnbLPApeBShareRewardPool',
  //   depositTokenName: 'BSHARE-BNB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BombBtcbLPApeBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BTCB LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BombBtcbLPApeBShareRewardPool',
  //   depositTokenName: 'BOMB-BTCB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BshareBnbApeLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BSHARE-BNB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 1,
  //   contract: 'BshareBnbApeLPBShareRewardPool',
  //   depositTokenName: 'BSHARE-BNB-APELP',
  //   earnTokenName: 'BSHARE',
  //   finished: true,
  //   sort: 5,
  //   closedForStaking: true,
  // },
  // BombBtcbApeLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BTCB Ape LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BombBtcbApeLPBShareRewardPool',
  //   depositTokenName: 'BOMB-BTCB-APELP',
  //   earnTokenName: 'BSHARE',
  //   finished: true,
  //   sort: 4,
  //   closedForStaking: true,
  // },
  // QuartzQShareLPQShareRewardPool: {
  //   name: 'Earn QSHARE by AMES-QSHARE LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'QuartzQShareLPQShareRewardPool',
  //   depositTokenName: 'AMES-QSHARE-LP',
  //   earnTokenName: 'QSHARE',
  //   finished: false,
  //   sort: 2,
  //   closedForStaking: false,
  // },
  // QShareOneLPQShareRewardPool: {
  //   name: 'Earn QSHARE by QSHARE-ONE LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'QShareOneLPQShareRewardPool',
  //   depositTokenName: 'QSHARE-ONE-LP',
  //   earnTokenName: 'QSHARE',
  //   finished: false,
  //   sort: 2,
  //   closedForStaking: false,
  // },
  AmesUstLPQShareRewardPool: {
    name: 'Earn ASHARE by AMES-UST LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'AmesUstLPQShareRewardPool',
    depositTokenName: 'AMES-UST-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  AShareUstLPQShareRewardPool: {
    name: 'Earn ASHARE by AMETHYST-UST LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'AShareUstLPQShareRewardPool',
    depositTokenName: 'ASHARE-UST-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  // QuartzUSTLPQShareRewardPool: {
  //   name: 'Earn ASHARE by 1QUARTZ-UST LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'QuartzUSTLPQShareRewardPool',
  //   depositTokenName: '1QUARTZ-UST-LP',
  //   earnTokenName: 'ASHARE',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: false,
  // },
  QShareUSTLPQShareRewardPool: {
    name: 'Earn ASHARE by 1QSHARE-UST LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'QShareUSTLPQShareRewardPool',
    depositTokenName: '1QSHARE-UST-LP',
    earnTokenName: 'ASHARE',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
  // BombBtcbLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-BTCB LP',
  //   poolId: 1,
  //   sectionInUI: 2,
  //   contract: 'BombBtcbLPBShareRewardPool',
  //   depositTokenName: 'BOMB-BTCB-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 1,
  //   closedForStaking: false,
  // },
};

export default configurations[process.env.NODE_ENV || 'development'];
