import axios from "axios";
import { AggregatorDomain, ChainName, tokenIn, tokenOut, amountIn, targetChain } from "../libs/constants";

export async function getSwapRouteV1() {
    const targetPath = `/${targetChain}/api/v1/routes`;

    const targetPathConfig = {
        params: {
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            amountIn: amountIn.toString()
        }
    };

    try {
        console.log(`\nCalling [V1] Get Swap Route...`);
        const {data} = await axios.get(
            AggregatorDomain+targetPath,
            targetPathConfig
        )

        console.log(`[V1] GET Response:`);
        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    };

};