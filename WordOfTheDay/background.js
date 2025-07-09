function getRandomNumber(number) {
    var max = number + 1;
    return Math.floor(Math.random() * Math.floor(max)); // random no. b/w (0 - number)
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name === "fetchWords") {
        // API Call
        const apiKey = "ghsj0202-nnsc93-u839nc9e992ne";
        const dateStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date=' + dateStr + '&api_key=' + apiKey;

        // MOCKING API CALL
        const wordsObj = [
            "surimono",
            "flanconade",
            "perihelion",
            "brailler",
            "needfire"
        ];
        const wordsDescObj = [
            "A kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year.",
            "In <em>fencing</em>, the ninth and last thrust, usually aimed at the side.",
            "The point in a solar orbit where the orbiting body is closest to the sun.",
            "A typewriter used to emboss paper with braille cells to be read by the visually impaired instead of using a manual stylus.",
            "A fire produced by the friction of one piece of wood upon another, or of a rope upon a stake of wood."
        ];

        var number = getRandomNumber(4);

        //Sending response to script.js
        response({
            word: wordsObj[number],
            desc: wordsDescObj[number]
        });
    }
});