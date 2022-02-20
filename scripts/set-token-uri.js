const BloodzNFT = artifacts.require('BloodzNFT')
const TOKENID = 0

module.exports = async callback => {
    const bdz = await BloodzNFT.deployed()
    console.log('LET\'S SET THE TOKEN-URI OF YOUR CHARACTERS')
    try {
        const tx = await bdz.setTokenURI(0, "https://ipfs.io/ipfs/QmUUaom8qtpU9DXJ5usBV16uUgdTYVDevRsrrnhebo8vVW?filename=the-blood-type.json")
        // const tx1 = await bdz.setTokenURI(1, "https://ipfs.io/ipfs/QmTvsVaaHTuMNmwXgbfgkrztFEazAPyzmrb4VSS2PbqLjA?filename=the-chainlink-elf.json")
        // const tx2 = await bdz.setTokenURI(2, "https://ipfs.io/ipfs/QmPZQhiBB6pwcxRgwZe2mx6ZizCPYgq8i4FBMETyWK1V2z?filename=the-chainlink-wizard.json")
        // const tx3 = await bdz.setTokenURI(3, "https://ipfs.io/ipfs/QmS6aznzxshLMcECPQZjCR94UF22WHu6FMM5HLQvaYL9NP?filename=the-chainlink-orc.json")
        console.log(tx)
        callback(tx.tx)
    }
    catch (err) {
        callback(err)
    }
}