import { postSwapRouteV1 } from "../apis/V1Post";
import { getTokenApproval } from "../libs/approval";
import { tokenIn, amountIn } from "../libs/constants";
import { getSigner } from "../libs/signer";
import dotenv from 'dotenv';

dotenv.config();


export async function V1Swap() {
    // Get the swap data required to execute the transaction on-chain
    const nativeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
    const swapData = await postSwapRouteV1();
    const routerContract = process.env.ROUTER_CONTRACT_ADDRESS || '';

    // // Use the configured signer to submit the on-chain transactions
    
    const signer = getSigner();
    const signerAddress = await signer.getAddress();

    // Ensure that the router contract has sufficient allowance
    if (tokenIn.address != nativeToken){
        await getTokenApproval(
            tokenIn.address,
            routerContract,
            swapData.amountIn
        );
    }

    const encodedSwapData = swapData.data.replaceAll(process.env.OLD_EXECUTOR_ADDRESS, process.env.NEW_EXECUTOR_ADDRESS);
    console.log(`\n Executing the swap tx on-chain...`);
    console.log(`Encoded data: ${encodedSwapData}`);
    console.log(`Router contract address: ${routerContract}`);


    const executeSwapTx = await signer.sendTransaction({
        data: encodedSwapData,
        from: signerAddress,
        to: routerContract,
        value: tokenIn.address == nativeToken ? BigInt(amountIn) : 0
    });

    const executeSwapTxReceipt = await executeSwapTx.wait();
    console.log(`Swap tx executed with hash: ${executeSwapTxReceipt?.hash}`);
};
