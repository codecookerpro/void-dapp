import NavBar from '../components/Navbar';
import RoadMap from '../components/RoadMap';
import Strategy from '../components/Strategy';
import Advantage from '../components/Advantage';
import Ecosystem from '../components/Ecosystem';
import Unbank from '../components/Unbank';
import Articles from '../components/Articles';
import AboutUs from '../components/AboutUs';
import ContactInfo from '../components/ContactInfo/ContactInfo';

const Home = () => {
  return (
    <div>
      <NavBar />
      <RoadMap />
      <Strategy />
      <Advantage />
      <Ecosystem />
      <Unbank />
      <Articles />
      <AboutUs />
      <ContactInfo />
    </div>
  )
}

export default Home;
