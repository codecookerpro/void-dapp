import { useState, useEffect } from 'react'

import Web3 from 'web3'
import { Web3Exception } from '../interface/web3'
import NavBar from '../components/Navbar';
import RoadMap from '../components/RoadMap';
import Strategy from '../components/Strategy';
import Advantage from '../components/Advantage';
import Ecosystem from '../components/Ecosystem';
import Unbank from '../components/Unbank';
import Articles from '../components/Articles';
import AboutUs from '../components/AboutUs';
import ContactInfo from '../components/ContactInfo/ContactInfo';

declare let window: any

const Home = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [address, setAddress] = useState<string>('')

  useEffect(() => {
    if (!window.ethereum) {
      console.error('Please install MetaMask')
      return
    }

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts: string[]) => {
        setAddress(accounts[0])
        let w3 = new Web3(window.ethereum)
        setWeb3(w3)
      })
      .catch((err: Web3Exception) => console.log(err.code))
  }, [])


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
