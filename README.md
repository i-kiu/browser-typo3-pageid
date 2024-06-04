# I-kiu Typo3 Page ID

This is a Chrome extension that shows the Page ID if present.

## Features

- Retrieves and displays the Page ID from the storage.
- Listens for messages and updates the Page ID accordingly.
- Allows the user to copy the Page ID to the clipboard by clicking on it.

## How to integrate in your Typo3 project
Copy following snippet into your typoscript config:
```
page.meta.pageID.data = TSFE:id
```
This will add an HTML meta tag to every page with the page ID.


## Permissions

The extension requires the following permissions:

- Storage: To store and retrieve the Page ID.
- Clipboard Write: To allow the user to copy the Page ID to the clipboard.

## Development

This project is developed using JavaScript.
