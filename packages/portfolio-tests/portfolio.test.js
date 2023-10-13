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

//Question #4
test('Testing Adding Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 0);
	expect(mut.isEmpty()).toBeTruthy();
	const sharecount = 2;
	mut.addShares("AMC", sharecount);
	const gotShares = mut.getShares();
	expect(gotShares.length).toBe(sharecount);
	expect(mut.uniqueShares()).toBe(1);
});

//Question #5
test('Testing Selling Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 5);
	mut.addShares("RBLX", 5);
	var gotShares = mut.getShares();
	expect(gotShares.length).toBe(10);
	mut.sellShares("AMC", 0);
	gotShares = mut.getShares();
	expect(gotShares.length).toBe(10);
	mut.sellShares("AMC", 3);
	gotShares = mut.getShares();
	expect(gotShares.length).toBe(7);
	mut.sellShares("AMC", 2);
	gotShares = mut.getShares();
	expect(gotShares.length).toBe(5);
	mut.sellShares("RBLX", 5);
	expect(mut.isEmpty()).toBeTruthy();
});

//Question #6
test('Testing Count Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 5);
	mut.addShares("RBLX", 7);
	expect(mut.countShares("GME")).toBe(0);
	expect(mut.countShares("AMC")).toBe(5);
	expect(mut.countShares("RBLX")).toBe(7);
});