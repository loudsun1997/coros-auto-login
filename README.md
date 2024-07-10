# COROS Auto Terms Checkbox Checker

This Chrome extension automatically checks the terms and conditions checkbox on the Coros Training login page and can optionally log you in if enabled. This is useful if you frequently use the Coros Training hub and find the terms checkbox annoying to check every time.

## Features

- Automatically checks the terms and conditions checkbox on the Coros Training login page.
- Optionally logs you in automatically after checking the checkbox.
- Simple toggle to enable or disable auto login.

## Version History

- **v1.0**: Initial release with the auto-checking checkbox feature.
- **v1.1**: Added auto login functionality which can be toggled on or off.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. Click the "Load unpacked" button and select the directory containing the extension files.

## Usage

1. After installing the extension, click on the extension icon in the Chrome toolbar to open the popup.
2. Use the checkbox in the popup to enable or disable the auto login feature.
3. Navigate to `https://training.coros.com/login` and the extension will automatically check the terms and conditions checkbox. If auto login is enabled, it will also log you in.

## Files

- `manifest.json`: Defines the extension's permissions, background scripts, and content scripts.
- `content.js`: The content script that runs on the login page, checks the checkbox, and optionally logs in.
- `popup.html`: The HTML file for the extension's popup.
- `popup.js`: The JavaScript file for the extension's popup, handling the auto login toggle.
- `icons/`: Directory containing the extension icon in different sizes.

## Contributing

If you have suggestions for improving this extension or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
