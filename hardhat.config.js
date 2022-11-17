require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic : {
      url: "https://polygon-mumbai.g.alchemy.com/v2/VRsV-zuzYN2IOzwnBHvbtbl--L2Rlm_x",
      accounts: ["7dc1adc83d49798ebd0994bc470f66fe01a315a3595a9da9aed70b78380cfdfe"],
      chainId: "80001"
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};