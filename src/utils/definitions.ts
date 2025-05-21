import type { ExtensionContext } from "vscode";
import type { IconVariant } from "~/constants";
import type { IconDefinitions } from "~/types";
import { Uri, workspace } from "vscode";

export async function getIconDefinitions(context: ExtensionContext, variant: IconVariant) {
	const path = Uri.joinPath(context.extensionUri, "dist", "themes", variant, "iconDefinitions.json");

	return workspace.fs.readFile(path).then((data) => {
		return JSON.parse(data.toString()) as IconDefinitions;
	});
}
