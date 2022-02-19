const BloodzNFT = artifacts.require('BloodzNFT')

module.exports = async callback => {
    const bdz = await BloodzNFT.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await bdz.characters(0)
    console.log(overview)
    callback(overview.tx)
}