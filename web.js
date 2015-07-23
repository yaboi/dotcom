require('nodetime');
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express();

/* a badass express based router middleware (rewrites) for html5Mode angular apps - fedora style */
app.use(serveStatic(__dirname + '/dist'));
app.set('views', __dirname + '/dist/views');
app.get('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/dist"});
});

app.use(require('prerender-node').set('prerenderToken', 'xtC6Lsoww71XHb2J86uu'));
app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);