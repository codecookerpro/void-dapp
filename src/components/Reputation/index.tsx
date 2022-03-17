import { useState, useEffect } from "react";
import Web3 from 'web3';

import AddWhiteList from "./AddWhiteList";
import MultipleMint from "./MutipleMint";
import TransferOwnership from "./TransferOwnership";

const Reputation = (props: any) => {

  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    setWeb3(props.web3);
  }, []);

  return (
    <div className="flex flex-row flex-grow py-6">
      <div className="basis-1/4" />
      <div className="basis-2/4">
        <AddWhiteList web3={web3} />
        <MultipleMint web3={web3} />
        <TransferOwnership />
      </div>
      <div className="basis-1/4" />
    </div >
  )
}

export default Reputation;