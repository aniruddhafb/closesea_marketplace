require("@nomicfoundation/hardhat-toolbox");
const dotenv = require('dotenv')
dotenv.config({path: './'})
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  // defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    matic : {
      url: "https://polygon-mumbai.g.alchemy.com/v2/dBRXjYxa_BcR_WeqjL-L-8xIP5HNHOY5",
      accounts: ["7dc1adc83d49798ebd0994bc470f66fe01a315a3595a9da9aed70b78380cfdfe"]
    }
  },
  solidity: {
    version: "0.8.4",
  }
};