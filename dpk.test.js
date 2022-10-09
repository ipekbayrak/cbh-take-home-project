const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("cover candidate test", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'test'});
    expect(trivialKey).toBe("test");
  });


  it("cover candidate longer than 512 bit", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'});
    expect(trivialKey).toBe("ef697ced548b63a77f8c71b22ba5d168d064ceae56b2938aefb26bb4a7f13d424b0b6a9a4fe160f2ec80bc90140b416dd282568a40b146ee13fb4e06341c5a43");
  });


  it("cover input test", () => {
    const trivialKey = deterministicPartitionKey('test');
    expect(trivialKey).toBe("0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8");
  });

  it("cover input 0", () => {
    const trivialKey = deterministicPartitionKey('0');
    expect(trivialKey).toBe("5ae8f97ede3b9ae9f4b496c125d45d34edf13ce2f9e29c1c085ae0f499820173b86d731c4ca453d2e119b4ff63d3afd3ed5fdb9753fe222ef300d4f465f522ea");
  });

  it("cover json {0:'0'}", () => {
    const trivialKey = deterministicPartitionKey({0: '0'});
    expect(trivialKey).toBe("d7df413f1879324d1d0fe733de83d4127e475d31402af3268c692c9ff7a90bb82c9d1ca041d52e1e87aebf1207f4349814dde793a8dd105101285306f718d14b");
  });

  it("cover input false should return '0'", () => {
    const trivialKey = deterministicPartitionKey(false);
    expect(trivialKey).toBe("0");
  });

  it("cover input true'", () => {
    const trivialKey = deterministicPartitionKey(true);
    expect(trivialKey).toBe("ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a");
  });

  it("cover input array ['test']", () => {
    const trivialKey = deterministicPartitionKey(["test"]);
    expect(trivialKey).toBe("ee661fed9ce76b6aa8ac2d60a920d84d4d26078c144ec5508a30eac832837f27eb02776cc33f9613972233d78e69dc02da8b5576bb5a3eb207afa4b44b332d11");
  });

  it("cıver input longer than 512 bit", () => {
    const trivialKey = deterministicPartitionKey('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest');
    expect(trivialKey).toBe("b8fe3324b83bcbcb33f76c4b5ca7c463eff04637174741c6e8cb706c44b050bb752abe67c310a539862bfe915d3ddc62c390722d8ceaeaf221e7673395d02266");
  });
});
