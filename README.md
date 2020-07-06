# [WorkMode Chrome Extension](http://www.workmode.org)
WorkMode is a Google Chrome Extension that, when activated, auto-blocks ALL social media and custom URLs & keywords from opening. Over **20,000+** users and 4/5 stars from 70+ reviews on the [Chrome Web Store](http://www.workmode.org). 

<p align="center"> 
[![WorkMode Video](://raw.githubusercontent.com/ShreyRavi/workmode/master/video_capture.PNG)](://youtu.be/6R35xH-R1r0 "WorkMode in Action")
<br />Video of WorkMode in action.</p>

## [Live Demo (From Chrome Web Store)](http://www.workmode.org)
Download the latest, stable release of the extension on the Chrome Web Store.

## Usage
To activate, simply click on the gray/white 'W' icon on the top-right of the Chrome browser. This will toggle the icon to 'red', meaning it's activated. You can edit which URLs are blocked by right clicking on the icon and selecting 'Options'.

## Local Setup
1. Clone Repository
```
git clone https://github.com/ShreyRavi/workmode.git
```
2. Navigate to the Chrome Extensions page  at [chrome://extensions/](chrome://extensions/)
```
chrome://extensions/
```
3. Toggle Developer mode (top-right) on your Chrome browser

4. Click 'Load unpacked' button (top-left) and load the folder of the cloned repository to run extension

## File Breakdown
- **manifest.json** - the main manifest file that Chrome uses to pack and use the Chrome Extension
- **redir.js** - actual JavaScript logic that handles redirection or blocking of selected URLs
- **options.html** - options page front-end code that allows the user to add/remove custom URLs to block
- **options.js** - JavaScript logic that handles the saving and loading of custom URLs to block into Chrome's localstorage

## Future Plans
- Add unlimited custom URLs to block
- Add a database that has back-end logic for URL recommendations and other smart features
- Improve UI of options page

## License
[The MIT License (MIT)](https://github.com/ShreyRavi/workmode/blob/master/LICENSE)
