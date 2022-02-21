import React from 'react';
import styled from 'styled-components';

interface CardIconProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const CardIcon: React.FC<CardIconProps> = ({children, backgroundColor, className}) => (
  <StyledCardIcon className={className} backgroundColor={backgroundColor}>
    {children}
  </StyledCardIcon>
);

const StyledCardIcon = styled.div<CardIconProps>`
  background-color: ${(props) => props?.backgroundColor || '#363746'};
  font-size: 36px;
  height: 95px;
  width: 95px;
  border-radius: 95px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto ${(props) => props.theme.spacing[3]}px;
`;

export default CardIcon;
