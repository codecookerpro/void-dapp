import ArrowGoal from "../ArrowGoal";

const data = {
  mygoals: "My Goals",
  vacation: "Vacation",
  lambo: "Lambo",
  vacationPro: "33%",
  lamboPro: "10%",
}

const MyGoals = () => {
  return (
    <div>
      <div className="flex flex-col -ml-[70px] w-[488px] h-[294px]">
        <div className="flex flex-col bg-white rounded-[10px] h-[130px] w-[338px] ml-[70px] shadow-[10px_24px_54px_#0000000f]">
          <div className="flex flex-row items-center -mt-[45px]">
            <div className="ml-[10px] whitespace-nowrap tracking-normal font-poppins font-semibold text-x04051a text-xxxl">{data.mygoals}</div>
            <div className="flex flex-1 w-[20px] ml-[160px]">
              <div className="flex flex-col flex-1 items-start ml-[2.2px] mr-[3px] mt-[3px] min-h-[13.77px]">
                <div className="relative -ml-[0.6px] -mt-[1px] w-[16px] h-[4px]">
                  <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" />
                  <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" />
                  <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" />
                </div>
                <div className="relative -ml-[0.6px] mt-[1px] w-[16px] h-[4px]">
                  <img className="absolute left-[3px] top-0 object-cover h-[4px] w-[4px]" src="/img/vector-8@1x.png" />
                  <img className="absolute left-[6px] top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-9@1x.png" />
                  <img className="absolute left-0 top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-10@1x.png" />
                </div>
                <div className="relative -ml-[0.6px] mt-[1px] w-[16px] h-[4px]">
                  <img className="absolute left-[9px] top-0 object-cover w-[4px] h-[4px]" src="/img/vector-11@1x.png" />
                  <img className="absolute left-[12px] top-[2px] object-cover w-[4px] h-[1px]" src="/img/vector-12@1x.png" />
                  <img className="absolute left-0 top-[2px] object-cover h-[1px] w-[10px]" src="/img/vector-13@1x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px] -ml-[20px] flex flex-row justify-center space-x-10 items-center">
            <div className="relative w-[92px] h-[92px]">
              <img className="absolute left-[46px] top-0 object-cover h-[69px] w-[46px]" src="/img/pfad-1@1x.png" />
              <img className="absolute left-0 top-0 object-cover h-[92px] w-[85px]" src="/img/pfad-2@1x.png" />
              <div className="absolute left-[25px] top-[36px] text-center whitespace-nowrap tracking-normal font-arial-regular text-green-blue text-xl font-normal ">{data.vacationPro}</div>
            </div>
            <div className="whitespace-nowrap tracking-normal font-avenirnext-medium text-x04051a text-xxxl font-bold">{data.vacation}</div>
            <ArrowGoal />
          </div>
        </div>
        <div className="flex flex-col -mt-[30px] bg-[url('/img/pfad-6@1x.png')] bg-cover h-[263px] w-[488px]">
          <div className="mt-[60px] -ml-[30px] flex flex-row justify-center space-x-10 items-center">
            <div className="relative w-[92px] h-[92px]">
              <img className="absolute left-[46px] top-0 object-cover h-[16px] w-[27px]" src="/img/pfad-3@1x.png" />
              <img className="absolute left-[67px] top-[9px] object-cover w-[24px] h-[74px]" src="/img/pfad-4@1x.png" />
              <img className="absolute left-0 top-0 object-cover h-[92px] w-[73px]" src="/img/pfad-5@1x.png" />
              <div className="absolute left-[25px] top-[33px] tracking-normal text-center whitespace-nowrap font-arial-regular font-normal text-green-blue text-xl">{data.lamboPro}</div>
            </div>
            <div className="whitespace-nowrap tracking-normal font-avenirnext-medium text-x04051a text-xxxl font-bold">{data.lambo}</div>
            <ArrowGoal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyGoals
