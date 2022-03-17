import { useState, useEffect } from 'react'

import Web3 from 'web3'
import { Web3Exception } from '../interface/web3'
import NavBar from '../components/Navbar';
import Reputation from '../components/Reputation';

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
      <Reputation web3={web3} />
    </div>
  )
}

export default Home;
