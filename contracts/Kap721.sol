// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Kap721 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct NFT {
        uint256 tokenId;
        string tokenURI;
    }

    NFT[] public nfts;

    constructor() ERC721("Electronically Manage Certificates", "EMC") {}

    function NFTEservice(
        address player,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();

        NFT memory newNFT = NFT(newItemId, tokenURI);
        nfts.push(newNFT);

        return newItemId;
    }

    function countNFTs() public view returns (uint256) {
        return nfts.length;
    }

    function getAllNFTs() public view returns (NFT[] memory) {
        return nfts;
    }
}
