import classNames from 'tailwindcss-classnames';

function ChartBar(props: any) {
  const { caption, upheight, downheight } = props;

  return (
    <div className="flex flex-col items-end ml-3.5 min-h-[254px] w-[31px]">
      <div className="flex items-end rounded-lg h-[156px] min-w-[25px]" style={{background: 'linear-gradient(180deg, #0d18a2 0%, rgba(63, 58, 185, 0.47) 34.48%, rgba(255, 255, 255, 0) 100%)'}}>
        <div className={`bg-blue-charcoal rounded-lg w-[25px] h-[${upheight || ""}px]`}></div>
      </div>
      <div className="flex items-start bg-ebb rounded-lg h-[53px] mt-1 min-w-[25px]">
        <div className={`bg-froly rounded-lg w-[25px] h-[${downheight || ""}px]`}></div>
      </div>
      <div className="tracking-normal mr-[1px] mt-[21px] min-h-[22px] text-center w-[30px]">{caption}</div>
    </div>
  );
}

export default ChartBar;
