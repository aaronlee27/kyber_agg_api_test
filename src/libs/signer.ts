import { ethers } from "ethers";
import { getProvider } from "./provider";
import dotenv from 'dotenv';

dotenv.config();

export function getSigner(): ethers.Signer {
    const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
    return new ethers.Wallet(METAMASK_PRIVATE_KEY ?? '', getProvider());
}