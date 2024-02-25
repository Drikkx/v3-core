import hre from "hardhat";
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

async function main() {

    console.log('Deploy UniswapV3Factory')
    // We get the contract TestnetERC20 to deploy
    const UniswapV3Factory = await hre.ethers.getContractFactory("UniswapV3Pool");
    const Factory = await UniswapV3Factory.deploy({
        gasLimit: 100000000,
        gasPrice: 100_000
    });

    await Factory.deployed();

    console.log("UniswapV3Factory deployed to:", Factory.address);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
