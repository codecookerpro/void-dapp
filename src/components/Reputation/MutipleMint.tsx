import { useState, useEffect } from 'react';
import Web3 from 'web3';
import reputationContract from '../Web3/reputationContract';

const MultipleMint = (props: any) => {

  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [userAddressList, setUserAddressList] = useState<Array<string>>([]);
  const [amountList, setAmountList] = useState<Array<number>>([]);

  useEffect(() => {
    setWeb3(props.web3);
  }, []);

  const handleInputAddressChange = (event: any) => {
    setUserAddress(event.target.value);
  }

  const handleInputAmountChange = (event: any) => {
    setAmount(event.target.value);
  }

  const handleBtnAddClick = () => {
    setUserAddressList([...userAddressList, userAddress]);
    setAmountList([...amountList, amount]);
  }

  const handleBtnMintAllClick = () => {
    console.log('User Address = ', window.ethereum.selectedAddress);
    reputationContract.methods.mintMultiple(userAddressList, amountList)
      .send({ from: window.ethereum.selectedAddress })
      .on('transactionHash', function (hash: any) {
        console.log('transactionHash => ', hash);
      })
      .on('receipt', function (receipt: any) {
        console.log('receipt => ', receipt);
        alert('Successfully done');
      })
      .on('confirmation', function (confirmationNumber: any, receipt: any) {
        console.log('confirmation => ', confirmationNumber);
      })
      .on('error', console.error);
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl my-10">
      <div className="card-body">
        <h2 className="card-title">Multiple Mint</h2>
        <div className="flex flex-row flex-grow space-x-1">
          <div className="basis-3/5" >
            <input type="text" placeholder="Address" className="input input-bordered w-full" onChange={handleInputAddressChange} />
          </div>
          <div className="basis-1/5" >
            <input type="text" placeholder="Amount" className="input input-bordered w-full" onChange={handleInputAmountChange} />
          </div>
          <div className="basis-1/5">
            <button className="btn btn-primary w-full" onClick={handleBtnAddClick}>Add</button>
          </div>
        </div>
        <div className="flex flex-row flex-grow overflow-x-auto my-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Address</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                userAddressList.map((address, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{address}</td>
                    <td>{amountList[index]}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleBtnMintAllClick}>Mint All</button>
        </div>
      </div>
    </div>
  );
}

export default MultipleMint;