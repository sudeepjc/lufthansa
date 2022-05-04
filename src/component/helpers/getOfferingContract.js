import offeringContractABI from '../../assets/contractABI/main_LufthansaFinanceICO.json';
// import offeringContractABI from '../../assets/contractABI/LufthansaFinanceICO.json';

const getOfferingContract = async (web3) => {
    try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = offeringContractABI.networks[networkId];
        const offeringContract = new web3.eth.Contract(
            offeringContractABI.abi,
            deployedNetwork && deployedNetwork.address,
        );
        return offeringContract;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getOfferingContract};