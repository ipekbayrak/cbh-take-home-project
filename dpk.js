const crypto = require("crypto");

/**
 * create sha-3 512 bit hex hash of given string input
 * @param {String} data 
 * @returns hex string
 */
const Sha3_512BitHex = function (data) {
  return crypto.createHash("sha3-512").update(data).digest("hex")
}

/**
 * determine partition key
 * @param {*} event 
 * @returns partition key according to given input.
 */
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // create hash of input
  if (event) {
    const data = JSON.stringify(event);
    candidate = Sha3_512BitHex(data);
  }
  
  // use predefinde partition key if given
  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  }

  // if given input is not string convert it to string
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // if given input is false or undefined use trivial partition key
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  // if given predefined partition key is longer than max key length, hash it
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = Sha3_512BitHex(candidate);
  }

  return candidate;
};