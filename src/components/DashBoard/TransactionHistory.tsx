import TransactionListMenu from './TransactionListMenu'

const data = {
    statistic2: "Transaction History",
    number1: "April 22",
}
function TransactionHistory() {
  return (
    <div className="flex flex-col items-start bg-center bg-cover mt-[17px] min-h-[328px] relative py-[26.3px] px-[32.5px] w-[1063px] bg-[url('/img/rectangle-4-1@1x.png')]" >
        <div className="flex items-start h-[44px] min-w-[982px]">
          <div className="whitespace-nowrap tracking-normal min-h-[35px] min-w-[240px] self-end font-poppins font-semibold text-x04051a text-xxxl">{data.statistic2}</div>
          <div className="items-center bg-center bg-cover rounded-[4px] flex h-[39px] ml-[606px] min-w-[137px] py-0 px-[1px] bg-[url('/img/log-out--background-mask--1@1x.png')]" >
            <div className="flex items-end h-[37px] w-[135px] py-1 px-[13px]">
              <div className="relative h-[22px] w-[107px]">
                <div className="absolute left-0 top-0 tracking-normal whitespace-nowrap font-poppins font-medium text-victoria text-fsm">{data.number1}</div>
                <div className="flex justify-end absolute left-[41px] top-0 w-[66px] h-[16px]">
                  <img className="object-cover w-[16px]" src="/img/45-1@1x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TransactionListMenu />
      </div>
  );
}

export default TransactionHistory;
