const MyWallet = () => {
  return (
    <div className="flex flex-col mt-14 min-h-[251px] items-start w-[338px]">
      <div className="font-poppins text-xxxl font-bold tracking-normal text-wallet mt-1 ml-3.5 min-h-[35px] whitespace-nowrap">My Wallet</div>
      <div className="flex mt-2.5 rounded-[10px] w-full h-[201px]">
        <div className="flex flex-col ml-0 mt-0 w-full h-full rounded-[10px]" style={{ background: 'linear-gradient(139.94deg, #000c65 0%, #a9bac6 70.71%)' }}>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between w-full'>
              <img className="h-[41px] w-[84px] ml-[22px] object-cover mt-[23px]" src="/img/voidcard-logo-1@1x.png" />
              <div className="bg-[url('/img/rectangle-333@1x.png')] bg-center bg-cover flex mt-[29px] mr-[14px] h-[24px] w-[24px]">
                <img className="flex-1 h-[3.5px] ml-[3.5px] mr-[5px] mt-[10.25px] object-cover" src="/img/more-hor--1@1x.png" />
              </div>
            </div>
            <div className="flex ml-[24px] mt-[12px] min-w-[246px] h-[27px] items-center text-wild-sand font-nunito_sans text-xl font-normal">
              <div className="text-center tracking-normal whitespace-nowrap mt-[2px] h-[19px] w-[48px]">****</div>
              <div className="text-center tracking-normal whitespace-nowrap mt-[2px] ml-[16px] h-[19px] w-[49px]">****</div>
              <div className="text-center tracking-normal whitespace-nowrap mt-[2px] ml-[15px] h-[19px] w-[52px]">****</div>
              <div className="items-end text-center tracking-normal whitespace-nowrap -mb-[5.5px] ml-[16px] min-h-[29px] minh-w-[50px]">1999</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full mt-[15px] bg-[url('/img/blur-rectangle-1@1x.png')] bg-cover h-[83px]">
            <div className="-ml-[152px] mt-[20px] tracking-normal whitespace-nowrap text-center font-medium text-wild-sand text-fsm font-avenirnext-medium">Balance in Void Token</div>
            <div className='flex flex-row justify-between items-center mt-[10px]'>
              <div className="ml-[22px] tracking-normal whitespace-nowrap font-bold text-xxl text-white font-avenirnext-bold">$2,432,864</div>
              <div className="mr-[5px] tracking-normal text-center text-fsl font-medium whitespace-nowrap font-avenirnext-medium text-wild-sand">BALANCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWallet
