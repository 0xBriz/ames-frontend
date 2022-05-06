import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import Modal, { ModalProps } from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TokenInput from '../../../components/TokenInput';
import { getFullDisplayBalance } from '../../../utils/formatBalance';
import { BigNumber } from 'ethers';
import Label from '../../../components/Label';

interface ExchangeModalProps extends ModalProps {
  max: BigNumber;
  onConfirm: (amount: string) => void;
  title: string;
  description: string;
  action: string;
  tokenName: string;
}

const ExchangeModal: React.FC<ExchangeModalProps> = ({
  max,
  title,
  description,
  onConfirm,
  onDismiss,
  action,
  tokenName,
}) => {
  const [val, setVal] = useState('');
  const fullBalance = useMemo(() => getFullDisplayBalance(max), [max]);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => setVal(e.currentTarget.value), [setVal]);

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance);
  }, [fullBalance, setVal]);

  return (
    <Modal>
      <ModalTitle text={title} />
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
      <Box mt={2}>
        <Label color="black" text={description} />
      </Box>
      <ModalActions>
        <Button className="shinyButtonSecondary" onClick={onDismiss}>
          Cancel
        </Button>
        <Button className="shinyButtonSecondary" onClick={() => onConfirm(val)}>
          {action}
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default ExchangeModal;
