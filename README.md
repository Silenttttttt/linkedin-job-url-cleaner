# LinkedIn Job URL Cleaner

A lightweight browser extension that automatically removes tracking parameters from LinkedIn job URLs. This helps prevent common application issues that occur when applying through tracked URLs.

## Why?

LinkedIn often adds tracking parameters to job URLs when sharing or accessing them through email notifications. These parameters can sometimes cause issues during the application process. This extension automatically cleans the URLs by keeping only the essential job ID.

For example, it converts:


```https://www.linkedin.com/jobs/view/4037678901/?trackingId=...&refId=...&midToken=...```

To:

```https://www.linkedin.com/jobs/view/4037678901```


## Installation

## Installation

### Option 1: Tampermonkey
1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
2. <a href="https://github.com/Silenttttttt/linkedin-job-url-cleaner/blob/main/script.js" target="_blank">Click here</a> to view the script in a new tab
3. Copy the entire script
4. Click the Tampermonkey icon and select "Create new script"
5. Paste the copied code and save (Ctrl+S or Command+S)
6. Make sure the script is enabled in Tampermonkey

### Option 2: Violentmonkey
1. Install [Violentmonkey](https://violentmonkey.github.io/) for your browser
   - [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)
2. <a href="https://github.com/Silenttttttt/linkedin-job-url-cleaner/blob/main/script.js" target="_blank">Click here</a> to view the script in a new tab
3. Copy the entire script
4. Click the Violentmonkey icon and select "Create new script"
5. Paste the copied code and save (Ctrl+S or Command+S)
6. Make sure the script is enabled in Violentmonkey

### Option 3: Greasemonkey (Firefox)
1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
2. <a href="https://github.com/Silenttttttt/linkedin-job-url-cleaner/blob/main/script.js" target="_blank">Click here</a> to view the script in a new tab
3. Copy the entire script
4. Click the Greasemonkey icon and select "New user script"
5. Paste the copied code and save (Ctrl+S or Command+S)
6. Make sure the script is enabled in Greasemonkey
7. 
## How It Works

The script automatically:
1. Detects when you're on a LinkedIn job URL
2. Checks if the URL contains tracking parameters
3. Extracts the job ID
4. Redirects to a clean URL with just the job ID

## Browser Compatibility

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Opera
- ✅ Safari

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[@Silenttttttt](https://github.com/Silenttttttt)
## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements.

## License

MIT

## Author

[@Silenttttttt](https://github.com/Silenttttttt)
