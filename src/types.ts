export interface Config {
	hidesExplorerArrows: boolean;
	outlineFolders: "when-expanded" | "always" | "never";
	associations: {
		languageIds: Record<string, string>;
		fileExtensions: Record<string, string>;
		fileNames: Record<string, string>;
		folderNames: Record<string, string>;
	};
}

export interface IconDefinitions {
	[key: string]: { iconPath: string };
}

export interface VscTheme {
	hidesExplorerArrows: boolean;
	file: string;
	folder: string;
	folderExpanded: string;
	rootFolder: string;
	rootFolderExpanded: string;
	languageIds: Record<string, string>;
	fileExtensions: Record<string, string>;
	fileNames: Record<string, string>;
	folderNames: Record<string, string>;
	folderNamesExpanded: Record<string, string>;
	iconDefinitions: IconDefinitions;
}
