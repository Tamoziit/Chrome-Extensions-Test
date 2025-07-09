document.querySelector('button.play').addEventListener('click', function () {
    var selectedTrack = document.querySelector('select').value;

    // sending mssg to background script
    chrome.runtime.sendMessage({
        name: "playTrack",
        track: selectedTrack
    });
});

document.querySelector('button.pause').addEventListener('click', function () {
    chrome.runtime.sendMessage({
        name: "pauseTrack"
    });
});
