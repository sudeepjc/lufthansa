import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, resetWalletConnector } from '../helpers/connectors';
import { getTokenContract } from '../helpers/getTokenContract';
import { getOfferingContract } from '../helpers/getOfferingContract';
import React from 'react';

const Web3ReactConnectionComponent = () => {
	//connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 
	//web3react
	const getContractUsingWeb3React = async () => {
		try {
			const tokenContract = getTokenContract(web3reactContext.library, web3reactContext.account);
            console.log(tokenContract);
		} catch (ex) {
			console.log(ex);
			alert(ex);
		}
	};

	const disconnectMetamaskSimple = () => {
		try {
			web3reactContext.deactivate();
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react context
	const checkInfoSimple = async () => {
		try {
			console.log('web3reactContext');
			console.log(web3reactContext);
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react metamask
	const connectMetamaskSimple = async () => {
		try {
			await web3reactContext.activate(injected);
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react walletconnect
	const connectWalletConnectSimple = async () => {
		try {
			resetWalletConnector(walletconnect);
			await web3reactContext.activate(walletconnect);
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<div className="flex flex-col space-y-7 items-start pt-10 w-1/2 border-2 border-yellow-300">
			<h2>Web3React Control</h2>
			{web3reactContext.account ? <p>{web3reactContext.account}</p> : <p>Not connected</p>}
			<div className="flex space-x-3">
				<button
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					onClick={getContractUsingWeb3React}
				>
					Write To Contract Via Web3React
				</button>

				<button
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					onClick={checkInfoSimple}
				>
					Check web3react Context
				</button>
				<button
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					onClick={disconnectMetamaskSimple}
				>
					Disconnect Web3React
				</button>
			</div>
			<div className="flex space-x-3">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={connectMetamaskSimple}
				>
					Connect Metamask Via Web3-React
				</button>
			</div>
			<div className="flex space-x-3">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={connectWalletConnectSimple}
				>
					Connect walletconnect Via Web3-React
				</button>
			</div>
		</div>
	);
};
export default Web3ReactConnectionComponent;