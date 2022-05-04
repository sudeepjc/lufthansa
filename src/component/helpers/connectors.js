import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const RPC_URLS = {
    56: 'https://bsc-dataseed.binance.org/',
	97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 56, 97 ]
});


export const walletconnect = new WalletConnectConnector({
	rpc: {
		56: RPC_URLS[56],
		97: RPC_URLS[97]
	},
	qrcode: true,
	pollingInterval: 15000
});


export function resetWalletConnector(connector) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}