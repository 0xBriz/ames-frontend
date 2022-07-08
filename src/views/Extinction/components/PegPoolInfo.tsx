import React from 'react';
import { Box, Button, Grid, Card, CardContent } from '@material-ui/core';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import usePegPoolDeposit from '../../../hooks/usePegPoolDeposit';
import { PegPool, PegPoolToken } from '../../../bomb-finance/types';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useBombFinance from '../../../hooks/useBombFinance';
import PegPoolRewards from './PegPoolRewards';

const PegPoolInfo: React.FC<{ pegPool: PegPool; rewardTokens: PegPoolToken[] }> = ({ pegPool, rewardTokens }) => {
  const tokenBalance = useTokenBalance(pegPool.depositToken);
  const { onDeposit } = usePegPoolDeposit(pegPool);
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(pegPool.depositToken, bombFinance.contracts.PegPool.address);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={pegPool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onDeposit(amount);
        onDismissDeposit();
      }}
      tokenName={pegPool.depositTokenName}
    />,
  );

  return (
    <Grid container justifyContent="space-evenly">
      <Grid item>
        <Card variant="outlined">
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
                {approveStatus !== ApprovalState.APPROVED ? (
                  <Button
                    fullWidth={true}
                    disabled={
                      !pegPool.depositsEnabled ||
                      approveStatus === ApprovalState.PENDING ||
                      approveStatus === ApprovalState.UNKNOWN
                    }
                    onClick={approve}
                    className={
                      approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN
                        ? 'shinyButtonDisabled'
                        : 'shinyButton'
                    }
                    style={{ marginTop: '20px' }}
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pegPool.depositsEnabled}
                    onClick={onPresentDeposit}
                    fullWidth={true}
                  >
                    {!pegPool.depositsEnabled ? 'Deposit' : 'Above Peg'}
                  </Button>
                )}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>{rewardTokens && <PegPoolRewards rewardTokens={rewardTokens} />}</Grid>
    </Grid>
  );
};

export default PegPoolInfo;
