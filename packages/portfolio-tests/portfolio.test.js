import mut from './portfolio.js';

//Question #1
test('Testing Create Portfolio', () => {
	expect(mut.totalShares()).toBe(0);
});

//Question #2
test('Testing Creation Is Empty', () => {
	expect(mut.isEmpty()).toBeTruthy();
});

test('Testing Creation Can Be Non-Empty', () => {
	mut.setShares(["AMC"]);

	expect(mut.isEmpty()).toBeFalsy();
});

//Question #3
test('Testing Unique Shares With Empty Portfolio', () => {
	mut.setShares([]);

	expect(mut.countUnique()).toBe(0);
});

test('Testing Unique Shares With Single Item', () => {
	mut.setShares(["AMC"]);

	expect(mut.countUnique()).toBe(1);
});

test('Testing Unique Shares With Multiple Items', () => {
	mut.setShares(["GME", "GME", "GME", "GME", "GME", "RBLX" 
		,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" ,"RBLX" 
		,"RBLX" ,"RBLX" ]);

	expect(mut.countUnique()).toBe(2);
});

//Question #4
test('Testing Adding No Shares', () => {
	mut.setShares([]);
	mut.addShares("AMC", 0);

	expect(mut.totalShares()).toBe(0);
});

test('Testing Adding Some Shares', () => {
	const sharecount = 2;
	mut.setShares([]);
	mut.addShares("AMC", sharecount);

	expect(mut.totalShares()).toBe(sharecount);
	expect(mut.getShares()).toContain("AMC");
});

test('Testing Adding An Invalid Share', () => {
	mut.setShares([]);
	mut.addShares("", 1);

	expect(mut.totalShares()).toBe(0);
});

//Question #5
test('Testing Selling No Shares', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "AMC", 
		"AMC", "RBLX", "RBLX", "AMC", 
		"RBLX", "RBLX"]);
	mut.sellShares("AMC", 0);

	expect(mut.totalShares()).toBe(10);
});

test('Testing Selling Some Shares', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "AMC", 
		"AMC", "RBLX", "RBLX", "AMC", 
		"RBLX", "RBLX"]);
	mut.sellShares("AMC", 3);

	expect(mut.totalShares()).toBe(7);
});

test('Testing Selling All Shares', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "AMC", 
		"AMC", "RBLX", "RBLX", "AMC", 
		"RBLX", "RBLX"]);
	mut.sellShares("AMC", 5);
	mut.sellShares("RBLX", 5);

	expect(mut.totalShares()).toBe(0);
});

//Question #6
test('Testing Count Shares Where There Are None', () => {
	mut.setShares(["AMC", "AMC", "AMC", "AMC", "AMC"]);

	expect(mut.countShares("GME")).toBe(0);
});

test('Testing Count Shares Where There Are Some', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "RBLX", "AMC", 
		"RBLX", "AMC", "RBLX", "AMC"]);

	expect(mut.countShares("AMC")).toBe(5);
});

//Question #7:
test('Testing Keeps Partially Owned Shares', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "RBLX"]);
	mut.sellShares("AMC", 1);

	expect(mut.getShares()).toContain("AMC");
	expect(mut.getShares()).toContain("RBLX");

});

test('Testing Does Not Keep Sold Shares', () => {
	mut.setShares(["AMC", "RBLX", "AMC", "RBLX"]);

	mut.sellShares("AMC", 2);

	expect(mut.getShares()).toContain("RBLX");
	expect(mut.getShares().includes("AMC")).toBeFalsy();

});

//Question #8: Testing Throwing Error
test('Testing Selling Shares Error If Selling A Non-Owned Stock', () => {
	mut.setShares(["RBLX", "AMC", "RBLX"]);
	function overSellShares(sellShare, count){
		mut.sellShares(sellShare, count);
	}

	expect(() => {overSellShares("GME", 1)}).toThrow('ShareSaleException');
});

test('Testing Selling Shares Error If Selling Too Much Of A Stock', () => {
	mut.setShares(["RBLX", "AMC", "RBLX"]);
	function overSellShares(sellShare, count){
		mut.sellShares(sellShare, count);
	}

	expect(() => {overSellShares("AMC", 2)}).toThrow('ShareSaleException');
});
