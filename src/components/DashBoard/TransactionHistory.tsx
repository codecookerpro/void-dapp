import TransactionListMenu from './TransactionListMenu'

const data = {
    history: "Transaction History",
    historydate: "April 22",
}

function TransactionHistory() {
  return (
    <div className="flex flex-col items-start bg-center bg-cover mt-[17px] min-h-[328px] py-[26.3px] px-[32.5px] w-full bg-[url('/img/rectangle-4-1@1x.png')]" >
        <div className="flex flex-row justify-between items-start h-[44px] min-w-full">
          <div className="whitespace-nowrap tracking-normal min-h-[35px] min-w-[240px] self-end font-poppins font-semibold text-x04051a text-xxxl">{data.history}</div>
          <div className="items-center bg-center bg-cover rounded-[4px] flex h-[39px] ml-[606px] min-w-[137px] py-0 px-[1px] bg-[url('/img/log-out--background-mask--1@1x.png')]" >
            <div className="flex items-end h-[37px] w-[135px] py-1 px-[13px]">
              <div className="h-[22px] w-[107px]">
                <div className="ml-0 mt-0 tracking-normal whitespace-nowrap font-poppins font-medium text-victoria text-fsm">{data.historydate}</div>
                <div className="flex justify-end ml-[41px] -mt-[14px] w-[66px] h-[16px]">
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
