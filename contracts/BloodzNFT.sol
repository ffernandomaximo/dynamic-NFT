// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
 
contract BloodzNFT is ERC721URIStorage, VRFConsumerBase {
   
   bytes32 public keyHash;
   address public vrfCoordinator;
   uint256 internal fee;
   uint256 public randomResult;
   
   struct Character {
      uint256 strengh;
      uint256 speed;
      uint256 stamina;
      string name;
   }

   Character[] public characters;

   mapping(bytes32 => string) requestToCharacterName;
   mapping(bytes32 => address) requestToSender;
   mapping(bytes32 => uint256) requestToTokenId;


   constructor(bytes32 _keyHash, address _vrfCoordinatorAddress, address _linkTokenAddress) 
   ERC721("BloodzNZBS", "BLDZ") 
   VRFConsumerBase(_vrfCoordinatorAddress, _linkTokenAddress)
   {
      vrfCoordinator = _vrfCoordinatorAddress;
      keyHash = _keyHash;
      fee = 0.1 * 10**18; //0.1 LINK
   }

   function requestNewRandomCharacter(uint256 userProviderSeed, string memory name) public returns(bytes32) {
      bytes32 requestId = requestRandomness(keyHash, fee); //, userProviderSeed);
      requestToCharacterName[requestId] = name;
      requestToSender[requestId] = msg.sender;
      return requestId;
   }

   function fulfillRandomness(bytes32 requestId, uint256 randomNumber) internal override {
      uint256 newId = characters.length;
      uint256 strengh = (randomNumber % 100);
      uint256 speed = ((randomNumber % 10000) / 100);
      uint256 stamina = ((randomNumber % 1000000) / 10000);

      characters.push(
         Character(
            strengh,
            speed,
            stamina,
            requestToCharacterName[requestId]
         )
      );
      _safeMint(requestToSender[requestId], newId);
   }

   function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
      require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: TRANSFER CALLER IS NOT OWNER NOT APPROVED");
      _setTokenURI(tokenId, _tokenURI);
   }
}

 