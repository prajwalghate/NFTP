const { ethers } = require("hardhat");
const { deploymentAddress } = require("./deploymentAddress.js");
const Sukuna = require("../artifacts/contracts/Sukuna.sol/Sukuna.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(Sukuna.abi, deploymentAddress);
  const tx = await NFT.mint(5);
  await tx.wait();
  console.log(`Congratulations!! Sukuna Jujutsu tokens successffuly minted. `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
