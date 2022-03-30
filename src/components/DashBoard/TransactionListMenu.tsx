function TransactionListMenu() {
  return (
    <div className="items-center flex-col flex mt-[26px] min-h-[34px] w-full">
      <div className="items-start flex flex-row justify-center space-x-[245px] mr-[8.62px] mt-[4px] min-w-[927px] h-[25px] font-poppins font-light text-x04051a text-fsl">
        <div className="whitespace-nowrap min-h-[25px] min-w-[62px] tracking-normal">Tx Hash</div>
        <div className="whitespace-nowrap tracking-normal min-h-[25px] min-w-[40px]">Date</div>
        <div className="whitespace-nowrap tracking-normal min-h-[25px] min-w-[47px]">Value</div>
        <div className="whitespace-nowrap tracking-normal min-h-[25px]">Status</div>
      </div>
      <img className="h-[1px] mt-[4px] w-full object-cover" src="/img/linie-1@1x.png" />
    </div>
  );
}

export default TransactionListMenu;
