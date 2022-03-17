import { useState, useEffect } from "react";
import reputationContract from '../Web3/reputationContract';

const TransferOwnership = (props: any) => {
  const [userAddress, setUserAddress] = useState<string>("");

  const handleInputAddressChange = (event: any) => {
    setUserAddress(event.target.value);
  }

  const handleBtnTransferClick = async () => {
    console.log('User Address = ', window.ethereum.selectedAddress);
    reputationContract.methods.transferOwnership(userAddress)
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
        <h2 className="card-title">Transfer Ownership</h2>
        <input type="text" placeholder="Address" className="input input-bordered w-full" onChange={handleInputAddressChange} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleBtnTransferClick}>Transfer Ownership</button>
        </div>
      </div>
    </div>
  )
}

export default TransferOwnership;