import { useState, useCallback } from 'react'
import Link from 'next/link'

import { NavLink, NavLinkComponent } from './NavLink'
import Hamburger from './Hamburger'
import ConnectButton from './ConnectButton'

const NavBar = () => {
  const [active, setActive] = useState(false)
  const [balance, setBalance] = useState<String | undefined>(undefined);

  const handleBurgerClick = () => {
    setActive(!active)
  }

  const handleBalanceChange = useCallback((bal: string | undefined) => {
    setBalance(bal);
  }, []);

  return (
    <section>
      <nav className="relative px-6 py-6 flex justify-between items-center ">
        <a className="text-white text-3xl font-bold leading-none" href="#">
          <img className="h-20 opacity-80" src="images/defirewhite.svg" alt="" width="100" />
        </a>
        <div className="lg:hidden"></div>
        {
          balance ?
            <a className="inline-block ml-auto mr-3 py-2 px-6 text-sm text-white font-bold border-2 border-gray-800 transition duration-200 rounded hover:border-rose-600" href="#">
              {balance}
              <span className="text-green-500">  $FLARE</span>
            </a>
            : <div className="ml-auto"></div>
        }
        <a className="inline-block w-10 mr-2 p-2  bg-black bg-opacity-50 hover:bg-gray-700 rounded" href="https://twitter.com/DeFIRE_ORG" target="_blank">
          <img className="w-8 h-6" src="svg/twitter.svg" alt="" />
        </a>
        <a className="inline-block w-10 p-2 mr-2  bg-black bg-opacity-50 hover:bg-gray-700 rounded" href="https://discord.gg/defire" target="_blank">
          <img className="w-8 h-6" src="svg/discord.svg" alt="" />
        </a>
        <a className="inline-block w-10 mr-3 p-2  bg-black bg-opacity-50 hover:bg-gray-700 rounded" href="https://medium.com/@defire.org" target="_blank">
          <img className="w-8 h-6" style={{ marginLeft: "2px", paddingTop: "3px" }} src="svg/medium.svg" alt="" />
        </a>
        <ConnectButton onBalanceChange={handleBalanceChange} />
      </nav>
    </section>
  )
}

export default NavBar
