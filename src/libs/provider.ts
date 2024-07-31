import { ethers } from 'ethers';
import { ChainId } from './constants';

export function getProvider(): ethers.Provider {    
    // Replace this with a RPC of your choice
    const providerUrl = 'https://rpc.bittorrentchain.io';
    const providerOptions = {
        chainId: ChainId.BTTC,
        name: 'bttc'
    }
    return new ethers.JsonRpcProvider(providerUrl, providerOptions);
}