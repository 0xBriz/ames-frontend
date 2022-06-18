import React, { useState } from 'react';
import styled from 'styled-components';

const WinningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 226px;
  background: #feffeb;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`;

const UserWinnings = () => {
  return (
    <WinningsContainer>
      <div>Your Winnings</div>
    </WinningsContainer>
  );
};

export default UserWinnings;
