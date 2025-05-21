import type { Config } from "~/types";
import { defu } from "defu";
import { workspace } from "vscode";
import { CONFIG_ROOT, ConfigKey } from "~/constants";
import { defaultConfig } from "~/defaults";

export function getConfig(): Partial<Config> {
	const config = workspace.getConfiguration(CONFIG_ROOT);

	return {
		hidesExplorerArrows: config.get(ConfigKey.HidesExplorerArrows),
		outlineFolders: config.get(ConfigKey.OutlineFolders),
		associations: {
			languageIds: config.get(ConfigKey.AssociationsLanguages, {}),
			fileExtensions: config.get(ConfigKey.AssociationsExtensions, {}),
			fileNames: config.get(ConfigKey.AssociationsFiles, {}),
			folderNames: config.get(ConfigKey.AssociationsFolders, {}),
		},
	};
}

export function isDefaultConfig() {
	const config = defu(getConfig(), defaultConfig);

	return JSON.stringify(config) === JSON.stringify(defaultConfig);
}
