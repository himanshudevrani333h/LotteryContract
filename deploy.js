require("dotenv").config();
const HDwalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {interface, bytecode} = require("./compile");
const provider = new HDwalletProvider(
    process.env.MNEMONIC_PHRASE,
    process.env.BSC_TESTNET_API
)

const web3 = new Web3(provider)

// console.log("abi",interface);
// console.log("bytecode",bytecode);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
  
    console.log('Attempting to deploy from account', accounts[2]);
    console.log("account",accounts[2]);
    const result = await new web3.eth.Contract(interface)
      .deploy({ data: bytecode })
      .send({ gas: '10000000', from: accounts[2] });
  
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
    
  };
  deploy();

  // First Deployed @rinkbay testnet @address 0x05C4761173C94f393A38E9ac9be273aa8712DA0c Inbox.sol
  // Second deployed @bsctestnet @address 0x7BE7F21791596869176A61bCEd2Bc47577f41424  Inbox.sol

  // Lottery.sol contract deployed @bsctestnet @address 0x0478783153f0bA24c1daE810f0a432562dc80113   Lottery.sol

  // CroudFunding Contract deployed @bsctestnet @address 0x71bFd880a27c91F836BC4eeDEC0fdAe0E2a04952

  // ERC20 Token ie., HDT token deployed @bsctestnet @address 0x6E088506919d048d820245603ecCE3d48c8347f2