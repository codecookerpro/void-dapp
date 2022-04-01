import { useState, useCallback, useEffect } from 'react'

import ConnectButton from "../ConnectButton";
import ClaimButton from "../ClaimButton";
import MyWallet from './MyWallet';
import Nft from './Nft';
import MyGoals from './MyGoals';

const RNavBar = () => {

  const claim = () => {
    console.log("claim click")
  }

  const [active, setActive] = useState(false)
  const [balance, setBalance] = useState<String | undefined>(undefined)

  const handleBalanceChange = useCallback((bal: string | undefined) => {
    setBalance(bal)
  }, [])

  useEffect(() => {
    console.log("balance", balance);
    setBalance(balance);
  }, [balance])

  return (
    <div className="h-[1280px] ml-[28px] w-[400px] overflow-hidden">
      <div className="flex  h-full min-w-[400px]">
        <div className="flex flex-row h-full bg-white w-full -mb-[43px]">
          <img className="object-cover w-[1px] h-full" src="/img/linie-2@1x.png" />
          <div className="flex flex-col mt-[90px] ml-[31px] items-start min-h-[648px] w-[338px]">
            <div className="flex items-start w-[338px]">
              <div className="-mt-[40px] w-[219px] h-[58px]" >
                <ConnectButton actionText="Connect Wallet" onBalanceChange={() => handleBalanceChange} />
              </div>
              <div className="-mt-[40px] ml-[11px] w-[108px] h-[58px]">
                <ClaimButton actionText="Claim" onClaim={() => claim()} />
              </div>
            </div>
            <MyWallet balance = {balance}/>
            <Nft />
            <div className="flex flex-col -ml-[70px] mt-[30px] w-[488px] h-[263px] bg-[url('/img/pfad-6@1x.png')] bg-cover">
              <div className="ml-[85px] font-poppins font-semibold text-x04051a text-xxxl">Total Rewards in $DAI</div>
              <div className='flex flex-row items-center w-full mt-[60px]'>
                <div className="ml-[85px] font-bold font-avenirnext-demibold text-x04051a text-xxxl">$2400</div>
                <div className="ml-[135px] font-avenirnext-medium font-semibold text-x04051a text-fsl">BALANCE</div>
              </div>
            </div>
            <MyGoals />
          </div>
        </div>
      </div>
    </div>
  )

}


export default RNavBar
