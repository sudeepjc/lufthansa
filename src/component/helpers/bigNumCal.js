import { create, all } from 'mathjs';

const config = { };
const math = create(all, config);

const getRewardPerSecond = (currentReward, amount, apy) => {
	const currentRewardAmount = math.bignumber(currentReward);
	const stakedAmount = math.bignumber(amount);
	const apyValue = math.bignumber(apy);
	const tmpA = math.multiply(stakedAmount, apyValue);
	const rewardPerSecond = math.divide(tmpA, math.bignumber('8640000'));
	const rewardForRequest = math.add(currentRewardAmount, rewardPerSecond);
	console.log(rewardForRequest.toString());
	console.log(rewardForRequest.toString().split('.')[0]);
	return (rewardForRequest.toString().split('.')[0]);
};

const getBNBValue = (tokenRate, tokenCount) => {
    const one = math.bignumber(1);
    const count = math.bignumber(tokenCount);
    const _tokenRate = math.bignumber(tokenRate);
    const _rate = math.divide(one, _tokenRate);
    const result = math.multiply(_rate, count);
    return (result.toString());
};

const getPriceInBNB = (tokenRate) => {
    const one = math.bignumber(1);
    const _tokenRate = math.bignumber(tokenRate);
    const _rate = math.divide(one, _tokenRate);
    return (_rate.toString());
}

const getPriceInUSD = (tokenRate, price) => {
    const _price = math.bignumber(price);
    const _tokenRate = math.bignumber(tokenRate);
    const _rate = math.divide(_price, _tokenRate);
    return (_rate.toString());
}

const getUSDValue = (tokenRate, price, tokenCount) => {
    const _price = math.bignumber(price);
    const count = math.bignumber(tokenCount);
    const _tokenRate = math.bignumber(tokenRate);
    const _rate = math.divide(_price, _tokenRate);
    const result = math.multiply(_rate, count);
    return (result.toString());
}

export {getBNBValue, getUSDValue, getPriceInBNB, getPriceInUSD};
