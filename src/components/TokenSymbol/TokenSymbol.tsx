import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/quartz2.svg';
import ames from '../../assets/img/ames.svg';
import ashare from '../../assets/img/ashare.svg';
import abond from '../../assets/img/abond.svg';
import xquartzLogo from '../../assets/img/xquartz-token-1600-round.png';
import tShareLogo from '../../assets/img/qshare3.svg';
import bombLogoPNG from '../../assets/img/bomb.png';
import tShareLogoPNG from '../../assets/img/bshares.png';
import tBondLogo from '../../assets/img/qbond2.svg';

import bombFtmLpLogo from '../../assets/img/bomb-bitcoin-LP.png';
import bshareFtmLpLogo from '../../assets/img/bshare-bnb-LP.png';
import qShareOne from '../../assets/img/qshare-one.svg';
import quartzUst from '../../assets/img/quartz-ust.svg';
import quartzQshare from '../../assets/img/quartzQshare.svg';
import amesUST from '../../assets/img/ames-ust.svg';
import shareUST from '../../assets/img/share-ust.svg';
import hshareUST from '../../assets/img/1share-ust.svg';

import bnbLogo from '../../assets/img/bnb.png';
import btcLogo from '../../assets/img/BCTB-icon.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  QUARTZ: bombLogo,
  AMES: ames,
  AMETHYST: ames,
  XQUARTZ: xquartzLogo,
  XBOMB: bombLogo,
  BOMBPNG: bombLogoPNG,
  BSHAREPNG: tShareLogoPNG,
  BSHARE: tShareLogo,
  ASHARE: ashare,
  QSHARE: tShareLogo,
  BBOND: tBondLogo,
  QBOND: tBondLogo,
  ABOND: abond,
  WONE: bnbLogo,
  BOO: bnbLogo,
  SHIBA: bnbLogo,
  ZOO: bnbLogo,
  CAKE: bnbLogo,
  SUSD: bnbLogo,
  SBTC: btcLogo,
  BTCB: btcLogo,
  BTC: btcLogo,
  SVL: bnbLogo,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'QUARTZ-WONE-LP': bombFtmLpLogo,
  'QUARTZ-UST-LP': quartzUst,
  'AMES-UST-LP': amesUST,
  'QUARTZ-QSHARE-LP': quartzQshare,
  '1QUARTZ-1QSHARE-LP': quartzQshare,
  '1QUARTZ-UST-LP': quartzQshare,
  '1QSHARE-UST-LP': hshareUST,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
  'QSHARE-ONE-LP': qShareOne,
  'QSHARE-UST-LP': qShareOne,
  'ASHARE-UST-LP': shareUST,
  'BSHARE-BNB-APELP': bshareFtmLpLogo,
  'BOMB-BTCB-APELP': bombFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
