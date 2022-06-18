import React, { useState } from 'react';
import styled from 'styled-components';

const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 396px;
  background: #feffeb;
  flex: none;
  order: 9;
  align-self: stretch;
  flex-grow: 0;
`;

const UserRewards = () => {
  return (
    <RewardsContainer>
      <div>Your Rewards</div>
    </RewardsContainer>
  );
};

export default UserRewards;
