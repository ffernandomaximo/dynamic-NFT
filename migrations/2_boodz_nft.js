const BloodzNFT = artifacts.require('BloodzNFT')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
const RINKEBY_LINKTOKEN = '0x01be23585060835e02b77ef475b0cc51aa1e0709'
const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

module.exports = async (deployer, network, [defaultAccount]) => {
    // hard coded for rinkeby
    LinkToken.setProvider(deployer.provider)
    BloodzNFT.setProvider(deployer.provider)
    if (network.startsWith('rinkeby')) {
        await deployer.deploy(BloodzNFT, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH)
        let dnd = await BloodzNFT.deployed()
    } 
    else if (network.startsWith('mainnet')) {
        console.log("IF YOU'RE INTERESTED IN EARLY ACCESS TO CHAINLINK VRF ON MAINNET, PLEASE EMAIL VRF@CHAIN.LINK")
    } 
    else {
        console.log("RIGHT NOW ONLY RINKEBY WORKS! PLEASE CHANGE YOUR NETWORK TO RINKEBY")
        // await deployer.deploy(BloodzNFT)
        // let dnd = await BloodzNFT.deployed()
    }
}