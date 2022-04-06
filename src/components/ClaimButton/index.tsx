import React, { useEffect, useState } from "react";
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { AbiItem } from 'web3-utils'
import { DIVIDEN_ABI, CHAIN_ID } from "../../config";
import { formatWalletAddress, readAddress } from "../../utils"

interface ButtonProps {
  actionText: string,
  onClaim: (bal: string | undefined) => void,
}

const ClaimButton = ({ actionText, onClaim }: ButtonProps) => {

  const claim = async () => {
    try {
      const selectedAddress = await readAddress();
      claimDividend(selectedAddress);
    } catch (e: any) {
      console.log(e);
    }
  }

  const claimDividend = async (account: string ) => {
    if (window.ethereum.chainId !== CHAIN_ID) {
      onClaim(undefined);
      return;
    }
    try {
      const dividenDistributor = await voidContract.methods.distributorAddress.call().call();
      const dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);
      const claimed = await dividenContract.methods.claimDividend().send({from: account});
      console.log("claimed", claimed);
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <div className='flex whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full'>
      <button className='flex-1 whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full' onClick={claim}>
        {actionText}
      </button>
    </div>
  );
};

export default ClaimButton;
