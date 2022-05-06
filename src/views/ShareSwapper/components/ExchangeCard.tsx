import React from 'react';
import styled from 'styled-components';

import { Button, Card } from '@material-ui/core';

// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import useBombFinance from '../../../hooks/useBombFinance';
import Label from '../../../components/Label';
import TokenSymbol from '../../../components/TokenSymbol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../../hooks/useModal';
import ExchangeModal from './ExchangeModal';
import ERC20 from '../../../bomb-finance/ERC20';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useCatchError from '../../../hooks/useCatchError';
import CardIcon from '../../../components/CardIcon';

interface ExchangeCardProps {
  action: string;
  fromToken: ERC20;
  fromTokenName: string;
  toToken: ERC20;
  toTokenName: string;
  priceDesc?: string;
  onExchange: (amount: string) => void;
  disabled?: boolean;
  disabledDescription?: string;
  aaltoLeft: number;
}

const ExchangeCard: React.FC<ExchangeCardProps> = ({
  action,
  fromToken,
  fromTokenName,
  toToken,
  toTokenName,
  onExchange,
  disabled = false,
  disabledDescription,
  aaltoLeft,
}) => {
  const catchError = useCatchError();
  const {
    contracts: { ShareSwap },
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(fromToken, ShareSwap.address);

  const balance = useTokenBalance(fromToken);
  const [onPresent, onDismiss] = useModal(
    <ExchangeModal
      title={action}
      description={'You will receive Aalto at a rate of 1:2'}
      max={balance}
      onConfirm={(value) => {
        onExchange(value);
        onDismiss();
      }}
      action={action}
      tokenName={fromTokenName}
    />,
  );

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardTitle>{`${action} ASHARE for ${toTokenName}`}</StyledCardTitle>
          <StyledCardTitle style={{ fontWeight: 'normal' }}>{`${aaltoLeft} AALTO available for swap`}</StyledCardTitle>
          <StyledExchanger>
            <StyledToken>
              <StyledCardIcon backgroundColor={fromToken.symbol === 'ABOND' ? '#F9DC64' : '#F9DC64'}>
                <TokenSymbol symbol={fromToken.symbol} size={72} />
              </StyledCardIcon>
              <Label text={fromTokenName} color="primary" />
            </StyledToken>
            <StyledExchangeArrow>
              <FontAwesomeIcon icon={faArrowRight} />
            </StyledExchangeArrow>
            <StyledToken>
              <StyledCardIcon backgroundColor={toToken.symbol === 'ABOND' ? '#F9DC64' : '#F9DC64'}>
                <TokenSymbol symbol={toToken.symbol} size={72} />
              </StyledCardIcon>
              <Label text={toTokenName} color="primary" />
            </StyledToken>
          </StyledExchanger>
          <StyledCardActions>
            {approveStatus !== ApprovalState.APPROVED && !disabled ? (
              <Button
                className="shinyButton"
                disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN}
                onClick={() => catchError(approve(), `Unable to approve ${fromTokenName}`)}
              >
                {`Approve ${fromTokenName}`}
              </Button>
            ) : (
              <Button
                className={disabled ? 'shinyButtonDisabled' : 'shinyButton'}
                onClick={onPresent}
                disabled={disabled}
              >
                {disabled ? disabledDescription : action}
              </Button>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardTitle = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  height: 64px;
  justify-content: center;
  color: black;
  margin-bottom: 16px;
  margin-top: ${(props) => -props.theme.spacing[3]}px;
`;

const StyledCardIcon = styled(CardIcon)`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledExchanger = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[5]}px;
`;

const StyledExchangeArrow = styled.div`
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledToken = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[3]}px;
  width: 100%;
`;

const StyledDesc = styled.span``;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default ExchangeCard;
