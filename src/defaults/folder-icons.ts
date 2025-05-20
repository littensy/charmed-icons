interface FolderIcons {
	[key: string]: string[];
}

export const folderIcons: FolderIcons = {
	admin: ["admin", "admins", "manager", "managers", "moderator", "moderators", "moderation"],
	animation: ["animation"],
	audio: ["audio"],
	auth: ["auth"],
	benchmark: ["benchmark"],
	bin: ["bin"],
	builder: ["builder"],
	camera: ["camera"],
	changesets: ["changesets"],
	client: ["client"],
	commands: ["commands"],
	component: ["component"],
	config: ["config"],
	connection: ["connection"],
	constant: ["constant"],
	content: ["content"],
	context: ["context"],
	coverage: ["coverage"],
	database: ["database"],
	dist: ["dist"],
	docs: ["docs"],
	effects: ["effects"],
	error: ["error"],
	event: ["event"],
	fonts: ["fonts"],
	function: ["function"],
	github: ["github"],
	hooks: ["hooks"],
	image: ["image"],
	input: ["input"],
	javascript: ["javascript"],
	json: ["json"],
	layout: ["layout"],
	lib: ["lib"],
	lune: ["lune"],
	marketing: ["marketing"],
	middleware: ["middleware"],
	module: ["module"],
	node: ["node"],
	nuxt: ["nuxt"],
	package: ["package"],
	page: ["page"],
	provider: ["provider"],
	roblox: ["roblox"],
	routes: ["routes"],
	script: ["script"],
	server: ["server"],
	service: ["service"],
	source: ["source"],
	store: ["store"],
	styles: ["styles"],
	svg: ["svg"],
	template: ["template"],
	test: ["test"],
	types: ["types"],
	typescript: ["typescript"],
	util: ["util"],
	video: ["video"],
	web: ["web"],
	yarn: ["yarn"],
};

export const folderNames: { [key: string]: string } = {};

for (const [key, names] of Object.entries(folderIcons)) {
	const id = `folder_${key}`;

	for (const name of names) {
		folderNames[name] = id;
	}
}
