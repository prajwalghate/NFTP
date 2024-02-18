const { ethers } = require("hardhat");
const { deploymentAddress } = require("./deploymentAddress.js");
const Sukuna = require("../artifacts/contracts/Sukuna.sol/Sukuna.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(Sukuna.abi, deploymentAddress);
  const NFTName = await NFT.getName();
  console.log("NFT name : ", NFTName);
  const NFTsymbol = await NFT.getSymbol();
  console.log("NFT symbol : ", NFTsymbol);
  const prompt = await NFT.promptDescription();
  console.log("Prompt used", prompt + "\n");
  const balance = await NFT.balanceOf(process.env.WALLET_ADDRESS+"");
  console.log("balance", balance + "\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
