import type { Config, IconDefinitions, VscTheme } from "./types";
import { defu } from "defu";
import { defaultConfig } from "./defaults";

export function createTheme(overrides: Partial<Config>, iconDefinitions: IconDefinitions): VscTheme {
	const {
		associations,
		outlineFolders,
		hidesExplorerArrows,
	} = defu(overrides, defaultConfig);

	const folderNamesExpanded = outlineFolders !== "never" ? expanded(associations.folderNames) : associations.folderNames;

	return {
		hidesExplorerArrows,

		file: "_file",
		folder: outlineFolders === "always" ? "_folder_open" : "_folder",
		folderExpanded: outlineFolders !== "never" ? "_folder_open" : "_folder",
		rootFolder: outlineFolders === "always" ? "folder_source_open" : "folder_source",
		rootFolderExpanded: outlineFolders !== "never" ? "folder_source_open" : "folder_source",

		languageIds: associations.languageIds,
		fileExtensions: associations.fileExtensions,
		fileNames: associations.fileNames,

		folderNames: outlineFolders === "always" ? folderNamesExpanded : associations.folderNames,
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
