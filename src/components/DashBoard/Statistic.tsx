import ChartBar from "../ChartBar";

const data = {
  low: "LOW",
  high: "HIGH",
  gasTrackrr: "Fantom Gas Fee Tracker",
  myStatistic: "150",
  Statistic: "Statistic",
  statisticYear: "2020",
  scale1: "100",
  scale2: "50",
  scale3: "0",
  scale4: "-50",
}

function Statistic() {
  return (
    <div className="flex flex-row items-end justify-center bg-center bg-cover mt-[29px] min-h-[413px] w-full py-[21px] px-[26px] bg-[url('/img/rectangle-4@1x.png')]">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-end h-[44px]">
          <div className="tracking-normal ml-1 mb-0.5 min-h-[35px] min-w-[102px] whitespace-nowrap font-poppins font-semibold text-x04051a text-xxxl">{data.Statistic}</div>
          <div className="flex items-center mr-1 self-start bg-cover bg-center rounded-[4px] h-[39px] min-w-[88px] py-0 px-[1px] bg-[url('/img/log-out--background-mask-@1x.png')]">
            <div className="flex h-[37px] w-[86px]">
              <div className="whitespace-nowrap tracking-normal ml-[13px] mt-[11px] w-[36px] h-[22px] font-poppins font-medium text-victoria text-fsm">{data.statisticYear}</div>
              <div className="bg-center bg-cover ml-[5px] mt-[11px] w-[16px] h-[16px] bg-[url('/img/45@1x.png')]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2 w-full">
          <div className="bg-white rounded-lg shadow-[10px_24px_54px_ #0000000f] flex h-[310px] w-[640px] font-poppins font-normal text-x04051a text-fsm">
            <div className="flex flex-col h-[220px] ml-5 mt-[33px] w-[27px]">
              <div className="whitespace-nowrap h-[22px] tracking-normal mt-[3px] w-[24px]">{data.myStatistic}</div>
              <div className="whitespace-nowrap h-[22px] tracking-normal mt-7 w-[24px]">{data.scale1}</div>
              <div className="whitespace-nowrap h-[22px] tracking-normal mt-7 w-[20px]">{data.scale2}</div>
              <div className="whitespace-nowrap h-[22px] tracking-normal mt-7 w-[11px]">{data.scale3}</div>
              <div className="whitespace-nowrap h-[22px] tracking-normal mt-7">{data.scale4}</div>
            </div>
            <div className="flex flex-1 items-end mb-[21px] ml-[30px] mr-[36.5px] min-w-[calc(100.00% -122px)]">
              <ChartBar caption={'Jan'} upheight={102} downheight={41} />
              <ChartBar caption={'Feb'} upheight={102} downheight={19} />
              <ChartBar caption={'Mar'} upheight={102} downheight={37} />
              <ChartBar caption={'Apr'} upheight={102} downheight={12} />
              <ChartBar caption={'Mai'} upheight={102} downheight={37} />
              <ChartBar caption={'Jun'} upheight={102} downheight={37} />
              <ChartBar caption={'Jul'} upheight={102} downheight={37} />
              <ChartBar caption={'Aug'} upheight={102} downheight={37} />
              <ChartBar caption={'Sep'} upheight={102} downheight={37} />
              <ChartBar caption={'Oct'} upheight={102} downheight={37} />
              <ChartBar caption={'Nov'} upheight={102} downheight={37} />
              <ChartBar caption={'Dec'} upheight={102} downheight={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="h-[44px] mr-2.5 ">
          <div className="whitespace-nowrap tracking-normal ml-12 min-h-[35px] min-w-[297px] font-poppins font-semibold text-x04051a text-xxxl">{data.gasTrackrr}</div>
        </div>
        <div className="flex h-[213px] ml-[34px] mt-[65px] mb-[35px] w-[324px]">
          <div className="flex flex-1 w-[324px]">
            <div className="flex flex-1 items-end min-w-full">
              <div className="relative h-[317px] -mb-[92px] -ml-[35px] w-[394px] font-poppins font-semibold text-regent-gray text-fsl">
                <div className="bg-center bg-cover items-start flex h-[181px] min-w-[324px] absolute left-[35px] top-[12px] py-0 px-0 bg-[url('/img/vector-4@1x.png')]" >
                  <div className="relative mt-0 h-full w-[282px]">
                       <img className="absolute left-[143px] top-0 h-[80px] object-cover w-[139px]" src={"/img/vector-3@1x.png"} />
                       <img className="absolute left-[42px] top-0 h-[80px] object-cover w-[139px]" src={"/img/vector-2@1x.png"} />
                       <img className="absolute left-0 top-[42px] h-[139px] w-[80px] object-cover" src={"/img/vector-1@1x.png"} />
                  </div>
                </div>
                <div className="whitespace-nowrap absolute left-[39px] top-[197px] h-[26px] tracking-normal w-[55px]">{data.low}</div>
                <div className="h-[26px] absolute left-[316px] top-[197px] tracking-normal whitespace-nowrap w-[42px]">{data.high}</div>
                <div className="bg-cover bg-center h-[317px] absolute left-0 top-0 w-[394px] bg-[url('/img/bg@1x.png')]">
                  <img className="absolute left-[177px] top-[87px] object-cover h-[87px] w-[124px]" src="/img/needle@1x.png" />
                  <div className="absolute left-[183px] top-[136px] rounded-[14px] shadow-[0px_4px_24px_ #1f61c438] h-[28px] w-[28px] border-[4px] border-white" style={{ background: 'linear-gradient(180deg, #0d18a2 0%, rgba(63, 58, 185, 0.47) 34.48%, rgba(255, 255, 255, 0) 100%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Statistic;
