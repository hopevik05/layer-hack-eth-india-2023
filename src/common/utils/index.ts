import { ethers } from "ethers";
import abi from "../../contract/artifacts/index.json";
import { getAddress } from "ethers/lib/utils";

export const getChecksumAddress = (address: string) => getAddress(address);

const contractAddress = "0xea2C79A41403765226F95F3AD457B87d3Fc99379";

export const initializeContract = ({ provider }: { provider: any }) =>
  new ethers.Contract(getChecksumAddress(contractAddress), abi, provider);
