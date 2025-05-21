import type { ExtensionContext } from "vscode";
import { Buffer } from "node:buffer";
import { commands, Uri, window, workspace } from "vscode";

export async function promptReload() {
	const message = `Charmed Icons: Theme changed - Reload required.`;
	const action = "Reload window";
	return window.showInformationMessage(message, action).then(async (selectedAction) => {
		if (selectedAction === action) {
			commands.executeCommand("workbench.action.reloadWindow");
		}
	});
};

export async function isFreshInstall(context: ExtensionContext) {
	const flag = Uri.joinPath(context.extensionUri, "dist", ".flag");
	return await workspace.fs.stat(flag).then(
		() => false,
		() => workspace.fs.writeFile(flag, Buffer.from("")).then(
			() => true,
			() => true,
		),
	);
}

export async function readFile(uri: Uri) {
	return workspace.fs.readFile(uri).then(b => b.toString());
}

export async function writeFile(uri: Uri, content: string) {
	return workspace.fs.writeFile(uri, Buffer.from(content));
}

export async function writeJsonFile(uri: Uri, json: Record<string, any>) {
	return await writeFile(uri, JSON.stringify(json, null, 2));
}
