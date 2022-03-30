interface ButtonProps {
  actionText: string,
  onBalanceChange: (bal: string | undefined) => void,
}


const ClaimButton = ({ actionText, onBalanceChange }: ButtonProps) => {
  return (
    <div className='flex whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full'>
      <button className='flex-1 whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full' onClick={()=>{console.log("midas")}}>
        {actionText}
      </button>
    </div>
  );
}

export default ClaimButton;
