require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember common half knife flip slab'; 
let testAccounts = [
"0x22d35cfe29da695d62535878cc8fcc3ea85f4e3c40af831f81601dd52cc177ec",
"0xe8de1c81ea1159488f71a9f707eb57da202553990e92a14a82a9dda852c3832e",
"0xcf0fe2723d1a2c893cadd34e2f5f2a3f940dc678bd42625f48cd8dc26cfe673e",
"0x21a43876892bc8382e4d8934dc5478dd4808456e78418a384c93a54548fd415e",
"0x0649ac741d4235c0a806e598d9c14b69a47988535334146415593b9c7f3d9793",
"0x7a88bebeaea3b62726e9fb6617a2046ec6181a59ca096159b8b0ea4b1ace82da",
"0x52accec8d895a1847dd062f5fe86291819bca758ab895a5f37c6240242e3e204",
"0x9e8cc14e9052d1f03bba7fe1f6877a23559e8eadd373ffdf45ffa76337abff3d",
"0xc0912ac39f200eaff13a457db631b0e5f58564ba3ad44854595e5d9dde4330af",
"0x26363c9f750fa2aedb7223dc7a8051321ba383c776f074c85567df96ad64efb2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

