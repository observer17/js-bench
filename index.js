let pbRoot = null;

protobuf.load("./Lark.proto", function (err, root) {
  if (err) throw err;
  pbRoot = root;
}

function decode(buf) {
  const LarkMessage = root.lookupType("lakr.LarkMessage");
  var errMsg = LarkMessage.verify(payload);
  if (errMsg) throw Error(errMsg);
  var m = LarkMessage.create(message); // or use .fromObject if conversion is necessary
  return AwesomeMessage.decode(buffer);
}

function encode(message) {
  const LarkMessage = root.lookupType("lakr.LarkMessage");
  var errMsg = LarkMessage.verify(payload);
  if (errMsg) throw Error(errMsg);

  var m = LarkMessage.create(message);
  return LarkMessage.encode(message).finish();
}

const start = Date.now();
for (let i = 0; i < 10000; i++) {
  const message = {
    id: i,
    type: i % 5
  }
  const buf = encode(message);
  decode(buf);
}
console.error('run time', Date.now - start);

