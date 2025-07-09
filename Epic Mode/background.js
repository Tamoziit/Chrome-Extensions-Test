chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === "playTrack") {
        var trackName = `Track${msg.track}.mp3`
        var audioEle = document.querySelector('.audio-element');
        audioEle.src = trackName;
        audioEle.play();
    }

    if (msg.name === "pauseTrack") {
        var audioEle = document.querySelector('.audio-element');
        audioEle.pause();
    }
});