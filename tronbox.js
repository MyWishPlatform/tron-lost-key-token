module.exports = {
  networks: {
    testnet: {
      privateKey: process.env.PK,
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "http://127.0.0.1:9090",
      network_id: "*"
    },
    compilers: {
        solc: {
            version: '0.4.25' // for compiler version
        }
    }
  },
  solc: {
      optimizer: {
          enabled: true, // enable solc optimize, default: false
          runs: 200
      }
  }
};
