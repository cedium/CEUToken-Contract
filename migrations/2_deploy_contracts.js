const CEUToken = artifacts.require("CEUToken");

module.exports = function(deployer) {
    deployer.deploy(CEUToken).then(() => {
        console.log("CEUToken contract address is: ", CEUToken.address)
    });
}