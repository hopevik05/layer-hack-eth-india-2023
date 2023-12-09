// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    address public owner;
    mapping(address => bool) public whitelist;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    event AddressAdded(address indexed account);
    event AddressRemoved(address indexed account);

    constructor() {
        owner = msg.sender;
    }

    function addToWhitelist(address _account) external onlyOwner {
        require(_account != address(0), "Invalid address");
        require(!whitelist[_account], "Address is already whitelisted");

        whitelist[_account] = true;
        emit AddressAdded(_account);
    }

    function removeFromWhitelist(address _account) external onlyOwner {
        require(whitelist[_account], "Address is not whitelisted");

        whitelist[_account] = false;
        emit AddressRemoved(_account);
    }
}
