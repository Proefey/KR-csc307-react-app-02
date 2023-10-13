var shares = [];

//Returns full list of shares
function getShares(){
	return shares;
}

//Returns number of shares in total
function totalShares(){
	return shares.length;
}

//Returns a true if no shares are owned
function isEmpty(){
	return shares.length == 0;
}

//Sets list of shares to a new list, used for testing purposes only
function setShares(newShares){
	shares = newShares;
}

//Returns a list of unique shares
function uniqueShares(){
	var unique = [];
	shares.forEach((share) =>{
		if(!unique.includes(share) && share.length > 0) unique.push(share)
	});
	return unique;
}

//Returns a count of unique shares
function countUnique(){
	return uniqueShares().length
}

//Adds shares to the shares list
function addShares(share, count){
	if(share.length < 1) return;
	for(let i = 0; i < count; i++) shares.push(share);
	return;
}

//Sells shares from the shares list, throws ShareSaleException if invalid arguements
function sellShares(sellshare, count){
	const totalcount = countShares(sellshare);
	if(totalcount < count) {
		throw new Error('ShareSaleException');
	}
	var sellcount = 0;
	for(let i = shares.length - 1; i >= 0; i--){
		if(sellcount >= count) break;
		if(shares[i] === sellshare){
			sellcount ++;
			shares.splice(i, 1);
		}
	}
	return;
}

function countShares(countshare){
	var count = 0;
	shares.forEach((share) => {
		if(share === countshare) count ++;
	});
	return count;
}

export default {getShares, isEmpty, setShares, 
	totalShares, uniqueShares, addShares, 
	sellShares, countUnique, countShares}