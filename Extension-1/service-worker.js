// Chrome API & context scripts
chrome.action.onClicked.addListener(tab => { // extension tab --> on clicking on our extension from extension tab, this service-worker node fires up & executes the function in its body
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id // getting the id of the tab user is in 
        },
        func: () => {
            alert("Hello from my Extension!");
        }
    });
});