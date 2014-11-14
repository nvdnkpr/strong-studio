var split = require('split');
var express = require('express');
var spawn = require('child_process').spawn;
var server = express();
var isRunning = false;
var PORT = null;
var pm = null;
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

module.exports = server;

server.use(function ensureStarted(req, res, next) {
  if(isRunning) {
    next();
  } else {
    start(next);
  }
});

server.use(function startProxy(req, res, next) {
  req.url = req.url.replace('/process-manager', '/');
  proxy.web(req, res, {
    target: 'http://localhost:' + PORT
  });
});

function start(next) {
  var args = ['pm', '--listen', '0'];
  pm = spawn('slc', args);
  pm.stdout.pipe(split()).on('data', function(line) {
    console.log(line);
    PORT = parsePort(line);
    if(PORT) {
      isRunning = true;
      next();
    }
  });
}

function parsePort(line) {
  var match = line.match(/listen on (\d+)/);
  if(match) {
    return match[1];
  }
}
