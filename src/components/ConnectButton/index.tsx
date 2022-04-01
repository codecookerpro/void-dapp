import React, { useEffect, useState } from "react";
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { CHAIN_ID } from "../../config";
import { formatWalletAddress } from "../../utils"

interface ButtonProps {
  actionText: string,
  onBalanceChange: (bal: string | undefined) => void,
}

const isBrowser = () => typeof window !== "undefined"

function isMetaMaskInstalled() {
  if (isBrowser())
    return Boolean(window.ethereum);
  return false;
}

async function readAddress() {
  const method = "eth_requestAccounts";

  const accounts = await window.ethereum.request<string[]>({
    method
  });

  return accounts[0];
}


const ConnectButton = ({ actionText, onBalanceChange }: ButtonProps) => {
  const [address, setAddress] = useState<string | undefined>(undefined);

  const connectWallet = async () => {
    if (address) {
      console.log('Already connected');
      return;
    }
    try {
      // await changeNetwork(CHAIN_ID);
      const selectedAddress = await readAddress();
      setAddress(selectedAddress);
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
      console.log("value", value);
      console.log("bal", bal);
      onBalanceChange(bal);
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
    console.log('init hook');
    if (!isMetaMaskInstalled()) {
      console.log('Please install metamask first');
      return;
    }
    // set current address
    setTimeout(() => setAddress(window.ethereum?.selectedAddress), 100);

    const listenerAccountsChanged = ([selectedAddress]: string[]) => {
      setAddress(selectedAddress);
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
