export function rpn(input) {
	let exp = input.split(" ");

	let stack = [];

	if (exp == "") {
		return stack;
	}

	if (typeof Number.parseInt(exp[0]) === "number") {
		stack.push(Number.parseInt(exp[0]));
		console.log(stack);
	}
}
