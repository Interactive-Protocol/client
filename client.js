const Web3 = require("web3");
const contractABI = require("./InteractiveProtocolABI.json");

// Set up the Web3 provider
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

// Define the contract address and ABI
const contractAddress = "CONTRACT_ADDRESS"; // Replace with the actual contract address
const abi = contractABI; // Replace with the actual contract ABI

// Create an instance of the contract
const contract = new web3.eth.Contract(abi, contractAddress);

// Submit a task to the contract
async function submitTask(script) {
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0]; // Assuming the user is the first account

  try {
    const result = await contract.methods.submitTask(script).send({ from: user });
    console.log("Task submitted. Task ID:", result.events.TaskSubmitted.returnValues.taskId);
  } catch (error) {
    console.error("Failed to submit task:", error);
  }
}

// Bid for a task
async function bidForTask(taskId, bidAmount) {
  const accounts = await web3.eth.getAccounts();
  const node = accounts[1]; // Assuming the node is the second account

  try {
    const result = await contract.methods.bidForTask(taskId, bidAmount).send({ from: node });
    console.log("Bid submitted for Task ID:", result.events.TaskBid.returnValues.taskId);
  } catch (error) {
    console.error("Failed to submit bid:", error);
  }
}

// Complete a task
async function completeTask(taskId, result) {
  const accounts = await web3.eth.getAccounts();
  const node = accounts[1]; // Assuming the node is the second account

  try {
    const result = await contract.methods.completeTask(taskId, result).send({ from: node });
    console.log("Task completed for Task ID:", result.events.TaskCompleted.returnValues.taskId);
  } catch (error) {
    console.error("Failed to complete task:", error);
  }
}

// Get task details
async function getTaskDetails(taskId) {
  try {
    const result = await contract.methods.getTaskDetails(taskId).call();
    console.log("Task details for Task ID:", taskId);
    console.log("User:", result.user);
    console.log("Script:", result.script);
    console.log("Bid Amount:", result.bidAmount);
    console.log("Selected Node:", result.selectedNode);
    console.log("Is Completed:", result.isCompleted);
    console.log("Result:", result.result);
  } catch (error) {
    console.error("Failed to get task details:", error);
  }
}

// Example usage
submitTask("Example script");
bidForTask(1, 10);
completeTask(1, "Example result");
getTaskDetails(1);
