import web3 from './index';
import { AbiItem } from 'web3-utils'
import { VOID_ADDRESS, DIVIDEN_ABI, VOID_ABI } from '../../config';

const voidContract = new web3.eth.Contract(VOID_ABI as AbiItem[], VOID_ADDRESS);
let dividenContract: any;
const init = async () => {
  const dividenDistributor = await voidContract.methods.distributorAddress.call().call();
  console.log("dividenAddress", dividenDistributor);
  dividenContract = new web3.eth.Contract(DIVIDEN_ABI as AbiItem[], dividenDistributor);

}
init();
export default dividenContract;
