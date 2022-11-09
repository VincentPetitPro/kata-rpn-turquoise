import test from "tape";
import { rpn } from "../src/index.js";

test(" '' should return [] ", (t) => {
	// given
	const input = "";
	const awaitedResult = [];

	// when
	const result = rpn(input);

	// then
	t.deepEqual(JSON.stringify(result), JSON.stringify(awaitedResult));

	t.end();
});

test(" '2' should return [2] ", (t) => {
	// given
	const input = "2";
	const awaitedResult = [2];

	// when
	const result = rpn(input);

	// then
	t.deepEqual(JSON.stringify(result), JSON.stringify(awaitedResult));

	t.end();
});
