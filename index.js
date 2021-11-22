const ethers = require('ethers');
const fs = require('fs');

const bytecode = fs.readFileSync('voting_sol_Voting.bin').toString()
const abi = JSON.parse(fs.readFileSync('voting_sol_Voting.abi').toString())

//connect to local RPC
const provider = new ethers.providers.JsonRpcProvider()
provider.listAccounts().then(result => console.log(result))

const signer = provider.getSigner(0)
const factory = new ethers.ContractFactory(abi, bytecode, signer)
let contract = null
factory.deploy([ethers.utils.formatBytes32String('Rama'), ethers.utils.formatBytes32String('Nick'), ethers.utils.formatBytes32String('Jose')]).then((c) => { 
    contract = c
})