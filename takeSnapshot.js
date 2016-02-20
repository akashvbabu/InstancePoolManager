var page = require('webpage').create(); //require the webpage from phantom library
var system = require('system'); //use system to read the arguments from the main process
page.viewportSize = { width: 1920, height: 1080 };
page.clipRect = { top: 0, left: 0, width: 1920, height: 1080 };
var url = system.args[1];
page.open(url, function() {
  //wait for 3 seconds for the page to load completely
  setTimeout(function(){
    page.render('sample.png'); //use the render method to store in png format in the same folder as the phantom script
    phantom.exit(); //exit after taking snapshot
  },3000);
});
