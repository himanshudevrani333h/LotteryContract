const path = require("path");
const fs = require("fs");
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, "Contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, 'utf-8');

// console.log(solc.compile(source, 1));

let input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 


// console.log("Bytecode ", JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox["evm"].bytecode["object"]);

// console.log("compiled",JSON.parse(solc.compile(JSON.stringify(input))).contracts)
module.exports = { bytecode : JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery["evm"].bytecode["object"],
                   interface: JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery.abi
                }
