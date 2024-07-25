const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const WBTC = await hre.ethers.getContractFactory("WBTC");
  console.log("Deploying WBTC...");

  // Deploy the contract with an initial supply of 1000 WBTC (for example)
  const initialSupply = ethers.utils.parseUnits("1000", 18);
  const wbtc = await WBTC.deploy(initialSupply);

  await wbtc.deployed();
  console.log("WBTC deployed to:", wbtc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
