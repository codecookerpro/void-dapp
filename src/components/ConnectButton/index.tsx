import React, { useEffect, useState } from "react";
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { AbiItem } from 'web3-utils'
import { DIVIDEN_ABI, CHAIN_ID } from "../../config";
import { formatWalletAddress, readAddress, isMetaMaskInstalled } from "../../utils"

import {useAddress} from '../AddressProvider';

interface ButtonProps {
  actionText: string,
  onBalanceChange: (bal: string | undefined) => void,
}

const ConnectButton = ({ actionText, onBalanceChange }: ButtonProps) => {
  // const [address, setAddress] = useState<string | undefined>(undefined);
  const {address, updateAddress} = useAddress();
  const connectWallet = async () => {
    if (address) {
      console.log('Already connected');
      return;
    }
    try {
      // await changeNetwork(CHAIN_ID);
      const selectedAddress = await readAddress();
      updateAddress(selectedAddress);
    } catch (e: any) {
      console.log(e);
    }
  };

  const getBalance = async (account: String | undefined) => {

    if (!account || window.ethereum.chainId !== CHAIN_ID) {
      onBalanceChange(undefined);
      return;
    }
    try {
      const value = await voidContract.methods.balanceOf(account).call();
      const bal = web3.utils.fromWei(value, "ether");
      onBalanceChange(bal);
      const dividenDistributor = await voidContract.methods.distributorAddress.call().call();
      const dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);
      const myclaimableReward = await dividenContract.methods.getUnpaidEarnings(account).call();
      // setClaimableRewrd(myclaimableReward);
      console.log("claimableReward", myclaimableReward);
    } catch (e: any) {
      console.log(e);
    }
  }

  const changeNetwork = async (chainId: string) => {
    return await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainId }],
    });
  }

  useEffect(() => {
    if (!isMetaMaskInstalled()) {
      console.log('Please install metamask first');
      return;
    }
    // set current address
    setTimeout(() => updateAddress(window.ethereum?.selectedAddress as string), 100);

    const listenerAccountsChanged = ([selectedAddress]: string[]) => {
      updateAddress(selectedAddress);
    };
    const listenerChainChanged = (chainId: string) => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', listenerAccountsChanged);
    window.ethereum.on('chainChanged', listenerChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', listenerAccountsChanged);
      window.ethereum.removeListener('chainChanged', listenerChainChanged);
    };

  }, []);

  useEffect(() => {
    console.log('address hook');
    getBalance(address);
  }, [address]);

  return (
    <div className='flex whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full'>
      <button className='flex-1 whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full' onClick={connectWallet}>
        {address ? <span className="whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxl">{formatWalletAddress(address)}</span> : actionText}
      </button>
    </div>
  );
}

export default ConnectButton;
