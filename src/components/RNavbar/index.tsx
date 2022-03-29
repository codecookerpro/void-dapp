import Button from "../Button";
import MyWallet from './MyWallet';
import Nft from './Nft';
import MyGoals from './MyGoals';

const RNavBar = () => {
  const connectWallet = () => {
    console.log("connect wallet clicked");
  }

  const claim = () => {
    console.log("claim click")
  }
  return (
    <div className="relative h-[1280px] ml-[28px] w-[400px]">
      <div className="flex items-end h-full absolute left-0 top-0 min-w-[400px]">
        <div className="h-full bg-white w-full -mb-[43px]"></div>
      </div>
      <div className="flex flex-col absolute top-[46px] left-[31px] items-start min-h-[648px] w-[338px]">
        <div className="flex items-start w-[338px]">
          <div className="relative w-[219px] h-[58px]" >
            <Button actionText="Connect Wallet" onClick={() => connectWallet()} />
          </div>
          <div className="relative ml-[11px] w-[108px] h-[58px]">
            <Button actionText="Claim" onClick={() => claim() }/>
          </div>
        </div>
        <MyWallet />
        <Nft />
      </div>
      <MyGoals />
      {/* <img className="absolute left-0 top-0 object-cover w-[1px] h-[1280px]" src="/img/linie-2@1x.png" /> */}
      <img className="absolute left-0 top-0 object-cover w-[1px] h-[1340px]" src="/img/linie-2@1x.png" />
      <div className="absolute -left-[34px] top-[724px] w-[488px] h-[263px]">
        <div className="absolute left-[79px] top-[6px] whitespace-nowrap tracking-normal font-poppins font-semibold text-x04051a text-xxxl">Total Rewards in $DAI</div>
        <img className="absolute left-0 top-0 object-cover w-full h-full" src="/img/pfad-6@1x.png" />
        <div className="whitespace-nowrap absolute left-[85px] top-[96px] tracking-normal font-bold font-avenirnext-demibold text-x04051a text-xxxl">$2400</div>
        <div className="absolute left-[290px] top-[102px] tracking-normal whitespace-nowrap font-avenirnext-medium font-semibold text-x04051a text-fsl">BALANCE</div>
      </div>
    </div>
  )
}

export default RNavBar
