import type { ExtensionContext } from "vscode";
import { workspace } from "vscode";
import { CONFIG_ROOT } from "~/constants";
import { updateThemes } from "./update";
import { isDefaultConfig } from "./utils/config";
import { isFreshInstall, promptReload } from "./utils/interactions";

export async function activate(context: ExtensionContext) {
	if (await isFreshInstall(context) && !isDefaultConfig()) {
		await updateThemes(context);
		await promptReload();
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration(async (event) => {
			if (event.affectsConfiguration(CONFIG_ROOT)) {
				await updateThemes(context);
				await promptReload();
			}
		}),
	);
}
