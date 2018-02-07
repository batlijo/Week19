log(name); // undefined

var tinyize = function(undefined) {

//your sccope is bound to your functions

  log(name); // output: undefined or maybe Rick

  log(myName); // output: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // Tiny Rick
  return myName;
};

var name = tinyize("Rick"); //hoisting in javascript
log(name); // output: Tiny Rick!
log(myName); // output: undefined

log(i); // output: undefined because it hasn't been assigned
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 5 [because this is asynchronous]
  }, 100);
}
log(i); // output: 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
