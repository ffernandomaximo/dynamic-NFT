// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
 
contract BloodzNFT is ERC721, VRFConsumerBase {
   /**
   * Constructor inherits VRFConsumerBase
   * 
   * Network: Kovan
   * Chainlink VRF Coordinator address: 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9
   * LINK token address:                0xa36085F69e2889c224210F603D836748e7dC0088
   * Key Hash: 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4
   */ 
   constructor(address _linkTokenAddress, bytes32 _keyHash, address _vrfCoordinatorAddress, uint256 _fee) 
   ERC721("BloodzNZBS", "BLDZ") 
   VRFConsumerBase(_vrfCoordinatorAddress, _linkTokenAddress)
   {
   
   }
}
