import React, { useContext } from 'react';
import { AlertCircle, CheckCircle } from 'react-feather';
import styled, { ThemeContext } from 'styled-components';
import { useWallet } from 'use-wallet';
import config from '../../config';

const RowNoFlex = styled.div`
  flex-wrap: nowrap;
`;

export default function TransactionPopup({
  hash,
  success,
  summary,
}: {
  hash: string;
  success?: boolean;
  summary?: string;
}) {
  const { chainId } = useWallet();
  const theme = useContext(ThemeContext);

  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16, marginBottom: '16px' }}>
        {success ? <CheckCircle color="#58d6a6" size={24} /> : <AlertCircle color="#FF6871" size={24} />}
      </div>
      <div>
        <StyledPopupDesc>{summary ?? 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)}</StyledPopupDesc>
        {chainId && (
          <StyledLink target="_blank" href={`${config.ftmscanUrl}/tx/${hash}`}>
            View on BscScan
          </StyledLink>
        )}
      </div>
    </RowNoFlex>
  );
}

const StyledPopupDesc = styled.span`
  font-weight: 500;
  color: black;
  display: block;
  margin-bottom: 8px;
`;

const StyledLink = styled.a`
  display: block;
  color: black;
  margin-bottom: 8px;
`;
