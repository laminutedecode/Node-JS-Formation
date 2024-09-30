const fs = require('fs')
const zlib = require('zlib')

const readableStream = fs.createReadStream('monFichier.txt', 'utf8')

const writableStream = fs.createWriteStream('monFichier.zip')

const gzipStream = zlib.createGzip();

readableStream.pipe(gzipStream).pipe(writableStream)