import RNavBar from '../components/RNavbar';
import SideBar from '../components/Sidebar';
import DashBoard from '../components/DashBoard';

const Home = () => {
  return (
    <div className='flex flex-row justify-center w-full'>
      <div className='w-[1920px] shrink-0 items-start bg-white overflow-hidden contents'>
        <SideBar />
        <DashBoard />
        <RNavBar />
      </div>
    </div>
  )
}

export default Home;
