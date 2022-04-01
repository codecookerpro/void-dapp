import web3 from './index';
import { AbiItem } from 'web3-utils'
import { VOID_ADDRESS, VOID_ABI, DIVIDEN_ABI } from '../../config';

const voidContract = new web3.eth.Contract(VOID_ABI as AbiItem[], VOID_ADDRESS);

export default voidContract;