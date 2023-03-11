import React, { useCallback } from 'react';
import Page from '../../components/Page';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { StepIconProps } from '@material-ui/core/StepIcon';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useBombFinance from '../../hooks/useBombFinance';
import IconButton from '../../components/IconButton';
import TokenSymbol from '../../components/TokenSymbol';
import useApprove, { ApprovalState } from '../../hooks/useApprove';
import useModal from '../../hooks/useModal';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';
import { BigNumber } from 'ethers';
import { useTransactionAdder } from '../../state/transactions/hooks';
import ERC20 from '../../bomb-finance/ERC20';

const TITLE = 'ames.defi | Migrator';

const useColorlibStepIconStyles = makeStyles({
  root: {
    marginLeft: '-14px',
    marginRight: '8px',
    backgroundColor: '#ccc',
    zIndex: 1,
    color: 'black',
    fontWeight: 'bold',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#F9DC64',
  },
});

const useLabelStyles = makeStyles({
  label: {
    fontSize: '18px',
    lineHeight: '28px',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  active: {
    fontWeight: 'bolder',
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active } = props;

  const icons: { [index: string]: number } = {
    1: 1,
    2: 2,
    3: 3,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
`;

const LPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7d5;
  padding: 20px 16px;
  border-radius: 8px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.span`
  display: flex;
  margin: 12px;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
    padding: 0 12px;
  }
`;
const Amount = styled.span`
  margin-top: 8px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: right;
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: black;

  &:active,
  &:focus {
    color: black;
  }
`;

const Migrator = () => {
  const { path } = useRouteMatch();
  const bombFinance = useBombFinance();
  const amesBUSD = bombFinance.externalTokens['AMES-BUSD-LP'];
  const ashareBUSD = bombFinance.externalTokens['ASHARE-BUSD-LP'];
  const lp1Balance = useTokenBalance(amesBUSD);
  const lp2Balance = useTokenBalance(ashareBUSD);
  const [approveStatus, approve] = useApprove(amesBUSD, '0xac2c411Fb75555c8cAeD54B40c9B2Ded257C55D2');
  const [approveStatusShare, approveShare] = useApprove(ashareBUSD, '0xac2c411Fb75555c8cAeD54B40c9B2Ded257C55D2');
  const labelClasses = useLabelStyles();
  const addTransaction = useTransactionAdder();

  const handleSwapShare = useCallback(
    async (amount: BigNumber, type: number) => {
      const tx = await bombFinance.migrate(amount, type);
      addTransaction(tx, {
        summary: `Migrated LPs successfully`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleMigrateLp1 = () => {
    handleSwapShare(lp1Balance, 0);
  };
  const handleMigrateLp2 = () => {
    handleSwapShare(lp2Balance, 1);
  };

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <>
          <Route exact path={path}>
            <Box mb={6}>
              <Typography
                style={{ textTransform: 'none', fontWeight: 'bold' }}
                color="textPrimary"
                align="center"
                variant="h3"
                gutterBottom
              >
                Migrator
              </Typography>
              <Typography
                style={{ textTransform: 'none', maxWidth: '900px', margin: '24px auto' }}
                color="textPrimary"
                align="center"
                variant="h6"
                gutterBottom
              >
                Easily migrate your liquidity from Pancakeswap to Aequinox
              </Typography>
              <Typography
                style={{ textTransform: 'none', maxWidth: '900px', margin: '24px auto' }}
                color="textPrimary"
                align="center"
                gutterBottom
              >
                Having the Ames.Defi farms in our native LPs will grow protocol-owned liquidity over time with the
                trading fees accrued, instead of having to give them to Pancakeswap. It is also a step towards the
                direction of making this ecosystem truly ours - we built the foundation, but you folks made the
                monument.
              </Typography>
            </Box>
            <Box>
              <Card style={{ padding: '16px', maxWidth: '730px', margin: '0 auto' }}>
                <CardContent>
                  <Stepper orientation="vertical">
                    <Step active>
                      <StepLabel classes={labelClasses} StepIconComponent={ColorlibStepIcon}>
                        <strong>Remove LP from Farms or Vaults</strong>
                      </StepLabel>
                      <StepContent>
                        <StepWrapper>
                          <Typography color="textPrimary" align="left" gutterBottom>
                            Go to <StyledLink to="/farm">Farms</StyledLink> or{' '}
                            <StyledLink to={{ pathname: `https://quartz-tools-ui.vercel.app/vaults` }} target="_blank">
                              Vaults
                            </StyledLink>{' '}
                            and widthdraw the LPs you want to migrate.
                          </Typography>
                        </StepWrapper>
                      </StepContent>
                    </Step>
                    <Step active>
                      <StepLabel classes={labelClasses} StepIconComponent={ColorlibStepIcon}>
                        <strong>Migrate liquidity</strong>
                      </StepLabel>
                      <StepContent>
                        <StepWrapper>
                          <Typography color="textPrimary" align="left" gutterBottom style={{ marginBottom: '16px' }}>
                            Convert your CAKE-LP into Aequinox-APT with our migrator. Ensure that your CAKE-LP is in
                            your wallet, approve the migrator and click migrate. Total txns needed to approve: 2.
                          </Typography>
                          <Typography
                            color="textPrimary"
                            align="left"
                            gutterBottom
                            style={{ marginBottom: '16px', fontWeight: 'bold' }}
                          >
                            ATTENTION: Migrating large amounts of ASHARE-BUSD LPs will incur high price impact. Try
                            moving smaller amounts at a time in order to reduce the risk of this.
                          </Typography>

                          <LPWrapper>
                            <TokenSymbol symbol="AMES-BUSD-LP" />
                            <Content>
                              <span>
                                <strong>AMES-BUSD-LP</strong>
                              </span>
                              <Amount>{getDisplayBalance(lp1Balance, 18)}</Amount>
                            </Content>
                            {approveStatus !== ApprovalState.APPROVED ? (
                              <Button
                                disabled={
                                  approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN
                                }
                                onClick={approve}
                                className={
                                  approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN
                                    ? 'shinyButtonDisabled'
                                    : 'shinyButton'
                                }
                              >
                                {`Approve`}
                              </Button>
                            ) : (
                              <Button className="shinyButton" onClick={handleMigrateLp1}>
                                Migrate
                              </Button>
                            )}
                          </LPWrapper>

                          <LPWrapper>
                            <TokenSymbol symbol="ASHARE-BUSD-LP" />
                            <Content>
                              <span>
                                <strong>ASHARE-BUSD-LP</strong>
                              </span>
                              <Amount>{getDisplayBalance(lp2Balance, 18)}</Amount>
                            </Content>
                            {approveStatusShare !== ApprovalState.APPROVED ? (
                              <Button
                                disabled={
                                  approveStatusShare === ApprovalState.PENDING ||
                                  approveStatusShare === ApprovalState.UNKNOWN
                                }
                                onClick={approveShare}
                                className={
                                  approveStatusShare === ApprovalState.PENDING ||
                                  approveStatusShare === ApprovalState.UNKNOWN
                                    ? 'shinyButtonDisabled'
                                    : 'shinyButton'
                                }
                              >
                                {`Approve`}
                              </Button>
                            ) : (
                              <Button className="shinyButton" onClick={handleMigrateLp2}>
                                Migrate
                              </Button>
                            )}
                          </LPWrapper>
                        </StepWrapper>
                      </StepContent>
                    </Step>
                    <Step active>
                      <StepLabel classes={labelClasses} StepIconComponent={ColorlibStepIcon}>
                        <strong>STAKE AEQUINOX-APT ON AEQUINOX</strong>
                      </StepLabel>
                      <StepContent>
                        <StepWrapper>
                          <Typography color="textPrimary" gutterBottom>
                            Go to the Aequinox pool page for the corresponding APTs and stake to earn AEQ emissions.
                          </Typography>
                          <Typography color="textPrimary" align="left" gutterBottom style={{ marginBottom: '16px' }}>
                            ASHARE emissions will be dedicated to the appropriate pools on
                            <u> Thursday, 22nd September, 00:00 UTC (start of the new epoch).</u> The Ames.Defi farms
                            from then on will no longer yield ASHARE. Only the Single Stake AMES and the Peg Campaign
                            Pool will continue to emit ASHARE as rewards.
                          </Typography>
                          <Typography color="textPrimary" gutterBottom>
                            <a
                              href="https://www.aequinox.exchange/#/pool/0x9aa867870d5775a3c155325db0cb0b116bbf4b6a000200000000000000000002"
                              target="__blank"
                              style={{
                                margin: '0px 10px',
                              }}
                            >
                              AMES-BUSD pool
                            </a>
                            <a
                              href=" https://www.aequinox.exchange/#/pool/0x74154c70f113c2b603aa49899371d05eeedd1e8c000200000000000000000003"
                              target="__blank"
                            >
                              ASHARE-BUSD pool
                            </a>
                          </Typography>
                        </StepWrapper>
                      </StepContent>
                    </Step>
                  </Stepper>
                </CardContent>
              </Card>
            </Box>
          </Route>
        </>
      </Page>
    </Switch>
  );
};

export default Migrator;
