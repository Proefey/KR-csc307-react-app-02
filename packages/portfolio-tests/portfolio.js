var shares = [];

function getShares(){
	return shares;
}

function isEmpty(){
	return shares.length == 0;
}

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
export default {getShares, isEmpty, setShares, uniqueShares}