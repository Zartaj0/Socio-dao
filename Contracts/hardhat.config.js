require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url:  process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY1],
    },
  },
  gasReporter: {
    enabled: true
  }
};
