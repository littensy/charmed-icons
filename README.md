<p align="center">
  <p align="center">
	<img src="assets/icon.png" alt="Logo" width="128" />
  </p>
  <h1 align="center"><b>Charmed Icons</b></h1>
</p>

<div align="center">

[![GitHub License](https://img.shields.io/github/license/littensy/charmed-icons?style=for-the-badge)](LICENSE.md)
![GitHub Stars](https://img.shields.io/github/stars/littensy/charmed-icons?style=for-the-badge&logo=github)

<img src="assets/files.png" alt="Files" width="512" />
<br><br>
<img src="assets/folders.png" alt="Folders" width="512" />

</div>

## ⚙️ Usage

### Marketplace

You can find my icons on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=littensy.charmed-icons) or on the [Open VSX Registry](https://open-vsx.org/extension/littensy/charmed-icons).

### Manual

1. Download the `.vsix` file from the [Releases](https://github.com/littensy/charmed-icons/releases) page.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) in VS Code.
3. Run the `Extensions: Install from VSIX...` command.

## 🎨 Customization

### Settings

You can customize the icon theme with the following settings:

```jsonc
{
	// Set to `true` to disable folding arrows next to folder icons.
	"charmed-icons.hidesExplorerArrows": false,

	// Set to `when-expanded` to use outlines when the folder is expanded.
	// Set to `always` to always use outlined folder icons.
	// Set to `never` to always use filled folder icons.
	"charmed-icons.outlinedFolders": "when-expanded"
}
```

### Custom icon associations

Charmed Icons also supports custom icon associations (thanks to [Catppuccin Icons](https://github.com/catppuccin/vscode-icons/tree/main?tab=readme-ov-file#custom-icon-associations)):

```jsonc
{
	// Files with the language type `typescriptreact` will have the `react-typescript` icon.
	"charmed-icons.associations.languages": {
		"typescriptreact": "react-typescript"
	},

	// Files with the `spec.ts` extension will have the `test-blue` icon.
	"charmed-icons.associations.extensions": {
		"spec.ts": "test-blue"
	},

	// Files with the name `vite.config.ts` will have the `vite` icon.
	"charmed-icons.associations.files": {
		"vite.config.ts": "vite"
	},

	// Folders with the name `typings/` will have the `folder_types` icon.
	"charmed-icons.associations.folders": {
		"typings": "folder_types"
	}
}
```

> [!NOTE]
> See [`./icons`](./icons) for a list of available icons.

## 🙌 Requests

If you have any icon requests, please [open an issue](https://github.com/littensy/charmed-icons/issues/new).

Ping me on Discord `@littensy` for a quicker response!!

## ❤️ Gratitude

Charmed Icons draws inspiration from:

- [Catppuccin Icons](https://github.com/catppuccin/vscode-icons): Soothing pastel icons for VSCode.
- [Monospace Theme](https://github.com/keksiqc/monospace-theme): The Monospace Theme from Google's IDX.

---

<p align="center">
Charmed Icons is released under the <a href="LICENSE.md">MIT License</a>.
</p>

<div align="center">

[![MIT License](https://img.shields.io/github/license/littensy/charmed-icons?style=for-the-badge)](LICENSE.md)

</div>
