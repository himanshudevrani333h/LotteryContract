const path = require("path");
const fs = require("fs");
const solc = require('solc');

// const lotteryPath = path.resolve(__dirname, "Contracts", "Lottery.sol");
// const source = fs.readFileSync(lotteryPath, 'utf-8');

// const lotteryPath = path.resolve(__dirname, "Contracts", "CroudFunding.sol");
// const source = fs.readFileSync(lotteryPath, 'utf-8');
// console.log(solc.compile(source, 1));

const HDTPath = path.resolve(__dirname, "Contracts", "ERC20.sol");
const source = fs.readFileSync(HDTPath, 'utf-8');

let input = {
    language: 'Solidity',
    sources: {
        'ERC20.sol' : {
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
// console.log("compiled",JSON.parse(solc.compile(JSON.stringify(input))).contracts['ERC20.sol'].HDT.abi)

module.exports = {
                   bytecode : JSON.parse(solc.compile(JSON.stringify(input))).contracts['ERC20.sol'].HDT["evm"].bytecode["object"],
                   interface: JSON.parse(solc.compile(JSON.stringify(input))).contracts['ERC20.sol'].HDT.abi
                }
