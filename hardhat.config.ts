import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

export default {
  defaultNetwork: "skale",
  networks: {
    skale: {
      url: process.env.SKALE_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY!]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.8.22',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
}
