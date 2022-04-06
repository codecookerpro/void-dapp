import {formatToCurrency} from "../../utils"

interface rewardProps {
    totalReward:String | undefined,
    claimableReward:String | undefined,
    totalDistributed: String | undefined,
}
function Reward(props: rewardProps) {
  console.log(props.totalReward);
  console.log(props.claimableReward);
  console.log(props.totalDistributed);
  return (
    <div className="flex flex-col items-start bg-black-haze rounded-[10px] ml-[0.5px] mt-[18px] min-h-[309px] w-full py-[27.5px] px-4">
      <div className="tracking-normal whitespace-nowrap min-h-[35px] ml-6 font-poppins font-semibold text-x04051a text-xxxl">Reward in DAI</div>
      <div className="bg-white rounded-lg shadow-[10px_24px_50px_#0000000f] h-[75px] w-full">
      </div>
      <div className="flex flex-row -mt-[74px] w-full h-[200px] justify-center space-x-16">
        <div className="flex flex-col items-start ml-[23px] mt-[21px] w-1/3 min-h-[179px]">
          <div className="mt-1 whitespace-nowrap tracking-normal min-h-[32px] font-avenirnext-medium text-x04051a text-xxl font-medium">Claimable Rewards</div>
          <div className="whitespace-nowrap tracking-normal mt-[68px] min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">{formatToCurrency(Number(props.claimableReward))}</div>
          <div className="flex items-center ml-1 mt-[7px] min-w-[204px] h-[22px]">
            <div className="bg-[url('/img/pfad-21@1x.png')] bg-center bg-cover flex items-center h-[13px] mb-[1.11px] -ml-[1px] min-w-[13px] py-0 px-[0.4px]">
              <img className="object-cover h-[12px] w-[12px]" src="/img/pfad-22-2@1x.png" />
            </div>
            <div className="self-end tracking-normal -mb-[5px] ml-[30px] min-h-[24px] min-w-[158px] whitespace-nowrap font-avenirnext-medium text-x04051a text-fsl font-medium">20% From last month</div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[21px] w-1/3 min-h-[179px]  ">
          <div className="whitespace-nowrap tracking-normal mt-1 min-h-[32px] font-avenirnext-medium font-medium text-x04051a text-xxl">My Total Rewards</div>
          <div className="whitespace-nowrap tracking-[0.16px] mt-[68px] min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">$1236</div>
          <div className="flex items-start -ml-[1.41px] mt-2.5 h-[24px] min-w-[189px]">
            <div className="flex flex-col items-start -mt-[33px] min-h-[176px] rotate-90 w-[86px]">
              <div className="w-[13px] -ml-[14px] mt-[110px] h-[13px]">
                <img className="ml-0 mt-0 object-cover h-full w-full -rotate-90" src="/img/pfad-21-1@1x.png" />
                <img className="ml-[2px] -mt-[14px] object-cover h-[12px] w-[12px] -rotate-90" src="/img/pfad-22-1@1x.png" />
              </div>
            </div>
            <div className="whitespace-nowrap tracking-normal -ml-[35px] min-h-[24px] font-avenirnext-medium font-medium text-x04051a text-fsl">7% From last month</div>
          </div>
        </div>
        <div className="flex flex-col items-start mr-[12px] mt-[21px] w-1/3 min-h-[179px]  ">
          <div className="whitespace-nowrap tracking-normal mt-1 min-h-[32px] font-avenirnext-medium font-medium text-x04051a text-xxl">Total Rewards Distributed</div>
          <div className="whitespace-nowrap tracking-[0.16px] mt-[68px] min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">{formatToCurrency(Number(props.totalDistributed))}</div>
          <div className="flex items-start -ml-[1.41px] mt-2.5 h-[24px] min-w-[189px]">
            <div className="bg-center bg-cover items-center flex mt-[0.99px] h-[13px] min-w-[13px] py-0 px-[0.4px] bg-[url('/img/pfad-21-2@1x.png')]" >
              <img className="object-cover h-[12px] w-[12px]" src="/img/pfad-22-2@1x.png" />
            </div>
            <div className="whitespace-nowrap tracking-normal ml-[19px] min-h-[24px] font-avenirnext-medium font-medium text-x04051a text-fsl">17% From last month</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
