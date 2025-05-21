import type { Palette } from "./palettes";
import type { IconDefinitions } from "~/types";
import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import { TinyColor } from "@ctrl/tinycolor";
import { IconVariant } from "~/constants";
import { createTheme } from "~/themes";
import { basePalette, lightPalette, softPalette } from "./palettes";

const iconFilenames = await readdir("icons");

function replaceSvgColors(content: string, palette: Partial<Palette>): string {
	for (const [key, value] of Object.entries(basePalette)) {
		if (content.includes(value) && key in palette) {
			content = content.replaceAll(value, palette[key as keyof Palette]!);
		}
	}
	return content;
}

async function applyPalette(variant: IconVariant, palette: Partial<Palette>) {
	return Promise.all(iconFilenames.map(async (filename) => {
		const content = await readFile(join("dist", "themes", variant, "icons", filename), "utf-8");
		const modified = replaceSvgColors(content, palette);

		await writeFile(join("dist", "themes", variant, "icons", filename), modified, "utf-8");
	}));
}

async function generateIconVariant(variant: IconVariant, palette: Partial<Palette>) {
	await rm(join("dist", "themes", variant), { recursive: true, force: true });
	await mkdir(join("dist", "themes", variant, "icons"), { recursive: true });
	await cp("icons", join("dist", "themes", variant, "icons"), { recursive: true });

	await applyPalette(variant, palette);
}

async function createThemeFiles() {
	const iconDefinitions = iconFilenames.reduce<IconDefinitions>((acc, filename) => {
		acc[parse(filename).name] = { iconPath: `./icons/${filename}` };
		return acc;
	}, {});

	const iconDefinitionsJson = JSON.stringify(iconDefinitions);
	const baseThemeJson = JSON.stringify(createTheme({}, iconDefinitions));

	for (const variant of Object.values(IconVariant)) {
		await writeFile(join("dist", "themes", variant, "iconDefinitions.json"), iconDefinitionsJson, "utf-8");
		await writeFile(join("dist", "themes", variant, "theme.json"), baseThemeJson, "utf-8");
	}
}

function createPalette(colorProcessor: (color: string) => string) {
	return Object.entries(basePalette).reduce<Partial<Palette>>((acc, [key, value]) => {
		acc[key as keyof Palette] = colorProcessor(value);
		return acc;
	}, {});
}

await Promise.all([
	generateIconVariant(IconVariant.Base, basePalette),
	generateIconVariant(IconVariant.Light, lightPalette),
	generateIconVariant(IconVariant.Soft, softPalette),
	generateIconVariant(IconVariant.Warm, createPalette((color) => {
		return new TinyColor(color).mix("#ff4400", 7).toHexString();
	})),
]);

await createThemeFiles();
