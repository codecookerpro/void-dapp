import React, { useEffect, useState } from "react";
import flareContract from "../Web3/flareContract";
import web3 from "../Web3";
import { CHAIN_ID } from "../../config";

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

// function getSelectedAddress() {
//   return window.ethereum?.selectedAddress;
// }

const ConnectButton: React.FC<{
  onBalanceChange: (bal: string | undefined) => void;
}> = ({ onBalanceChange }) => {

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
      const value = await flareContract.methods.balanceOf(account).call();
      const bal = web3.utils.fromWei(value, "gwei");
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
    <div className="flex-none">
      <button
        className="inline-block ml-auto mr-3 py-2 px-6 text-sm text-white font-bold border-2 border-gray-800 transition duration-200 rounded hover:border-rose-600"
        onClick={connectWallet}
      >
        {
          address ? address.slice(0, 10) + '...' : "Connect Metamask"
        }
      </button>
    </div>
  )
};

export default ConnectButton;