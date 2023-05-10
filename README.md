# Interactive Protocol - Client

The client component of the Interactive Protocol allows users to submit computation tasks securely and interact with the decentralized network of nodes. It provides a user-friendly interface for task submission, monitoring task status, and retrieving computation results.

## Installation

1. Clone the repository: `git clone https://github.com/Interactive-Protocol/client.git`
2. Install the dependencies: `npm install`

## Configuration

1. Set the configuration options in the `.env` file. Specify the Ethereum network, contract address, and other relevant parameters.

## Usage

1. Start the client: `node client.js`
2. The client provides a command-line interface (CLI) for users to interact with the Interactive Protocol.
3. Users can submit their computation tasks by following the prompts and providing the necessary information such as the script to be executed.
4. The client will interact with the smart contract, submitting the task and monitoring its progress.
5. Once the computation is complete, users can retrieve the results securely.

## Customization

You can customize the client's behavior by modifying the code in the `index.js` file. This includes adding additional functionality, integrating with external systems, or enhancing the user interface.

## Dependencies

- Web3.js: Ethereum library for interacting with smart contracts
- Other dependencies (listed in package.json)

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
