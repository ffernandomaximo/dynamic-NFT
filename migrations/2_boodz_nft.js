const BloodzNFT = artifacts.require('BloodzNFT')

const RINKEBY_VRF_COORDINATOR = "0x6168499c0cFfCaCD319c818142124B7A15E857ab";
const RINKEBY_LKINTOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const RINKEBY_KEYHASH = "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc";


module.exports = async (deployer, network, [defaultAccount]) => {
 
   deployer.deploy(BloodzNFT)
}