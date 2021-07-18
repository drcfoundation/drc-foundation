import Web3 from "web3";
import { NftGen } from "../../types/nfts";

type AbiType = "function" | "constructor" | "event" | "fallback";

// The minimum ABI to get ERC20 Token balance
const ERC20_MIN_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function" as AbiType,
  },
];

const web3 = new Web3(
  new Web3.providers.WebsocketProvider(
    "wss://mainnet.infura.io/ws/v3/1870caa4a47441fdb01a85322c1cd4c7"
  )
);

const fundWalletAddress = "0x356B82b7A235242F578883132a60b7D8017900AF";

export const getBalance = async () => {
  const ethBalanceInWei = await web3.eth.getBalance(fundWalletAddress);
  const ethBalance = Number(web3.utils.fromWei(ethBalanceInWei));

  // Get ERC20 Token contract instance
  const drcContract = new web3.eth.Contract(
    ERC20_MIN_ABI,
    "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606"
  );

  // Call balanceOf function
  const drcBalance = Number(
    await drcContract.methods.balanceOf(fundWalletAddress).call()
  );

  // Get ERC20 Token contract instance
  const wethContract = new web3.eth.Contract(
    ERC20_MIN_ABI,
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
  );
  const wethBalanceInWei = await wethContract.methods
    .balanceOf(fundWalletAddress)
    .call();
  const wethBalance = Number(web3.utils.fromWei(wethBalanceInWei));

  const usdcContract = new web3.eth.Contract(
    ERC20_MIN_ABI,
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  );
  const usdcBalanceInMWei = await usdcContract.methods
    .balanceOf(fundWalletAddress)
    .call();
  const usdcBalance = Number(web3.utils.fromWei(usdcBalanceInMWei, "mwei"));

  return {
    ethBalance,
    wethBalance,
    drcBalance,
    usdcBalance,
  };
};

const NFT_ABI = [
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "_id", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    payable: false,
    type: "function" as AbiType,
  },
];

const NFTContractAddress = "0xe57b446d45432A1827210240ef18a21059Bfe945";
const ownerAddress = "0x9295f09591ED988507Af8d17A2219089E8fe6255";
const NFTIds: Record<NftGen, number> = { gen00: 3, gen01: 16 };

export const getNFTBalance = async (gen: NftGen) => {
  const contract = new web3.eth.Contract(NFT_ABI, NFTContractAddress);

  // Call balanceOf function
  const nftBalance = Number(
    await contract.methods.balanceOf(ownerAddress, NFTIds[gen]).call()
  );

  return nftBalance;
};
