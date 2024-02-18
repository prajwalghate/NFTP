## Author: God Mode
## Metacrafter Username: gomode1x
## UId :godmode1x
## Email: godmode1x@gmail.com

### Project
Metacrafter Polygon
### Project Rubric
To successfully complete the Challenge, your project should:

1. Generate a 5-item collection using DALLE 2 or Midjourney
2. Store items on IPFS using pinata.cloud
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
      * You should have a promptDescription function on the contract that returns the prompt you used to generate the images
4. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
5. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
6. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
      * Approve the NFTs to be transferred
      * Deposit the NFTs to the Bridge
      * Test balanceOf on Mumbai

### Installation and Execution
  1. Fork and clone my repo.
  2. Run **npm i**
  3. Create .env using en example for necessary environment variables.
  4. Run **npx hardhat compile**
  5. **npx hardhat run scripts/deploy.js ---network goerli** Will deploy your ERC721A contract to goerli testnet.
  6. The deployed contract address will be stored in deploymentAddress.js
  7. **npx hardhat run scripts/mint.js --network goerli** Will mint all the nfts
  8. **npx hardhat run scripts/deposit.js --network goerli** Will approve and deposit transaction on polygon via fxportal bridge
  10. **npx hardhat run scripts/getPrompt.js --network goerli** Will return the prompt description
  11. **npx hardhat run scripts/balanceOf.js --network mumbai** Will get the balance of deployed tokens.

### Tools Used  
  * ERC721A,solidity,hardhat,pinata,lexica

### Output

Goerli Deployment: 0x6e9Cd926Bf8F57FCe14b5884d9Ee0323126A772E
### [Etherscan link](https://goerli.etherscan.io/address/0x6e9Cd926Bf8F57FCe14b5884d9Ee0323126A772E)

Polygon Deployment: 0x6Ea2BBF48a4223737b35814818172bddF2EB1d00
### [Polyscan link](https://mumbai.polygonscan.com/token/0x6Ea2BBF48a4223737b35814818172bddF2EB1d00)




