import TransactionHistory from './TransactionHistory'
import Statistic from './Statistic'
import Reward from './Reward'

const data = {
  title: "Dashboard",
}

const DashBoard = () => {
  return (
    <div className="items-start flex flex-col ml-[28px] mt-[73.5px] min-h-[1161px] grow">
      <div className="whitespace-nowrap tracking-normal ml-[17.5px] min-h-[47px] font-poppins font-medium text-x04051a text-xxxxxl">{data.title}</div>
      <Reward/>
      <Statistic/>
      <TransactionHistory />
    </div>
  );
}

export default DashBoard;