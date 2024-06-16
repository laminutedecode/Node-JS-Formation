const iconv = require('iconv-lite')

const isoString = 'Café au lait: café:☕ '

console.log(isoString);

const utf8String = iconv.decode(Buffer.from(isoString, 'binary'), 'iso-8859-1').toString('utf-8')

console.log(utf8String);