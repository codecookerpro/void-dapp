
import RNavBar from '../components/RNavbar';
import SideBar from '../components/Sidebar';
import DashBoard from '../components/DashBoard';

import AddressProvider from '../components/AddressProvider';

const Home = () => {
  return (
    <AddressProvider>
      <div className='flex flex-row justify-center w-full  overflow-hidden shrink-0 items-start bg-white'>
        <SideBar />
        <DashBoard />
        <RNavBar />
      </div>
    </AddressProvider>
  )
}

export default Home;

