import mut from './portfolio.js';

//Question #1
test('Testing Create Portfolio', () => {
	const init_length = 0;
	expect(mut.totalShares()).toBe(init_length);
});

//Question #2
test('Testing Is Empty', () => {
	expect(mut.isEmpty()).toBeTruthy();

	mut.setShares(["AMC"]);
	expect(mut.isEmpty()).toBeFalsy();
});

//Question #3
test('Testing Unique Shares', () => {
	mut.setShares([]);
	expect(mut.countUnique()).toBe(0);

	mut.setShares(["AMC"]);
	expect(mut.countUnique()).toBe(1);

	mut.setShares(["GME", "GME", "GME", "GME", "GME", "RBLX" 
		,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" 
		,"RBLX" ,"RBLX" ]);
	expect(mut.countUnique()).toBe(2);
});

//Question #4
test('Testing Adding Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 0);
	expect(mut.isEmpty()).toBeTruthy();

	const sharecount = 2;
	mut.addShares("AMC", sharecount);
	expect(mut.totalShares()).toBe(sharecount);
	expect(mut.uniqueShares()).toContain("AMC");

	//Should not add due to being an invalid token (Does not throw error)
	mut.addShares("", 1)
	expect(mut.totalShares()).toBe(sharecount);
});

//Question #5
test('Testing Selling Shares', () => {
	mut.setShares([]);
	//Interspercing Shares in the array
	mut.addShares("AMC", 1);
	mut.addShares("RBLX", 1);
	mut.addShares("AMC", 3);
	mut.addShares("RBLX", 2);
	mut.addShares("AMC", 1);
	mut.addShares("RBLX", 2);
	expect(mut.totalShares()).toBe(10);

	mut.sellShares("AMC", 0);
	expect(mut.totalShares()).toBe(10);

	mut.sellShares("AMC", 3);
	expect(mut.totalShares()).toBe(7);

	mut.sellShares("AMC", 2);
	expect(mut.totalShares()).toBe(5);

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

//Question #7:
test('Testing Keep Only Owned Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 2);
	mut.addShares("RBLX", 2);
	expect(mut.uniqueShares()).toContain("AMC");
	expect(mut.uniqueShares()).toContain("RBLX");

	mut.sellShares("AMC", 2);
	expect(mut.uniqueShares()).toContain("RBLX");
	expect(mut.uniqueShares().includes("AMC")).toBeFalsy();

});

//Question #8: Testing Throwing Error
test('Testing Selling Shares Error', () => {
	mut.setShares([]);
	mut.addShares("AMC", 1);
	mut.addShares("RBLX", 2);
	function overSellShares(sellShare, count){
		mut.sellShares(sellShare, count);
	}
	expect(() => {overSellShares("AMC", 2)}).toThrow('ShareSaleException');
	expect(() => {overSellShares("GME", 1)}).toThrow('ShareSaleException');
});
