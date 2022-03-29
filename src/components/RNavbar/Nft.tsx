
const Nft = () => {
  return (
    <div className="items-start flex flex-col mt-[31px] min-h-[251px] w-[338px]">
        <div className="tracking-normal ml-[24px] mt-[4px] min-h-[35px] whitespace-nowrap text-x04051a font-poppins text-xxxl font-semibold">NFT</div>
        <div className="rounded-[10px] h-[201px] mt-[10px] relative w-[338px]">
          <div className="bg-[url('/img/rectangle-687@1x.png')] items-end bg-center bg-cover rounded-[10px] flex h-full min-w-[338px] absolute left-0 top-0">
            <img className="object-cover w-full h-[83px]" src="/img/blur-rectangle-1@1x.png" />
          </div>
          <div className="absolute left-[170px] top-[162px] tracking-normal text-center whitespace-nowrap text-wild-sand font-avenirnext-medium text-fsl text-medium">LOCKED / 356 DAYS</div>
          <div className="absolute left-[23px] top-[159px] tracking-normal whitespace-nowrap text-white font-avenirnext-bold text-xxl text-bold">$2,432,864</div>
          <div className="absolute left-[22px] top-[132px] text-center whitespace-nowrap tracking-normal text-wild-sand font-avenirnext-medium text-fsm text-medium">MINT</div>
        </div>
      </div>
  )
}
export default Nft
