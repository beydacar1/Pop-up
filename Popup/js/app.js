pageOpen();

function pageOpen() {
    setTimeout(() => {
        document.getElementById("popup").style.display = "block"
    }, 4000);
}


document.getElementById("close").addEventListener("click", () => {
    if (document.getElementById("popup").style.display = "block")
        document.getElementById("popup").style.display = "none";
});

