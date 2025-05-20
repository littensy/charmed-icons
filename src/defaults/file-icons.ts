interface FileIcons {
	[key: string]: {
		languages?: string[];
		names?: string[];
		extensions?: string[];
	};
}

export const fileIcons: FileIcons = {
	"assembly": {},
	"astro": {},
	"audio": {},
	"binary": {},
	"bun": {},
	"c": {},
	"changelog": {},
	"code-of-conduct": {},
	"codeowners": {},
	"config": {},
	"cpp": {},
	"cs": {},
	"css": {},
	"css3": {},
	"csv": {},
	"dart": {},
	"database": {},
	"docker": {},
	"drizzle-orm": {},
	"eslint": {},
	"event": {},
	"font": {},
	"git": {},
	"gleam": {},
	"go-mod": {},
	"go": {},
	"h": {},
	"hcl": {},
	"html": {},
	"image": {},
	"java": {},
	"javascript-config": {},
	"javascript": {},
	"json-brackets": {},
	"json": {},
	"julia": {},
	"kotlin": {},
	"license": {},
	"lua": {},
	"luau-config": {},
	"luau-def": {},
	"luau": {},
	"markdown": {},
	"next": {},
	"nim": {},
	"nix": {},
	"node": {},
	"npm": {},
	"nuxt": {},
	"pcss": {},
	"php": {},
	"powershell": {},
	"python": {},
	"react-typescript": {},
	"react": {},
	"readme": {},
	"roblox": {},
	"ruby": {},
	"rust": {},
	"scala": {},
	"scss": {},
	"security": {},
	"shell": {},
	"storybook": {},
	"svelte": {},
	"svg": {},
	"swift": {},
	"tailwind": {},
	"terraform": {},
	"test-blue": {},
	"test-teal": {},
	"test-yellow": {},
	"text": {},
	"todo": {},
	"toml": {},
	"typescript-config": {},
	"typescript-def": {},
	"typescript": {},
	"video": {},
	"vite": {},
	"vue": {},
	"web-assembly": {},
	"xml": {},
	"yaml": {},
	"yarn-lock": {},
	"yarn": {},
	"zig": {},
	"zip": {},
};

export const languageIds: { [key: string]: string } = {};
export const fileNames: { [key: string]: string } = {};
export const fileExtensions: { [key: string]: string } = {};

for (const [id, value] of Object.entries(fileIcons)) {
	if (value.languages) {
		for (const lang of value.languages) {
			languageIds[lang] = id;
		}
	}

	if (value.names) {
		for (const name of value.names) {
			fileNames[name] = id;
		}
	}

	if (value.extensions) {
		for (const ext of value.extensions) {
			fileExtensions[ext] = id;
		}
	}
}
