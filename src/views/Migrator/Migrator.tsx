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
  const [approveStatus, approve] = useApprove(amesBUSD, '0x4e53cd5197C9BBd5E06C2CDcFeD9612d7DDC8BDc');
  const [approveStatusShare, approveShare] = useApprove(ashareBUSD, '0x4e53cd5197C9BBd5E06C2CDcFeD9612d7DDC8BDc');
  const labelClasses = useLabelStyles();
  const addTransaction = useTransactionAdder();

  const handleSwapShare = useCallback(
    async (amount: BigNumber, isShare: boolean, contract: ERC20) => {
      const tx = await bombFinance.migrate(amount, isShare, contract);
      addTransaction(tx, {
        summary: `Migrated LPs successfully`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleMigrateLp1 = () => {
    handleSwapShare(lp1Balance, false, amesBUSD);
  };
  const handleMigrateLp2 = () => {
    handleSwapShare(lp2Balance, true, ashareBUSD);
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
                Easily migrate your liquidity from Pancakeswap to Aaltoswap
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
                            <StyledLink to={{ pathname: `https://ames-defi.tools/vaults` }} target="_blank">
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
                            Convert your CAKE-LP into AALTO-LP with our migrator. Ensure that your CAKE-LP is in your
                            wallet, approve the migrator and click migrate. Total txns needed to approve: 2
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
                        <strong>Deposit LP into a farm or vault</strong>
                      </StepLabel>
                      <StepContent>
                        <StepWrapper>
                          <Typography color="textPrimary" align="left" gutterBottom>
                            Go to <StyledLink to="/farm">Farms</StyledLink> or{' '}
                            <StyledLink to={{ pathname: `https://ames-defi.tools/vaults` }} target="_blank">
                              Vaults
                            </StyledLink>{' '}
                            and deposit the newly created LPs.
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
