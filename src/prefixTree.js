// The PrefixTree that can handle autocomplete for T9-style texting
var keys = {
  'a': 2, 'b': 2, 'c': 2,
  'd': 3, 'e': 3, 'f': 3,
  'g': 4, 'h': 4, 'i': 4,
  'j': 5, 'k': 5, 'l': 5,
  'm': 6, 'n': 6, 'o': 6,
  'p': 7, 'q': 7, 'r': 7, 's': 7,
  't': 8, 'u': 8, 'v': 8,
  'w': 9, 'x': 9, 'y': 9, 'z': 9
};

var PrefixTree = function() {

};

// Your methods go here! Good luck!

// Traverse the tree to the node where the word should be inserted. If any
// needed nodes do not exist along the way, they are created.
PrefixTree.prototype.insert = function(word) {

};

// Traverse the tree based on the key digits in keyString, to find the node
// where relevant words are stored.
PrefixTree.prototype.getSuggestions = function(keyString, suggestionDepth) {

};