const Web3 = require('web3');
const contractABI = require('./InteractiveProtocolABI.json');

const web3 = new Web3('http://localhost:8545');
const contractAddress = '0x123456789ABCDEF';
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to submit a task
async function submitTask(script) {
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0]; // Use the user's Ethereum address

    try {
        const result = await contract.methods.submitTask(script).send({ from: user });
        console.log('Task submitted successfully! Task ID:', result.events.TaskSubmitted.returnValues.taskId);
    } catch (error) {
        console.error('Error submitting task:', error);
    }
}

// Call the function to submit a task
submitTask('print("Hello, World!")');
