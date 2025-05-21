import type { Config } from "~/types";
import { fileExtensions, fileNames, languageIds } from "./file-icons";
import { folderNames } from "./folder-icons";

export * from "./file-icons";
export * from "./folder-icons";

export const defaultConfig: Config = {
	hidesExplorerArrows: false,
	outlineFolders: "when-expanded",
	associations: {
		languageIds,
		fileExtensions,
		fileNames,
		folderNames,
	},
};
