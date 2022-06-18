import React, { useState } from 'react';
import styled from 'styled-components';
import diamondIcon from '../../../assets/img/Diamond.png';

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 460px;
  background: #feffeb;
  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
`;

const LotteryPrize = () => {
  return (
    <PrizeContainer>
      <div>
        {' '}
        <img src={diamondIcon} alt="" /> Lottery Prize
      </div>
    </PrizeContainer>
  );
};

export default LotteryPrize;
