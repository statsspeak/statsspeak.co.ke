/** @type {import("prettier").Config} */
export default {
	semi: true,
	trailingComma: "all",
	singleQuote: false,
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	bracketSpacing: true,
	arrowParens: "avoid",
	proseWrap: "preserve",
	endOfLine: "lf",
	plugins: ["prettier-plugin-astro"],
};
