import { useState, useCallback, useEffect } from 'react'
import voidContract from "../Web3/voidContract";
import web3 from "../Web3";
import { AbiItem } from 'web3-utils'
import { DIVIDEN_ABI, CHAIN_ID } from "../../config";

import TransactionHistory from './TransactionHistory'
import Statistic from './Statistic'
import Reward from './Reward'
import { readAddress } from '../../utils/web3Utils';

const data = {
  title: "Dashboard",
}

const DashBoard = () => {
  const [totalDistributed, setTotalDistributed] = useState<String | undefined>(undefined)

  const init = async () => {
    const dividenDistributor = await voidContract.methods.distributorAddress.call().call();
    const dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);
    const totalRewardDistributend = await dividenContract.methods.totalDistributed.call().call();

    const account = await readAddress();
    const claimableReward = await dividenContract.methods.getUnpaidEarnings(account).call();
    console.log("claimableReward", claimableReward);
    console.log("totalRewardDistributend", totalRewardDistributend);
  }


  useEffect(()=> {
    init();
  },[]);

  return (
    <div className="items-start flex flex-col ml-[28px] mt-[73.5px] min-h-[1161px] grow">
      <div className="whitespace-nowrap tracking-normal ml-[17.5px] min-h-[47px] font-poppins font-medium text-x04051a text-xxxxxl">{data.title}</div>
      <Reward/>
      <Statistic/>
      <TransactionHistory />
    </div>
  );
}

export default DashBoard;