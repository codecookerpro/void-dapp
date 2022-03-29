function Reward() {
  return (
    <div className="flex flex-col items-start bg-black-haze rounded-[10px] ml-[0.5px] mt-[18px] min-h-[309px] w-[1063px] py-[27.5px] px-4">
      <div className="tracking-normal whitespace-nowrap min-h-[35px] ml-6 font-poppins font-semibold text-x04051a text-xxxl">Reward in DAI</div>
      <div className="mt-3.5 relative w-[1029px] h-[200px]">
        {/* <div className="bg-white rounded-lg shadow-[10px_24px_50px_#0000000f] h-[75px] absolute left-0 top-0 w-[1029px]"></div> */}
        <div className="bg-white rounded-lg shadow-[10px_24px_50px_#0000000f] h-[75px] w-full z-auto"></div>
        <div className="flex flex-col items-start absolute left-[23px] top-[21px] w-[206px] min-h-[179px]">
          <div className="mt-1 whitespace-nowrap tracking-normal min-h-[32px] font-avenirnext-medium text-x04051a text-xxl font-medium">Claimable Rewards</div>
          <div className="whitespace-nowrap tracking-normal mt-[68px] min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">$436</div>
          <div className="flex items-center ml-1 mt-[7px] min-w-[204px] h-[22px]">
            <div className="bg-[url('/img/pfad-21@1x.png')] bg-center bg-cover flex items-center h-[13px] mb-[1.11px] -ml-[1px] min-w-[13px] py-0 px-[0.4px]">
              <img className="object-cover h-[12px] w-[12px]" src="/img/pfad-22-2@1x.png" />
            </div>
            <div className="self-end tracking-normal -mb-[5px] ml-[35px] min-h-[24px] min-w-[158px] whitespace-nowrap font-avenirnext-medium text-x04051a text-fsl font-medium">20% From last month</div>
          </div>
        </div>
        <div className="flex flex-col items-start absolute left-[340px] top-[21px] w-[297px] min-h-[179px]">
          <div className="whitespace-nowrap min-h-[32px] mt-1 tracking-normal font-avenirnext-medium text-x04051a text-xxl font-medium">My Total Rewards Distributed</div>
          <div className="relative mt-[68px] h-[107px] w-[209px]">
            <div className="absolute left-0 top-0 whitespace-nowrap tracking-normal font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">$1236</div>
            <div className="flex flex-col items-start ml-[46px] mt-[7px] min-h-[176px] rotate-90 w-[86px]">
              <div className="self-end tracking-normal -ml-[62px] mt-[65px] min-h-[24px] -rotate-90 whitespace-nowrap font-avenirnext-medium font-medium text-x04051a text-fsl">7% From last month</div>
              <div className="relative w-[13px] ml-[4.04px] mt-[76px] h-[13px]">
                <img className="absolute left-0 top-0 object-cover h-full w-full -rotate-90" src="/img/pfad-21-1@1x.png" />
                <img className="absolute left-0 top-0 object-cover h-[12px] w-[12px] -rotate-90" src="/img/pfad-22-1@1x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start absolute left-[747px] top-[21px] min-h-[179px] w-[262px] ">
          <div className="whitespace-nowrap tracking-normal mt-1 min-h-[32px] font-avenirnext-medium font-medium text-x04051a text-xxl">Total Rewards Distributed</div>
          <div className="whitespace-nowrap tracking-[0.16px] mt-[68px] min-h-[46px] font-avenirnext-demibold font-bold text-x04051a text-xxxxxl">$4036</div>
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
