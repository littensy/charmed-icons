import type { ExtensionContext } from "vscode";
import { Uri } from "vscode";
import { IconVariant } from "./constants";
import { createTheme } from "./themes";
import { getConfig } from "./utils/config";
import { getIconDefinitions } from "./utils/definitions";
import { writeJsonFile } from "./utils/interactions";

export async function updateThemes(context: ExtensionContext) {
	const config = getConfig();

	return Promise.all(Object.values(IconVariant).map(async (variant) => {
		const theme = createTheme(config, await getIconDefinitions(context, variant));
		const path = Uri.joinPath(context.extensionUri, "dist", "themes", variant, "theme.json");

		return writeJsonFile(path, theme);
	}));
}
