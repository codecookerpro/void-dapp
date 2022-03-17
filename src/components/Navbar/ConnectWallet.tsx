import { useState, useCallback } from 'react';
import ConnectButton from './ConnectButton';

const ConnectWallet = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>();

  const handleAddressChange = useCallback((address: string | undefined) => {
    setSelectedAddress(address);
  }, []);

  return (
    <ConnectButton onChange={handleAddressChange} />
  )
}

export default ConnectWallet;