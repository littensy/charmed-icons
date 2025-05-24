import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { exit } from "node:process";
import { launch } from "puppeteer";
import { IconVariant } from "~/constants";

const colors = {
	base: { background: "#11151D", foreground: "#DFDFED" },
	light: { background: "#FBFDFF", foreground: "#000000" },
	soft: { background: "#1C2029", foreground: "#DFDFED" },
	warm: { background: "#222222", foreground: "#EDE3DF" },
} satisfies Record<IconVariant, { background: string; foreground: string }>;

try {
	console.info("Generating previews...");

	const allIcons = await readdir("icons");
	const fileIcons = allIcons.filter(i => !i.startsWith("folder_") && !i.startsWith("_"));
	const folderIcons = allIcons.filter(i => i.startsWith("folder_") && !i.endsWith("_open.svg"));

	function iconPath(icon: string, variant: IconVariant) {
		return `${resolve(join("dist", "themes", variant, "icons", icon))}`;
	}

	function generateHtml(variant: IconVariant) {
		return `
			<html>
				<head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space%20Mono">
					<style>
						body {
							font-family: Space Mono, monospace;
							font-size: 20px;
							margin: 0;
						}
						.container {
							color: ${colors[variant].foreground};
							background-color: ${colors[variant].background};
							width: 1500px;
							display: flex;
							flex-direction: column;
							gap: 50px;
							padding: 30px;
							border-radius: 30px;
						}
						.icon-block {
							display: inline-flex;
							align-items: center;
							gap: 10px;
						}
						.icon {
							width: 32px;
							height: 32px;
						}
						.grid {
							display: grid;
							grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
							gap: 20px;
						}
						.folder-grid {
							display: grid;
							grid-template-columns: 1fr 1fr 1fr 1fr;
							gap: 20px;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="grid">
							${fileIcons.map(i => `
								<div class="icon-block">
									<img class="icon" src="${iconPath(i, variant)}">
									${i.slice(0, -4)}
								</div>
							`).join("\n")}
						</div>
						<div class="folder-grid">
							${folderIcons.map(i => `
								<div class="icon-block">
									<img class="icon" src="${iconPath(i, variant)}">
									${i.slice(0, -4)}
								</div>
							`).join("\n")}
						</div>
					</div>
				</body>
			</html>
		`;
	}

	const tmp = await mkdtemp(join(tmpdir(), sep));

	await Promise.all(Object.values(IconVariant).map(async (variant) => {
		const htmlPath = join(tmp, `${variant}.html`);
		const screenshotPath = join("assets", `${variant}.webp`) as `${IconVariant}.webp`;
		await writeFile(htmlPath, generateHtml(variant));
		const browser = await launch({
			args: ["--no-sandbox"],
		});
		const page = await browser.newPage();
		await page.goto(join("file:", htmlPath));
		await page.screenshot({
			type: "webp",
			path: screenshotPath,
			fullPage: true,
			omitBackground: true,
		});
		await browser.close();
	}));

	await rm(tmp, { recursive: true });

	console.log("Previews generated.");
}
catch (error) {
	console.error("Preview generation failed: ", error);
	exit(1);
}
