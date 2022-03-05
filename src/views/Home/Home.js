import React, { useMemo } from 'react';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import styled from 'styled-components';
import Page from '../../components/Page';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { device } from '../../newTheme';
import useBombFinance from '../../hooks/useBombFinance';

const TITLE = 'quartz.defi | UST pegged algocoin';

const MarketCap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-bottom: 32px;
`;

const SplitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledText = styled(Typography)`
  text-transform: none;
  text-align: center;
  max-width: 80%;
  font-weight: bold !important;
  margin: 0 auto !important;

  @media ${device.tablet} {
    max-width: 70%;
  }

  @media ${device.laptop} {
    max-width: 60%;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 16px 16px;
`;

const BuyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Charts = styled.div`
  padding: 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  color: black;

  > a {
    display: block;
    color: black;
  }
`

const Home = () => {
  const bombFinance = useBombFinance();
  const TVL = useTotalValueLocked();
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();

  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  return (
    <Page>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Grid style={{ marginBottom: '50px', paddingTop: '50px' }} container spacing={3}>
        <Grid style={{ marginBottom: '40px' }} item xs={12}>
          <StyledText variant="h3" color="textPrimary">
            Farm ASHARE and earn rewards in our algorithmic stablecoin ecosystem.
          </StyledText>
        </Grid>
        {/* TVL */}
        <Grid style={{
          marginBottom: '40px'
        }} item xs={12}>
          <Typography
            variant="h5"
            style={{
              textAlign: 'center',
              fontSize: '18px',
              marginBottom: '4px',
              textTransform: 'none',
              fontWeigth: 800,
            }}
            color="textPrimary"
          >
            Total Value Locked
          </Typography>
          <Typography
            variant="h3"
            style={{ textAlign: 'center', fontSize: '48px', textTransform: 'none', fontWeight: 'bold' }}
            color="textPrimary"
          >
            <CountUp end={TVL} separator="," prefix="$" />
          </Typography>
        </Grid>

        {/* BOMB */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Box mt={2}>
                <CardIcon backgroundColor="#F9DC64">
                  <TokenSymbol size={72} symbol="AMES" />
                </CardIcon>
              </Box>
              <Charts style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <a href="https://dexscreener.com/bsc/0x6f78a0d31adc7c9fb848850f9d2a40da5858ad03" target="_blank">
                  <AssessmentOutlinedIcon color='inherit' />
                </a>
              </Charts>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('AMES');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>AMES</p>
              <Box mb={1}>
                <span style={{ fontWeight: 'bold', fontSize: '40px', alignContent: 'flex-start' }}>
                  ${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}
                </span>
              </Box>
              <Box mb={3}>
                <span style={{ fontSize: '16px' }}>
                  1 AMES (1.0 Peg) ={bombPriceInBNB ? bombPriceInBNB : '-.----'} UST
                </span>
              </Box>
              <MarketCap>
                <SplitContent>
                  <Typography>Market Cap:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    ${roundAndFormatNumber(bombCirculatingSupply * bombPriceInDollars, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Circulating Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    {roundAndFormatNumber(bombCirculatingSupply, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Total Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>{roundAndFormatNumber(bombTotalSupply, 2)}</Typography>
                </SplitContent>
              </MarketCap>
              <BuyWrapper>
                <StyledLink className="shinyButton" href="https://pancakeswap.finance/swap?inputCurrency=0x23396cF899Ca06c4472205fC903bDB4de249D6fC&outputCurrency=0xb9E05B4C168B56F73940980aE6EF366354357009" target="_blank">
                  Buy AMES
                </StyledLink>
              </BuyWrapper>
            </CardContent>
          </Card>
        </Grid>

        {/* BSHARE */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Charts style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <a href="https://dexscreener.com/bsc/0x39846550ef3cb8d06e3cff52845df42f71ac3851" target="_blank">
                  <AssessmentOutlinedIcon color='inherit' />
                </a>
              </Charts>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('ASHARE');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon backgroundColor="#FF9999">
                  <TokenSymbol size={72} symbol="ASHARE" />
                </CardIcon>
              </Box>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>ASHARE</p>
              <Box mb={1}>
                <span style={{ fontWeight: 'bold', fontSize: '40px', alignContent: 'flex-start' }}>
                  ${bSharePriceInDollars ? roundAndFormatNumber(bSharePriceInDollars, 2) : '-.--'}
                </span>
              </Box>
              <Box mb={3}>
                <span style={{ fontSize: '16px' }}>1 ASHARE ={bSharePriceInBNB ? bSharePriceInBNB : '-.----'} UST</span>
              </Box>
              <MarketCap>
                <SplitContent>
                  <Typography>Market Cap:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    ${roundAndFormatNumber(bShareCirculatingSupply * bSharePriceInDollars, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Circulating Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    {roundAndFormatNumber(bShareCirculatingSupply, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Total Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>{roundAndFormatNumber(bShareTotalSupply, 2)}</Typography>
                </SplitContent>
              </MarketCap>
              <BuyWrapper>
                <StyledLink className="shinyButton" href="https://pancakeswap.finance/swap?inputCurrency=0x23396cF899Ca06c4472205fC903bDB4de249D6fC&outputCurrency=0xFa4b16b0f63F5A6D0651592620D585D308F749A4" target="_blank">
                  Buy ASHARE
                </StyledLink>
              </BuyWrapper>
            </CardContent>
          </Card>
        </Grid>

        {/* BBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('ABOND');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon backgroundColor="#AC99FF">
                  <TokenSymbol size={72} symbol="ABOND" />
                </CardIcon>
              </Box>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>ABOND</p>
              <Box mb={1}>
                <span style={{ fontWeight: 'bold', fontSize: '40px', alignContent: 'flex-start' }}>
                  ${tBondPriceInDollars ? roundAndFormatNumber(tBondPriceInDollars, 2) : '-.--'}
                </span>
              </Box>
              <Box mb={3}>
                <span style={{ fontSize: '16px' }}>1 ABOND ={tBondPriceInBNB ? tBondPriceInBNB : '-.----'} UST</span>
              </Box>
              <MarketCap>
                <SplitContent>
                  <Typography>Market Cap:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    ${roundAndFormatNumber(tBondCirculatingSupply * tBondPriceInDollars, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Circulating Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    {roundAndFormatNumber(tBondCirculatingSupply, 2)}
                  </Typography>
                </SplitContent>
                <SplitContent>
                  <Typography>Total Supply:</Typography>
                  <Typography style={{ fontWeight: 'bold' }}>{roundAndFormatNumber(tBondTotalSupply, 2)}</Typography>
                </SplitContent>
              </MarketCap>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Box>
        <TreasuryBalance />
      </Box> */}
    </Page>
  );
};

export default Home;
