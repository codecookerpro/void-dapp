import { MouseEvent, ReactNode } from 'react'

const MyWallet = () => {
  return (
    <div className="flex flex-col mt-14 min-h-[251px] items-start w-[338px]">
        <div className="font-poppins text-xxxl font-bold tracking-normal text-wallet mt-1 ml-3.5 min-h-[35px] whitespace-nowrap">My Wallet</div>
        <div className="relative mt-2.5 rounded-[10px]" style={{width:"338px",height:"201px"}}>
          <div className="flex absolute left-0 top-0 w-full h-full rounded-[10px] items-end" style={{background: 'linear-gradient(139.94deg, #000c65 0%, #a9bac6 70.71%)'}}>
            <img className="object-cover flex-1 h-[83px]" src="/img/blur-rectangle-1@1x.png" />
          </div>
          <div className="absolute left-[254px] top-[162px] tracking-normal text-center text-fsl font-medium whitespace-nowrap font-avenirnext-medium text-wild-sand">BALANCE</div>
          <div className="absolute left-[23px] top-[159px] tracking-normal whitespace-nowrap font-bold text-xxl text-white font-avenirnext-bold">$2,432,864</div>
          <div className="absolute left-[24px] top-[132px] tracking-normal whitespace-nowrap text-center font-medium text-wild-sand text-fsm font-avenirnext-medium">Balance in Void Token</div>
          <div className="flex absolute left-[24px] top-[69px] min-w-[246px] h-[27px] items-center text-wild-sand font-nunito_sans text-xl text-normal">
            <div className="text-center tracking-normal whitespace-nowrap mt-[2px] h-[19px] w-[48px]">****</div>
            <div className="text-center tracking-normal whitespace-nowrap mt-[2px] ml-[16px] h-[19px] w-[49px]">****</div>
            <div className="text-center tracking-normal whitespace-nowrap mt-[2px] ml-[15px] h-[19px] w-[52px]">****</div>
            <div className="items-end text-center tracking-normal whitespace-nowrap -mb-[5.5px] ml-[16px] min-h-[29px] minh-w-[50px]">1999</div>
          </div>
          <div className="bg-[url('/img/rectangle-333@1x.png')] bg-center bg-cover flex absolute top-[29px] left-[297px] h-[24px] w-[24px]">
            <img className="flex-1 h-[3.5px] ml-[3.5px] mr-[5px] mt-[10.25px] object-cover" src="/img/more-hor--1@1x.png" />
          </div>
          <img className="h-[41px] w-[84px] absolute left-[22px] object-cover top-[23px]" src="/img/voidcard-logo-1@1x.png" />
        </div>
      </div>
  )
}

export default MyWallet
