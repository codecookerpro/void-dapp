function TransactionListMenu() {
  return (
    <div className="items-center flex-col flex mt-[26px] min-h-[34px] w-[993px]">
      <div className="items-start flex mr-[8.62px] mt-[4px] min-w-[927px] h-[25px] font-poppins font-light text-x04051a text-fsl">
        <div className="whitespace-nowrap min-h-[25px] min-w-[62px] tracking-normal">Tx Hash</div>
        <div className="whitespace-nowrap tracking-normal ml-[260px] min-h-[25px] min-w-[40px]">Date</div>
        <div className="whitespace-nowrap tracking-normal ml-[271px] min-h-[25px] min-w-[47px]">Value</div>
        <div className="whitespace-nowrap tracking-normal ml-[195px] min-h-[25px]">Status</div>
      </div>
      <img className="h-[1px] mt-[4px] w-[993px] object-cover" src="/img/linie-1@1x.png" />
    </div>
  );
}

export default TransactionListMenu;
