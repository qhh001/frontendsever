var http = require("http");
var Api = require("./api.js").Api;

var api = new Api();
var server = http.createServer();
server.on("request", function(request, response) {
	api.dispatch(request, response, __dirname);
});
server.listen(7390);

console.log("-- file api server is running at 7390 port.\n");