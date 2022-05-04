import tokenContractABI from '../../assets/contractABI/main_LufthansaFinanceToken.json';
// import tokenContractABI from '../../assets/contractABI/LufthansaFinanceToken.json';

const getTokenContract = async (web3) => {
    try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = tokenContractABI.networks[networkId];
        const tokenContract = new web3.eth.Contract(
            tokenContractABI.abi,
            deployedNetwork && deployedNetwork.address,
        );
        return tokenContract;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getTokenContract};