var shares = [];

function getShares(){
	return shares;
}

function isEmpty(){
	return shares.length == 0;
}

//For testing Purposes Only
function setShares(newShares){
	shares = newShares;
}

function uniqueShares(){
	var unique = [];
	shares.forEach((share) =>{
		if(!unique.includes(share) && share.length > 0) unique.push(share)
	});
	return unique.length;
}

function addShares(share, count){
	for(let i = 0; i < count; i++) shares.push(share);
	return;
}

//Assumes Valid Share Name and Count
function sellShares(sellshare, count){
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

export default {getShares, isEmpty, setShares, uniqueShares, addShares, sellShares}