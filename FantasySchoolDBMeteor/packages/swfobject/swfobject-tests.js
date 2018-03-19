// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by swfobject.js.
import { name as packageName } from "meteor/bdernell:swfobject";

// Write your tests here!
// Here is an example.
Tinytest.add('swfobject - example', function (test) {
  test.equal(packageName, "swfobject");
});
