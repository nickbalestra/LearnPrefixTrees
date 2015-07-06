describe('PrefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });

  it('should have properties named "children", "words" and "keys"', function() {
    expect(prefixTree.hasOwnProperty("children")).to.equal(true);
    expect(prefixTree.hasOwnProperty("words")).to.equal(true);
    expect(prefixTree.hasOwnProperty("keys")).to.equal(true);
  });

  it('it should handle numerical to letter conversion of phone inputs (T9-style texting)', function() {
    expect(prefixTree.keys['a']).to.equal(1);
    expect(prefixTree.keys['z']).to.equal(8);
  });

  it('should have methods named "insert" and "getSuggestions"', function() {
    expect(prefixTree.insert).to.be.a("function");
    expect(prefixTree.getSuggestions).to.be.a("function");
  });


  it('it should add "hello" to the tree', function() {
    var returned = prefixTree.insert("hello");
    expect(prefixTree.getSuggestions("32445").indexOf("hello") >= 0).to.equal(true);
  });

  it('it should add multiple words to the tree', function() {
    prefixTree.insert("hello");
    prefixTree.insert("hellooo");
    prefixTree.insert("hellloo");
    var suggestions  = prefixTree.getSuggestions("3244", 3);
    expect(suggestions.indexOf("hello") >= 0).to.equal(true);
    expect(suggestions.indexOf("hellloo") >= 0).to.equal(true);
    expect(suggestions.indexOf("hellooo") >= 0).to.equal(true);
  });

  it('it should suggest mutltple worlds', function() {
    prefixTree.insert("hello");
    prefixTree.insert("hellooo");
    prefixTree.insert("hellloo");
    var suggestions  = prefixTree.getSuggestions("3244", 4);
    expect(suggestions.length).to.equal(3);
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  xit('it should be case insensitive', function() {
    var returned = prefixTree.insert("hELlO");
    expect(prefixTree.getSuggestions("32445").indexOf("hello") >= 0).to.equal(true);
  });


  xit('it should be able to suggest only worlds with max 2 characters longer', function() {
    prefixTree.insert("hello");
    prefixTree.insert("helloo");
    prefixTree.insert("hellooo");
    var suggestions  = prefixTree.getSuggestions("3244", 2);
    expect(suggestions.length).to.equal(2);
  });

  xit('it should be able to suggest only worlds with max 3 characters longer', function() {
    prefixTree.insert("hello");
    prefixTree.insert("helloo");
    prefixTree.insert("hellooo");
    var suggestions  = prefixTree.getSuggestions("3244", 3);
    expect(suggestions.length).to.equal(3);
  });

});
