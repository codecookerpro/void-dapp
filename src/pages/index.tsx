import RNavBar from '../components/RNavbar';
import SideBar from '../components/Sidebar';
import DashBoard from '../components/DashBoard';

const Home = () => {
  return (
    <div className='flex flex-row justify-center w-full  overflow-hidden shrink-0 items-start bg-white'>
        <SideBar />
        <DashBoard />
        <RNavBar />
    </div>
  )
}

export default Home;

