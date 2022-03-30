const Nft = () => {
  return (
    <div className="items-start flex flex-col mt-[31px] min-h-[251px] w-[338px]">
      <div className="tracking-normal ml-[24px] mt-[4px] min-h-[35px] whitespace-nowrap text-x04051a font-poppins text-xxxl font-semibold">NFT</div>
      <div className="rounded-[10px] h-[201px] mt-[10px] w-full">
        <div className="bg-[url('/img/rectangle-687@1x.png')] items-end bg-center bg-cover rounded-[10px] flex h-full min-w-full ml-0 mt-0">
          <div className="flex flex-col w-full mt-[15px] bg-[url('/img/blur-rectangle-1@1x.png')] bg-cover h-[83px]">
            <div className="-ml-[255px] mt-[20px] tracking-normal whitespace-nowrap text-center font-medium text-wild-sand text-fsm font-avenirnext-medium">MINT</div>
            <div className='flex flex-row justify-between items-center mt-[10px]'>
              <div className="ml-[22px] tracking-normal whitespace-nowrap font-bold text-xxl text-white font-avenirnext-bold">$2,432,864</div>
              <div className="mr-[5px] tracking-normal text-center text-fsl font-medium whitespace-nowrap font-avenirnext-medium text-wild-sand">LOCKED / 356 DAYS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nft
