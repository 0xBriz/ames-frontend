import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/quartz2.svg';
import ames from '../../assets/img/ames.svg';
import xames from '../../assets/img/xames.svg';
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
import quartzQshare from '../../assets/img/ames-ashare.svg';
import amesUST from '../../assets/img/ames-ust.svg';
import shareUST from '../../assets/img/share-ust.svg';
import hshareUST from '../../assets/img/1share-ust.svg';

import bnbLogo from '../../assets/img/bnb.png';
import btcLogo from '../../assets/img/BCTB-icon.png';
import AaltoLogo from '../../assets/img/aalto.svg';
import ABUSD from '../../assets/img/ames-busd@2x.png';
import ASBUSD from '../../assets/img/ashare-busd@2x.png';
import busdLogo from '../../assets/img/busd.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  GNODE: ames,
  QUARTZ: bombLogo,
  AMES: ames,
  XAMES: xames,
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
  BUSD: busdLogo,
  SVL: bnbLogo,
  AALTO: AaltoLogo,
  '1QSHARE': tShareLogo,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'QUARTZ-WONE-LP': bombFtmLpLogo,
  'QUARTZ-UST-LP': quartzUst,
  'AMES-UST-LP': amesUST,
  'AMES-ASHARE-LP': quartzQshare,
  '1QUARTZ-1QSHARE-LP': quartzQshare,
  '1QUARTZ-UST-LP': quartzQshare,
  '1QSHARE-UST-LP': hshareUST,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
  'QSHARE-ONE-LP': qShareOne,
  'QSHARE-UST-LP': qShareOne,
  'ASHARE-UST-LP': shareUST,
  'BSHARE-BNB-APELP': bshareFtmLpLogo,
  'BOMB-BTCB-APELP': bombFtmLpLogo,
  'AMES-BUSD-LP': ABUSD,
  'ASHARE-BUSD-LP': ASBUSD,
  rASHARE: ashare,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }

  const customSize = ['1QSHARE'].includes(symbol) ? 80 : size;

  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={customSize} />;
};

export default TokenSymbol;
