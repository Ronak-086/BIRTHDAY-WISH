document.getElementById("celebrate-btn").addEventListener("click", function() {
    let popups = document.querySelectorAll(".popup");
    let popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "block";

    popups.forEach((popup, index) => {
        setTimeout(() => {
            popup.style.opacity = "1";
            popup.style.transform = "translateY(0)";
        }, index * 1000); // Show each popup one second apart
    });
});
