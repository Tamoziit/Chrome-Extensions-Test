async function sayHello() {
    let [tab] = await chrome.tabs.query({ active: true }); // queries all open tabs on our browser & extracts the currently active tab;

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            document.body.style.backgroundColor = "red"; // changes the bgColour of the active tab (external context scripting)
            alert("Hello from My Extension!");
        }
    })
}

document.getElementById("myButton").addEventListener("click", sayHello); // context of our extension