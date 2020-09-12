const bjs = require('bitcoinjs-lib');

const networks = Object.assign({
    mfcoin: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0476b21e,
            private: 0x0476ade4,
        },
        pubKeyHash: 0x33,
        scriptHash: 0x05,
        wif: 0xb3,
    }
}, bjs.networks);

bjs.networks.bitcoin = networks.mfcoin;

new Function('a', 'module.exports = a')(Object.assign({}, bjs, { networks }))
