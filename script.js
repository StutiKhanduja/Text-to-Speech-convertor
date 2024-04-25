let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
    const textToSpeak = document.querySelector("textarea").value;

    if (textToSpeak.trim() === "") {
        console.log("Please enter some text to speak.");
        return;
    }

    speech.text = textToSpeak;

    // Log available voices for debugging
    const voices = window.speechSynthesis.getVoices();
    console.log("Available Voices:", voices);

    window.speechSynthesis.speak(speech);
});
