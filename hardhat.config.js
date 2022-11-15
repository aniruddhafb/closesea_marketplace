require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const fs = require('fs');
const { task } = require("hardhat/config");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }

})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    version: "0.8.17"
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [ "7dc1adc83d49798ebd0994bc470f66fe01a315a3595a9da9aed70b78380cfdfe"]
    }
  }
};
