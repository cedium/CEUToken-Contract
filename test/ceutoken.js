var Token = artifacts.require("CEUToken");

contract('Token', function(accounts) {
  it("should return the total supply", function() {
    var token;
    return Token.deployed().then(function(instance){
     token = instance;
     return token.totalSupply.call();
    }).then(function(result){
     assert.equal(result.toNumber(), 400000000*(10**18), 'total supply is wrong');
    })
  });
  it("should return the balance of token owner", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.balanceOf.call(accounts[0]);
    }).then(function(result){
      assert.equal(result.toNumber(), 400000000*(10**18), 'balance is wrong');
    })
  });
  it("should return the name of the token", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.name.call();
    }).then(function(result){
      assert.equal(result, 'Cedium', 'name is wrong');
    })
  });
  it("should return the symbol of the token", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.symbol.call();
    }).then(function(result){
      assert.equal(result, "CEU", 'Symbol is wrong');
    })
  });
  it("should return the decimals of the token", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.decimals.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 18, 'decimals count is wrong');
    })
  });
  it("should return the initial supply of the token", function() {
    var token;
    return Token.deployed().then(function(instance){
      token = instance;
      return token.INITIAL_SUPPLY.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 400000000*(10**18), 'Initial supply is wrong');
    })
  });
});
