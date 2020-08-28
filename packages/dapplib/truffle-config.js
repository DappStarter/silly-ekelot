require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stone remember noble mistake injury light army gather'; 
let testAccounts = [
"0x96f3d4ebfe642d71e13b5cf2004b633064bdae2170083fd6fdd3b41164044d74",
"0x4f11857ffd88c65f2b2d7bea65e4ead5e6b8b1ee504ea0d3698ce88d5981534b",
"0xc2a4515c7a4c2d5dba7d8c641d8463bc8043841b82fd57cced5cbe341d665831",
"0xae8dd397479038976112ba21438beb46a7f9a0e6dac4d5481d1b8cc1dc98d771",
"0x356bf97326d5d5be6f58d28e2f694478861b331504649f230e83f6bf3cb41fe4",
"0x747298d8364c2e7c3d9ac123b1b594a9d4cee9372239a3b5d438a59ddac5a7dd",
"0x252b33242194a95fefc34ee6e6cf1647121d4bfaa9787ce85871c5558f3d4f15",
"0xdba4677291d8734cce733426ea43a0d9edae60c00b350c6b14f20c461191c9d6",
"0x2fab5a7ca2160694111942f659a2ef4d981922872bc179d9fc75293cf3327fa2",
"0xfc29935d199bea5c59238c9f186f034d44e8d152fcd7bacf1793e7652453e1be"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
