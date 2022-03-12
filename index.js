#!/usr/bin/node

let http = require("http");
let fs = require("fs");

console.log("Iniciando...");

let http_server = http.createServer(function(req, res){
	console.log(req.url);

	let archivo = "index.html";
	if (req.url != "/") {
		archivo = req.url.substring(1);

	}

	fs.readFile(archivo, function(error, data){
		if (error) {
			console.log("error");
			return;
		}
		res.writeHead(200);
		res.end(data);
	});

}).listen(1095);
