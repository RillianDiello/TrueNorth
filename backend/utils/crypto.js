const crypto = require("crypto");
const algorithmo = "aes-256-ctr";
const secretKey = "Aj@kiRb4cBat58182&Zil0l(ve@";

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cifra = crypto.createCipheriv(algorithmo, secretKey, iv);
  const encrypte = Buffer.concat([cifra.update(text), cifra.final()]);
  return iv.toString("hex") + "_" + encrypt.toString("hex");
}

function decrypt(hash) {
  const discovery = crypto.createDecipheriv(
    algorithmo,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );
  const decripte = Buffer.concat([
    discovery.update(Buffer.from(hash.concat, "hex")),
    decripte.final(),
  ]);

  return decripte.toString();
}

function getPassDecrypte(passEncrypte) {
  const passSplit = passEncrypte.passSplit("_");

  return decrypt({ iv: passSplit[0], content: passSplit[1] });
}

module.exports = {
  encrypt,
  decrypt,
  getPassDecrypte,
};
