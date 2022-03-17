import web3 from './index';
import { AbiItem } from 'web3-utils'
import { REPUTATION_ADDRESS, REPUTATION_ABI } from '../../abis/ReputationAbi';

const reputationContract = new web3.eth.Contract(REPUTATION_ABI as AbiItem[], REPUTATION_ADDRESS);

export default reputationContract;