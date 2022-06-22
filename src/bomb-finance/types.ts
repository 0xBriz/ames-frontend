import ERC20 from './ERC20';

export type ContractName = string;

export interface BankInfo {
  name: string;
  poolId: number;
  sectionInUI: number;
  contract: ContractName;
  depositTokenName: ContractName;
  earnTokenName: ContractName;
  sort: number;
  finished: boolean;
  closedForStaking: boolean;
  onlyVault?: boolean;
}

export interface Bank extends BankInfo {
  address: string;
  depositToken: ERC20;
  earnToken: ERC20;
}

export interface ExtinctionRewardToken {
  name: string;
  injectedAmount?: number;
}

export interface ExtinctionPoolInfo {
  name: string;
  depositTokenName: string;
  contract: ContractName;
  active?: boolean;
  rewardTokens?: ExtinctionRewardToken[];
  rewardPerBlock?: number;
  startBlock?: number;
  endBlock?: number;
  lockBlock?: number;
}

export type PoolStats = {
  dailyAPR: string;
  yearlyAPR: string;
  TVL: string;
  userDailyBurst?: string;
  userYearlyBurst?: string;
};

export type TokenStat = {
  tokenInFtm: string;
  priceInDollars: string;
  totalSupply: string;
  circulatingSupply: string;
};

export type LPStat = {
  tokenAmount: string;
  ftmAmount: string;
  priceOfOne: string;
  totalLiquidity: string;
  totalSupply: string;
};

export type AllocationTime = {
  from: Date;
  to: Date;
};

export type BShareSwapperStat = {
  bshareBalance: string;
  bbondBalance: string;
  // bombPrice: string;
  // bsharePrice: string;
  rateBSharePerBomb: string;
};

export type PoolTimes = number[];
