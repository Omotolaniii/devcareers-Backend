function redactText() {
    var originalText = document.getElementById("originalText").value;
    var wordsToScramble = document.getElementById("wordsToScramble").value.split(" ");

    wordsToScramble.forEach(function (word) {
        var regex = new RegExp("\\b" + word + "\\b", "gi");
        var replacement = "*".repeat(word.length);
        originalText = originalText.replace(regex, replacement);
    });

    document.getElementById("replacement").value = originalText;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Redact").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the default action of the button click
        redactText(); // Calls the redactText function
    });
});

