const MyNFT = artifacts.require('MyNFT')

module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(MyNFT)
}
