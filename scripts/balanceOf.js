const { ethers } = require("hardhat");
const { deploymentAddress } = require("./deploymentAddress.js");
const Sukuna = require("../artifacts/contracts/Sukuna.sol/Sukuna.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(
    Sukuna.abi,
    process.env.POLYGON_ADDRESS + ""
  );
  const balance=await NFT.balanceOf(process.env.WALLET_ADDRESS+"");
  console.log("Wallet balance : ",balance);

  // console.log(
  //   "Wallet balance : ",
  //   (await NFT.balanceOf(process.env.WALLET_ADDRESS)).toString()
  // );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
