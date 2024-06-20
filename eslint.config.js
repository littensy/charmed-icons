import js from "@eslint/js"; 
import json from "eslint-plugin-json";

export default [
	js.configs.recommended,
	{
		files: ["**/*.json"],
		plugins: { json },
		processor: "json/json",
		"rules": {
			"json/*": ["error", {"allowComments": true}],
		},
	},
];
