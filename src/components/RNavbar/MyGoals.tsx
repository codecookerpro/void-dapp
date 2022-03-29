import ArrowGoal from "../ArrowGoal";

const data = {
  x20FromLastMonth: "My Goals",
  transactionHistory2: "Vacation",
  x0: "Car",
  number4: "33%",
  number2: "10%",
}
const MyGoals = () => {
  return (
    <div>
      <div className="absolute -left-[34px] top-[939px] w-[488px] h-[294px]">
        <div className="absolute left-[79px] top-[6px] whitespace-nowrap tracking-normal font-poppins font-semibold text-x04051a text-xxxl">{data.x20FromLastMonth}</div>
        <img className="absolute left-0 top-0 object-cover h-[263px] w-[488px]" src="/img/pfad-6@1x.png" />
        <div className="bg-white rounded-[10px] h-[113px] absolute left-[65px] top-[182px] w-[338px] shadow-[10px_24px_54px_#0000000f]"></div>
        <div className="absolute left-[217px] top-[96px] whitespace-nowrap tracking-normal font-avenirnext-medium text-x04051a text-xxxl font-medium">{data.transactionHistory2}</div>
        <div className="absolute left-[217px] top-[224px] whitespace-nowrap tracking-normal font-avenirnext-medium text-x04051a text-xxxl font-medium">{data.x0}</div>
        <div className="absolute left-[94px] top-[62px] w-[92px] h-[92px]">
          <img className="absolute left-[46px] top-0 object-cover h-[69px] w-[46px]" src="/img/pfad-1@1x.png" />
          <img className="absolute left-0 top-0 object-cover h-[92px] w-[85px]" src="/img/pfad-2@1x.png" />
          <div className="absolute left-[25px] top-[36px] text-center whitespace-nowrap tracking-normal font-arial-regular text-green-blue text-xl font-normal ">{data.number4}</div>
        </div>
        <div className="absolute left-[93px] top-[192px] w-[92px] h-[92px]">
          <img className="absolute left-[46px] top-0 object-cover h-[16px] w-[27px]" src="/img/pfad-3@1x.png" />
          <img className="absolute left-[67px] top-[9px] object-cover w-[24px] h-[74px]" src="/img/pfad-4@1x.png" />
          <img className="absolute left-0 top-0 object-cover h-[92px] w-[73px]" src="/img/pfad-5@1x.png" />
          <div className="absolute left-[25px] top-[33px] tracking-normal text-center whitespace-nowrap font-arial-regular font-normal text-green-blue text-xl">{data.number2}</div>
        </div>
        <ArrowGoal className={true} />
        <ArrowGoal className={false} />
        <div className="flex w-[20px] h-[20px] absolute left-[355px] top-[10px]">
          <div className="flex flex-1 w-[20px]">
            <div className="flex flex-col flex-1 items-start ml-[2.2px] mr-[3px] mt-[3px] min-h-[13.77px]">
              <div className="relative -ml-[0.6px] -mt-[1px] w-[16px] h-[4px]">
                <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" />
                <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" />
                <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" />
              </div>
              <div className="relative -ml-[0.6px] mt-[1px] w-[16px] h-[4px]">
                <img className="absolute left-[3px] top-0 object-cover h-[4px] w-[4px]" src="/img/vector-8@1x.png" />
                <img className="absolute left-[6px] top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-9@1x.png" />
                <img className="absolute left-0 tip-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-10@1x.png" />
              </div>
              <div className="relative -ml-[0.6px] mt-[1px] w-[16px] h-[4px]">
                <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" />
                <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" />
                <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyGoals
