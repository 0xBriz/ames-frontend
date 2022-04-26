import React from 'react';
import styled from 'styled-components';

import { Card } from '@material-ui/core';

interface ExchangeStatProps {
  tokenName: string;
  description: string;
  price: string;
}

const ExchangeStat: React.FC<ExchangeStatProps> = ({ tokenName, description, price }) => {
  return (
    <Wrapper>
      <StyledCardTitle>{`${tokenName} = ${price} UST`}</StyledCardTitle>
      <StyledDesc>{description}</StyledDesc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  text-align: center;
  padding: 12px 8px;
  color: black;
  background-color: #feffeb;
  border-radius: 8px;
`;

const StyledCardTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledDesc = styled.span`
  text-align: center;
`;

export default ExchangeStat;
