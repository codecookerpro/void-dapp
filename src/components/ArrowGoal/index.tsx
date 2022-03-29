import React from "react";

function ArrowGoal(props: any) {
  const { className } = props;
  const arrowT = "flex absolute left-[362px] top-[100px] h-[17px] w-[9px] ";
  const arrowF = "flex absolute left-[362px] top-[230px] h-[17px] w-[9px] ";

  return (
    <div className={className? arrowT : arrowF }>
      <div className="flex-1 my-[3.8px] -mx-[3.8px] w-[16.63px] origin-center -rotate-90">
        <img className="flex-1 -my-[3.8px] mx-[3.8px] w-[9.02px] origin-center rotate-90 object-cover" src="/img/stroke-1-1@1x.png" />
      </div>
    </div>
  );
}

export default ArrowGoal;
