const tickerSymbols = [];
const shares = [];

function getTickerSymbols(){
	return tickerSymbols;
}

function getShares(){
	return shares;
}

function isEmpty(){
	return shares.length == 0;
}

export default {getTickerSymbols, getShares, isEmpty}