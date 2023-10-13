import mut from './portfolio.js';

//Question #1
test('Testing Create Portfolio', () => {
	const init_length = 0;
	const gotShares = mut.getShares();
	expect(gotShares.length).toBe(init_length);
});

//Question #2
test('Testing Is Empty', () => {
	expect(mut.isEmpty()).toBeTruthy();
	mut.setShares(["AMC"]);
	expect(mut.isEmpty()).toBeFalsy();
});

//Question #3
test('Testing Unique Shares', () => {
	expect(mut.uniqueShares()).toBe(1);
	mut.setShares(["GME", "GME", "GME", "GME", "GME", "RBLX" 
		,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" 
		,"RBLX" ,"RBLX" ]);
	expect(mut.uniqueShares()).toBe(2);
	mut.setShares([]);
	expect(mut.uniqueShares()).toBe(0);
	mut.setShares([""]);
	expect(mut.uniqueShares()).toBe(0);
});