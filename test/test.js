// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
// const {interface, bytecode} = require('../compile')


// // console.log("abi -->",interface);
// // console.log("bytecode -->",bytecode);

// // class Car{

// //     park(){
// //         return "parked";
// //     }

// //     drive(){
// //         return "go go go";
// //     }
// // }
// // let car;
// // beforeEach(async()=>{
// //        car = new Car();
// // })

// // describe('cars',()=>{

  
// //     it('parked',()=>{

// //         assert.equal(car.park(),'parked');
// //     })

// //     it('driving',()=>{

// //         assert.equal(car.drive(),'go go go');
// //     })
// // })

// let accounts;
// let inbox;

// beforeEach(async()=>{
//  accounts = await web3.eth.getAccounts();
//  inbox = await new web3.eth.Contract(interface).deploy({data:bytecode,arguments:['Hi there!']}).send({from:accounts[0],gas:'1000000'});

 
// });

// describe('Inbox contact',()=>{
//   it('deploy a contract',()=>{
//    assert.ok(inbox.options.address);
//   })

//   it("message method test",async()=>{
//     const message = await inbox.methods.message().call();
//        assert.equal(message,"Hi there!");
//   })

//   it("update contract",async()=>{
//     await inbox.methods.setMessage("Bye!").send({from:accounts[0]});
//     const message = await inbox.methods.message().call();
//     assert.equal(message,"Bye!");
//   })
// });



