import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 1666600000,
    networkName: 'Harmony',
    ftmscanUrl: 'https://explorer.harmony.one/',
    defaultProvider: 'https://api.harmony.one',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18], // this is WONE
      FUSDT: ['0x985458E523dB3d53125813eD68c274899e9DfAb4', 6], // This is actually 1USDC on mainnet not fusdt
      BTCB: ['0x224e64ec1BDce3870a6a6c777eDd450454068FEC', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x66c17f5381d7821385974783be34c9b31f75eb78', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0xa1221a5bbea699f507cc00bdedea05b5d2e32eba', 18], // This is actually UST-1USDC
      'QUARTZ-UST-LP': ['0x90a48cb3a724ef6f8e6240f4788559f6370b6925', 18], // This is actually QUARTZ-UST
      'QUARTZ-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is QUARTZ-WONE
      'QUARTZ-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is QUARTZ-WONE
      'QSHARE-ONE-LP': ['0x157e2e205b8d307501f1aad1c5c96c562e6f07c5', 18], // This is QSHARE-ONE
      'QSHARE-UST-LP': ['0x363167828bafb7cddf01475613df72917f75fbde', 18], // This is QSHARE-UST
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 1666600000,
    networkName: 'Harmony',
    ftmscanUrl: 'https://explorer.harmony.one/',
    defaultProvider: 'https://api.harmony.one',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WONE: ['0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18], // this is WONE
      FUSDT: ['0x985458E523dB3d53125813eD68c274899e9DfAb4', 6], // This is actually 1USDC on mainnet not fusdt
      BTCB: ['0x224e64ec1BDce3870a6a6c777eDd450454068FEC', 18], // This is actually UST on mainnet not fusdt
      'USDT-WONE-LP': ['0x66c17f5381d7821385974783be34c9b31f75eb78', 18], // This is actually 1USDC-WONE on mainnet not fusdt
      'USDT-BTCB-LP': ['0xa1221a5bbea699f507cc00bdedea05b5d2e32eba', 18], // This is actually UST-1USDC
      'QUARTZ-UST-LP': ['0x90a48cb3a724ef6f8e6240f4788559f6370b6925', 18], // This is actually QUARTZ-UST
      'QUARTZ-WONE-LP': ['0x8142d1b6a32e40c62b8ada3685475924578a804c', 18], // This is QUARTZ-WONE
      'QUARTZ-QSHARE-LP': ['0x3736b5b6f2033433ea974e121ce19cc6d0e10dc9', 18], // This is QUARTZ-WONE
      'QSHARE-ONE-LP': ['0x157e2e205b8d307501f1aad1c5c96c562e6f07c5', 18], // This is QSHARE-ONE
      'QSHARE-UST-LP': ['0x363167828bafb7cddf01475613df72917f75fbde', 18], // This is QSHARE-UST
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
  QuartzQShareLPQShareRewardPool: {
    name: 'Earn QSHARE by QUARTZ-QSHARE LP',
    poolId: 3,
    sectionInUI: 2,
    contract: 'QuartzQShareLPQShareRewardPool',
    depositTokenName: 'QUARTZ-QSHARE-LP',
    earnTokenName: 'QSHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  QShareOneLPQShareRewardPool: {
    name: 'Earn QSHARE by QSHARE-ONE LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'QShareOneLPQShareRewardPool',
    depositTokenName: 'QSHARE-ONE-LP',
    earnTokenName: 'QSHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  QuartzUstLPQShareRewardPool: {
    name: 'Earn QSHARE by QUARTZ-UST LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'QuartzUstLPQShareRewardPool',
    depositTokenName: 'QUARTZ-UST-LP',
    earnTokenName: 'QSHARE',
    finished: false,
    sort: 2,
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
