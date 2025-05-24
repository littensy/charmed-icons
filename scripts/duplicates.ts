import process from "node:process";
import { fileIcons, folderIcons } from "~/defaults";

const languageCounts: Record<string, number> = {};
const fileExtensionCounts: Record<string, number> = {};
const fileNameCounts: Record<string, number> = {};
const folderNameCounts: Record<string, number> = {};

for (const { languages = [], extensions = [], names = [] } of Object.values(fileIcons)) {
	for (const language of languages) {
		languageCounts[language] = (languageCounts[language] ?? 0) + 1;
	}
	for (const extension of extensions) {
		fileExtensionCounts[extension] = (fileExtensionCounts[extension] ?? 0) + 1;
	}
	for (const name of names) {
		fileNameCounts[name] = (fileNameCounts[name] ?? 0) + 1;
	}
}

for (const names of Object.values(folderIcons)) {
	for (const name of names) {
		folderNameCounts[name] = (folderNameCounts[name] ?? 0) + 1;
	}
}

let passed = true;

function checkDuplicates(
	counts: Record<string, number>,
	type: string,
) {
	for (const [key, count] of Object.entries(counts)) {
		if (count > 1) {
			console.error(`Duplicate ${type} found: ${key} (${count})`);
			passed = false;
		}
	}
}

checkDuplicates(languageCounts, "language");
checkDuplicates(fileExtensionCounts, "file extension");
checkDuplicates(fileNameCounts, "file name");
checkDuplicates(folderNameCounts, "folder name");

if (passed) {
	console.log("No duplicates found.");
}
else {
	console.error("Duplicates found. Please check the console output.");
	process.exit(1);
}
