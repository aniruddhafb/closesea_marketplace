//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

<<<<<<< HEAD
import "hardhat/console.sol";
=======
// import "hardhat/console.sol";
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    address payable owner;
    uint256 listPrice = 0.01 ether;

    struct ListedToken {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
    }

<<<<<<< HEAD
    event TokenListedSuccess (
=======
    event TokenListedSuccess(
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
        uint256 tokenId,
        address payable seller,
        address payable owner,
        uint256 price,
        bool currentlyListed
    );

    mapping(uint256 => ListedToken) private idToListedToken;

<<<<<<< HEAD
    constructor() ERC721("NFTMarketplace", "NFTM"){
        owner = payable(msg.sender);
    }

    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
=======
    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    function createToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createListedToken(newTokenId, price);
        return newTokenId;
    }

    function createListedToken(uint256 tokenId, uint256 price) private {
        require(msg.value == listPrice, "Please pay the listing price");
        require(price > 0, "Please make sure price is not a negative value");
<<<<<<< HEAD
        
        idToListedToken[tokenId] = ListedToken(tokenId, payable(address(this)), payable(msg.sender), price, true);
        _transfer(msg.sender, address(this), tokenId);

        emit TokenListedSuccess(tokenId, payable(address(this)), payable(msg.sender), price, true);        
    }

    function getAllNFTs() public view returns (ListedToken[] memory) {
        uint nftCount = _tokenIds.current();
        ListedToken[] memory tokens = new ListedToken[](nftCount);
        uint256 currentIndex = 0;

        for(uint i = 0; i < nftCount; i++) {
            uint256 currentId = i + 1;
            ListedToken storage currentItem = idToListedToken[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;         
        }
        return tokens;
    }
    
    function getMyNFTs() public view returns (ListedToken[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for(uint i = 0; i < totalItemCount; i++) {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender){
=======

        idToListedToken[tokenId] = ListedToken(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );
        _transfer(msg.sender, address(this), tokenId);

        emit TokenListedSuccess(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );
    }

    function getAllNFTs() public view returns (ListedToken[] memory) {
        uint256 nftCount = _tokenIds.current();
        ListedToken[] memory tokens = new ListedToken[](nftCount);
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < nftCount; i++) {
            uint256 currentId = i + 1;
            ListedToken storage currentItem = idToListedToken[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return tokens;
    }

    function getMyNFTs() public view returns (ListedToken[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                idToListedToken[i + 1].owner == msg.sender ||
                idToListedToken[i + 1].seller == msg.sender
            ) {
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
                itemCount++;
            }
        }

        ListedToken[] memory items = new ListedToken[](itemCount);
<<<<<<< HEAD
        for(uint i = 0; i < totalItemCount; i++) {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender){
                uint currentId = i + 1;
=======
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (
                idToListedToken[i + 1].owner == msg.sender ||
                idToListedToken[i + 1].seller == msg.sender
            ) {
                uint256 currentId = i + 1;
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
                ListedToken storage currentItem = idToListedToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
<<<<<<< HEAD
    
=======

>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
    function executeSale(uint256 tokenId) public payable {
        uint256 price = idToListedToken[tokenId].price;
        address seller = idToListedToken[tokenId].seller;

<<<<<<< HEAD
        require(msg.value == price, "Please submit the asking price to complete the order");
=======
        require(
            msg.value == price,
            "Please submit the asking price to complete the order"
        );
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464

        idToListedToken[tokenId].currentlyListed = false;
        idToListedToken[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);
        approve(address(this), tokenId);

        payable(owner).transfer(listPrice);
        payable(seller).transfer(msg.value);
    }

    function updateListPrice(uint256 _listPrice) public payable {
        require(owner == msg.sender, "Only owner can update the listing price");
        listPrice = _listPrice;
    }

<<<<<<< HEAD
    function getListPrice() public view returns (uint) {
        return listPrice;
    }

    function getListedIdToListedToken() public view returns (ListedToken memory) {
=======
    function getListPrice() public view returns (uint256) {
        return listPrice;
    }

    function getListedIdToListedToken()
        public
        view
        returns (ListedToken memory)
    {
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
        uint256 currentTokenId = _tokenIds.current();
        return idToListedToken[currentTokenId];
    }

<<<<<<< HEAD
    function getListedTokenForId(uint256 tokenId) public view returns (ListedToken memory) {
=======
    function getListedTokenForId(uint256 tokenId)
        public
        view
        returns (ListedToken memory)
    {
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
        return idToListedToken[tokenId];
    }

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 59fb9f6e49c792311668380ba65aac337a3bc464
