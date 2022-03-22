import web3 from './index';
import { AbiItem } from 'web3-utils'
import { FLARE_ADDRESS, FLARE_ABI } from '../../abis/FlareAbi';

const flareContract = new web3.eth.Contract(FLARE_ABI as AbiItem[], FLARE_ADDRESS);

export default flareContract;