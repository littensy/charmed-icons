import type { Config, IconDefinitions, VscTheme } from "./types";
import { defu } from "defu";
import { defaultConfig } from "./defaults";

export function createTheme(overrides: Partial<Config>, iconDefinitions: IconDefinitions): VscTheme {
	const { associations, expandedFolders, hidesExplorerArrows } = defu(overrides, defaultConfig);

	const folderNamesExpanded = expandedFolders ? expanded(associations.folderNames) : associations.folderNames;

	return {
		hidesExplorerArrows,

		file: "_file",
		folder: "_folder",
		folderExpanded: expandedFolders ? "_folder_open" : "_folder",
		rootFolder: "_folder",
		rootFolderExpanded: expandedFolders ? "_folder_open" : "_folder",

		languageIds: associations.languageIds,
		fileExtensions: associations.fileExtensions,
		fileNames: associations.fileNames,

		folderNames: associations.folderNames,
		folderNamesExpanded,

		iconDefinitions,
	};
}

function expanded(folderNames: Record<string, string>) {
	const expandedFolderNames: Record<string, string> = {};
	for (const key in folderNames) {
		expandedFolderNames[key] = `${folderNames[key]}_open`;
	}
	return expandedFolderNames;
}
