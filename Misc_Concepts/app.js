var buf =  new Buffer('Hello','utf8');
console.log(buf);
console.log(`Buffer Value : ${buf}`);
console.log(`Back to String : ${buf.toString()}`);
buf.write('wol');
console.log(`Back to String : ${buf.toString()}`);