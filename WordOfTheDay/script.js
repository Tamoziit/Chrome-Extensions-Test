// Sending message to background.js to fetch the word from API
chrome.runtime.sendMessage({ name: "fetchWords" }, (response) => {
    console.log(response); // intercept the response from API Call made by background.js

    // Updating content
    document.querySelector('h1').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
});