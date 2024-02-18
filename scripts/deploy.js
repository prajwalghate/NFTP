const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const Contract = await hre.ethers.deployContract("Sukuna");
  await Contract.waitForDeployment();

  console.log("Contract Address : ", await Contract.getAddress());

  const deploymentAddressContent = `const deploymentAddress = "${await Contract.getAddress()}"; \nmodule.exports= {deploymentAddress};`;
  const filePath = path.join(__dirname, "deploymentAddress.js");
  fs.writeFileSync(filePath, deploymentAddressContent);
  console.log("\nContract address written to:", filePath);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
