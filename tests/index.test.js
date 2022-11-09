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
