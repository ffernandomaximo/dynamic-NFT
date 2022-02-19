const BloodzNFT = artifacts.require('BloodzNFT')

module.exports = async callback => {
    const bdz = await BloodzNFT.deployed()
    console.log('LET\'S GET THE OVERVIEW OF YOUR CHARACTER')
    const overview = await bdz.characters(0)
    console.log(overview)
    callback(overview.tx)
}