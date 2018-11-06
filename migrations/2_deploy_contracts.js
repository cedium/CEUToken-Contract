const CEUToken = artifacts.require("CEUToken");
const TokenVesting = artifacts.require("TokenVesting");

module.exports = function (deployer) {
    // Company vesting 
    const cBeneficiary = "0xF68B21Cc73aD2b23731b605c1c6eFE819A10dD64"
    const cStart = 1546250340
    const cCliff = 0 // No cliff
    const cDuration = 31536000 // ~1 yr
    const cAmount = 80000000 * 1e18;

    // Team vesting 
    const tBeneficiary = "0x26d1D7Aa534548B9c6dEFF726a41B36DF0e74AC7"
    const tStart = 1546250340
    const tCliff = 15768000 // ~6 months
    const tDuration = 15768000 // ~6 months
    const tAmount = 60000000 * 1e18;

    deployer.deploy(CEUToken).then(() => {
        console.log("CEUToken contract address is: ", CEUToken.address);

        console.log("Deploying company token vesting")
        return deployer.deploy(TokenVesting, cBeneficiary, cStart, cCliff, cDuration, true);
    }).then(() => {
        const ceuToken = CEUToken.at(CEUToken.address)
        console.log("Company token vesting address: ", TokenVesting.address)
        ceuToken.transfer(TokenVesting.address, cAmount)

        console.log("Deploying team token vesting")
        return deployer.deploy(TokenVesting, tBeneficiary, tStart, tCliff, tDuration, true);
    }).then(() => {
        const ceuToken = CEUToken.at(CEUToken.address)
        console.log("Team token vesting address: ", TokenVesting.address)
        ceuToken.transfer(TokenVesting.address, tAmount);

        console.log("Transferring tokens to reward pool");
        const rewardAddress = "0x508789F07f54dB7EAFb03bBFbDe829Fd24195d23"
        const rewardTokens = 60000000 * 1e18;
        ceuToken.transfer(rewardAddress, rewardTokens);

        console.log("Transferring tokens for businees partnerships");
        const bpAddress = "0x2b5Cf0AD94d0Fe38B5fDfCD868c1B73b189aB859"
        const bpTokens = 20000000 * 1e18;
        ceuToken.transfer(bpAddress, bpTokens);

        console.log("Transferring tokens for bounty activities");
        const bountyAddress = "0x93eBd562e9547cEEf1ABCa17437905FeeBB902a2"
        const bountyTokens = 20000000 * 1e18;
        ceuToken.transfer(bountyAddress, bountyTokens);

    });
}