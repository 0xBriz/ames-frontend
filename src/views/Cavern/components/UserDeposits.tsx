import React, { useState } from 'react';
import styled from 'styled-components';

const DepositsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 512px;
  background: #feffeb;
  flex: none;
  order: 8;
  align-self: stretch;
  flex-grow: 0;
`;

const UserDeposits = () => {
  return (
    <DepositsContainer>
      <div>Your Deposits</div>
    </DepositsContainer>
  );
};

export default UserDeposits;
