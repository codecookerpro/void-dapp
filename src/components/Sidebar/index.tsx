const data = {
    dashboard: "Dashboard",
    announcement: "Announcement",
    taxCalculator: "Tax Calculator",
    staking: "Staking",
    disconnect: "Disconnect",
}

const SideBar = () => {
    return (
        <div className="h-[1458px] -mt-[178px] w-[400px] md:hidden lg:block">
            <div className="flex items-end justify-center min-w-full h-full">
                <div className="bg-x04051a h-[1476px] -mb-[60px] w-[402px] border border-violet-blue">
                    <div className="flex flex-col ml-[67px] mt-[160px] w-[246px] min-h-[1185px] items-center ">
                        <img className="h-[102px] w-[212px] object-cover ml-2" src="/img/voidcard-logo@1x.png" />
                        <div className="flex items-start h-[970px] min-w-[247px] mt-[119px] mr-[1px]">
                            <div className="items-start flex flex-col mt-[0.62px] min-h-[959px] w-[27px]">
                                <div className="bg-[url('/img/combined-shape@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-[1px]"></div>
                                <div className="bg-[url('/img/combined-shape-1-1x-png@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-[1px] mt-[55px]"></div>
                                <div className="bg-[url('/img/combined-shape-2-1x-png@1x.png')] bg-center bg-cover h-[25px] w-[25px] ml-[1px] mt-[56px]"></div>
                                <div className="bg-[url('/img/pfad-16@1x.png')] bg-center bg-cover h-[27px] w-[27px] mt-[55px]">
                                    <img className="ml-[12px] mt-[6px] h-[14px] w-[2px] object-cover" src={"/img/pfad-17@1x.png"} />
                                    <img className="ml-[6px] -mt-[8px] h-[2px] w-[14px] object-cover" src={"/img/pfad-18@1x.png"} />
                                </div>
                                <div className="bg-[url('/img/combined-shape-3@1x.png')] bg-center bg-cover h-[25px] w-[25px] mt-[666px] ml-[1px]"></div>
                            </div>
                            <div className="flex flex-col items-start ml-[47px] min-h-[970px] w-[173px]">
                                <div className="tracking-[0.12px] min-h-[35px] whitespace-nowrap text-blueberry font-avenirnext-medium text-xxxl font-medium">{data.dashboard}</div>
                                <div className="tracking-[0.12px] mt-[46px] min-h-[35px] whitespace-nowrap font-avenirnext-medium text-white text-xxxl font-medium">{data.announcement}</div>
                                <div className="tracking-[0.12px] mt-[46px] min-h-[35px] whitespace-nowrap font-avenirnext-medium text-white text-xxxl font-medium">{data.taxCalculator}</div>
                                <div className="tracking-[0.12px] mt-[46px] min-h-[35px] whitespace-nowrap font-avenirnext-medium text-white text-xxxl font-medium">{data.staking}</div>
                                <div className="tracking-[0.12px] mt-[657px] min-h-[35px] whitespace-nowrap font-avenirnext-medium text-white text-xxxl font-medium">{data.disconnect}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar
