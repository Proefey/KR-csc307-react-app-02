import mut from './portfolio.js';

test('Testing Create Portfolio', () => {
	const init_length = 0;
	const gotTickerSymbols = mut.getTickerSymbols();
	const gotShares = mut.getShares();
	expect(gotTickerSymbols.length).toBe(init_length);
	expect(gotShares.length).toBe(init_length);
});