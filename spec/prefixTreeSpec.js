describe('PrefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it('should have properties named "children", "words" and "keys"', function() {
    expect(prefixTree.hasOwnProperty("children")).to.equal(true);
    expect(prefixTree.hasOwnProperty("words")).to.equal(true);
  });

  it('it should handle numerical to letter conversion of phone inputs (T9-style texting)', function() {
    expect(keys['a']).to.equal(2);
    expect(keys['z']).to.equal(9);
  });

  it('should have methods named "insert" and "getSuggestions"', function() {
    expect(prefixTree.insert).to.be.a("function");
    expect(prefixTree.getSuggestions).to.be.a("function");
  });


  it('it should add "hello" to the tree', function() {
    var returned = prefixTree.insert("hello");
    expect(prefixTree.getSuggestions("43556").indexOf("hello") >= 0).to.equal(true);
  });

  it('it should add multiple words to the tree', function() {
    prefixTree.insert("hello");
    prefixTree.insert("hellooo");
    prefixTree.insert("hellloo");
    var suggestions  = prefixTree.getSuggestions("4355", 3);
    console.log(suggestions);
    expect(suggestions.indexOf("hello") >= 0).to.equal(true);
    expect(suggestions.indexOf("hellloo") >= 0).to.equal(true);
    expect(suggestions.indexOf("hellooo") >= 0).to.equal(true);
  });

  it('it should suggest mutltple worlds', function() {
    prefixTree.insert("hello");
    prefixTree.insert("hellooo");
    prefixTree.insert("hellloo");
    var suggestions  = prefixTree.getSuggestions("4355", 4);
    expect(suggestions.length).to.equal(3);
  });

  it('it should be case insensitive', function() {
    var returned = prefixTree.insert("hELlO");
    expect(prefixTree.getSuggestions("43556").indexOf("hello") >= 0).to.equal(true);
  });


  it('it should be able to suggest only worlds with max 2 characters longer', function() {
    prefixTree.insert("hello");
    prefixTree.insert("helloo");
    prefixTree.insert("hellooo");
    var suggestions  = prefixTree.getSuggestions("4355", 2);
    expect(suggestions.length).to.equal(2);
  });

  it('it should be able to suggest only worlds with max 3 characters longer', function() {
    prefixTree.insert("hello");
    prefixTree.insert("helloo");
    prefixTree.insert("hellooo");
    var suggestions  = prefixTree.getSuggestions("4355", 3);
    expect(suggestions.length).to.equal(3);
  });

});