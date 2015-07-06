# LearnPrefixTrees
A testing-driven approach to learning how to implement Prefix Trees in JavaScript.

### Why should I use this?
If you want to learn how to make a prefix tree, of course!  This repo uses a test running html document, `SpecRunner.html`, to
double check your work and (hopefully) guide you through the process of creating your own prefix tree in javascript.  This
learning style has been unabashedly stolen from [Hack Reactor](http://www.hackreactor.com/), where I am currently a student, and from [Adam Van Antwerp](https://github.com/TheAdamizer) that is currenlty shepherding us at Hack Reactor.
Thanks for being awesome Hack Reactor! and Thanks for being awesome Adam!

Prefix Tree, also known as Trie, are fascinating data structures for storing strings or other sequences in a way that allows for a fast look-up. For the sake of the excercise we aim to implement a prefixTree that can handle autocomplete for T9-style texting.
For more information on this check out [my blog post](#####)
, where I give an explanation on their structure and outline some instances where a developer may find them useful.
 If you find that this not enough information to fully implement a PrefixTree, feel free to drop me a line and request some
 clarification and I'll do my best to update the post with the new details.

### How do I use this repo?
 First of all, fork this repo and clone it to your local machine (or just simply clone it directly if you don't want to use git
 to keep track of your progress).
 Open up SpecRunner.html in a browser and initially you're going to see a lot of red.  These are your failing tests that you
 should make pass!

 ![Failing SpecRunner](https://raw.githubusercontent.com/nickbalestra/LearnPrefixTrees/master/lib/img/prefixTreeFail.png)

 These tests require you to create a Prefix Tree object using the well used [pseudo-classical instantiation](http://nick.balestra.ch/2015/classes-and-instantiation-patterns-in-javascript/)
 pattern.  If this doesn't appeal to you, feel free to fork my repo and make one with tests assuming a different pattern.
 All of the work you need to do is within the src/prefixTree.js file.

Keep working to meet the specified tests.  If you need more clarification on what the tests are looking for, click on the
specific requirement in SpecRunner.html and it will show you the mocha tests that need to pass.

![Expanded requirement](https://raw.githubusercontent.com/nickbalestra/LearnPrefixTrees/master/lib/img/prefixTreeFailDetails.png)

Keep coding away and you'll start to see some green.  Eventually you'll have a SpecRunner.html that looks like this:

![Passing tests](https://raw.githubusercontent.com/nickbalestra/LearnPrefixTrees/master/lib/img/prefixTreePass.png)

and then you should have successfully implemented a a prefixTree !
