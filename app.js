const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = process.env.hostname || '0.0.0.0'
const PORT = process.env.PORT || 3000;
const { exists } = require('grunt');

console.log(`The port is:${PORT}`);

const server = http.createServer((req, res) => {
  console.log('Request for ' + req.url + ' by method ' + req.method);

  if (req.method == 'GET') {
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    console.log('fileUrl is:' + fileUrl);

    var filePath = path.resolve('./' + fileUrl);
    const fileExt = path.extname(filePath);

    console.log(`The ext for file ${filePath} is ${fileExt}`);

    if (fileExt == '.html') {
      fs.exists(filePath, (exists) => {
        if(!exists) {
          filePath = path.resolve('./404.html');
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      });
    }
    else if (fileExt == '.css') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.js') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.png') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/png');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.jpg') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/jpg');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.ico') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/ico');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.pdf') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/pdf');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.woff') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'font/woff');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.woff2') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'font/woff2');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.ttf') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'font/ttf');
      fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.svg') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/svg+xml');
      fs.createReadStream(filePath).pipe(res);
    }
  }
  else {
    filePath = path.resolve('./public/404.html');
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(filePath).pipe(res);
  }
});



// start the server listening for requests
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});