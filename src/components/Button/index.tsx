import React from "react";
interface ButtonProps {
  actionText: string,
  onClick: ()=> void,
}

const Button = ({actionText, onClick} : ButtonProps) => {
  return (
    <div className='flex whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full'>
      <button className='flex-1 whitespace-nowrap tracking-normal font-avenirnext-medium font-medium text-xxxxl rounded-[10px] border border-violet-blue text-center text-x04051a w-full h-full' onClick={onClick}>
        {actionText}
      </button>
    </div>
  );
}

export default Button;
