# Chrome Extension - Laeds Tracker List

![截圖 2022-07-14 上午9 24 17](https://user-images.githubusercontent.com/73010572/178867155-10cbceb8-a688-4cf0-9239-0e1e9bb4ff5e.png)

learned from freeCodeCamp: https://www.youtube.com/watch?v=jS4aFq5-91M&t=20994

## Learn

- Basic frontend structure
- How to deploy and make Chrome Extension
- Applocation/ Local Storage
  - `removeItem`, `setItem`, `getItem`
  - string only: `JSON.parse` & `JSON.stringify` for array type
- Ask Chrome API (get browser url)
  - `chrome.tabs.query({ active: true, currentWindow: true }, function (tabs){})`
  - can get it with `tabs[0].url`
    <br>

## My Modify

difference is how to work in each function actually
