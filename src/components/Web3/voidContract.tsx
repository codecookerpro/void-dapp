import web3 from './index';
import { AbiItem } from 'web3-utils'
import { VOID_ADDRESS, VOID_ABI } from '../../abis/VoidAbi';

const voidContract = new web3.eth.Contract(VOID_ABI as AbiItem[], VOID_ADDRESS);

export default voidContract;