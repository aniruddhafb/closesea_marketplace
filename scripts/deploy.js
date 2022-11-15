const {ethers} = require('hardhat');
const hre = require('hardhat');
const fs = require('fs');

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed()

  const data = {
    address: marketplace.address,
    abi: JSON.parse(marketplace.interface.format('json'))
  }
 
  fs.writeFileSync('./Marketplace.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1)
  })