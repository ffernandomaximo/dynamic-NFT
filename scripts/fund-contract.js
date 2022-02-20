const BloodzNFT = artifacts.require('BloodzNFT')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')

/*
  THIS SCRIPT IS MEANT TO ASSIST WITH FUNDING THE REQUESTING
  CONTRACT WITH LINK. IT WILL SEND 1 LINK TO THE REQUESTING
  CONTRACT FOR EASE-OF-USE. ANY EXTRA LINK PRESENT ON THE CONTRACT
  CAN BE RETRIEVED BY CALLING THE WITHDRAWLINK() FUNCTION.
*/

const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '3000000000000000000'

module.exports = async callback => {
    try {
        const bloodz = await BloodzNFT.deployed()

        const tokenAddress = await bloodz.LinkToken()
        console.log("CHAINLINK TOKEN ADDRESS: ", tokenAddress)
        const token = await LinkTokenInterface.at(tokenAddress)
        console.log("FUNDING CONTRACT: ", bloodz.address)
        const tx = await token.transfer(bloodz.address, payment)
        callback(tx.tx)
    } 
    catch (err) {
        callback(err)
    }
}