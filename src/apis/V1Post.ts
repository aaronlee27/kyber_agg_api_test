import axios from "axios";
import { AggregatorDomain, ChainName, targetChain } from "../libs/constants";
import { getSwapRouteV1 } from "./V1Get";
import { getSigner } from "../libs/signer";


export async function postSwapRouteV1() {
    const targetPath = `/${targetChain}/api/v1/route/build`;
    const swapRouteData = await getSwapRouteV1();
    const routeSummary = swapRouteData.routeSummary;

    const signer = getSigner()
    const signerAddress = await signer.getAddress();

    // Configure the request body (refer to Docs for the full list)
    const requestBody = {
        routeSummary: routeSummary,
        sender: signerAddress,
        recipient: signerAddress,
        slippageTolerance: 10 //0.1%
    }

    // Call the API with axios to handle async calls
    try {
        console.log(`\nCalling [V1] Post Swap Route For Encoded Data...`);
        const {data} = await axios.post(
            AggregatorDomain+targetPath,
            requestBody
        );
        
        console.log(`[V1] POST Response:`);
        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    };
}