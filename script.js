function sharebtn() {
    let shareOptions = document.getElementById("share");
    if (shareOptions.style.display === "none") {shareOptions.style.display = "flex";
    } else {
        shareOptions.style.display = "none";
    }
}