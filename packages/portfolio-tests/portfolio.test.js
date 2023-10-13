import mut from './portfolio.js';

//Question #1
test('Testing Create Portfolio', () => {
	const init_length = 0;
	const gotTickerSymbols = mut.getTickerSymbols();
	const gotShares = mut.getShares();
	expect(gotTickerSymbols.length).toBe(init_length);
	expect(gotShares.length).toBe(init_length);
});

//Question #2 (Shares and TickerSymbols can be manually filled to show it produces a false)
test('Testing Is Empty', () => {
	expect(mut.isEmpty()).toBeTruthy();
});