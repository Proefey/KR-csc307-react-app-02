import mut from './module.js';

test('Testing sum -- success', () => {
	const expected = 30;
	const got = mut.sum(12, 18);
	expect(got).toBe(expected);
});

test('Testing sum -- success', () => {
	const expected = -20;
	const got = mut.sum(-7, -13);
	expect(got).toBe(expected);
});

test('Testing sum -- success', () => {
	const expected = 0;
	const got = mut.sum(0, 0);
	expect(got).toBe(expected);
});

test('Testing div -- success', () => {
	const expected = 5;
	const got = mut.div(20, 4);
	expect(got).toBe(expected);
});

test('Testing div -- success', () => {
	const expected = -5;
	const got = mut.div(20, -4);
	expect(got).toBe(expected);
});

test('Testing div -- success', () => {
	const expected = -5;
	const got = mut.div(-20, 4);
	expect(got).toBe(expected);
});

test('Testing div -- success', () => {
	const expected = 5;
	const got = mut.div(-20, -4);
	expect(got).toBe(expected);
});

test('Testing containsNumber -- success', () => {
	const got = mut.containsNumber("12414");
	expect(got).toBeTruthy();
});

test('Testing containsNumber -- success', () => {
	const got = mut.containsNumber("ABC");
	expect(got).toBeFalsy();
});

test('Testing containsNumber -- success', () => {
	const got = mut.containsNumber("ABC0DEF");
	expect(got).toBeTruthy();
});

test('Testing containsNumber -- success', () => {
	const got = mut.containsNumber("");
	expect(got).toBeFalsy();
});

test('Testing containsNumber -- success', () => {
	const got = mut.containsNumber(" ");
	expect(got).toBeFalsy();
});