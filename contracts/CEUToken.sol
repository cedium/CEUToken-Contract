pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";



contract CEUToken is PausableToken{
    string public name = "Cedium";
    string public symbol = "CEU";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 400000000 * (10 ** uint256(decimals));

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }
}

