function sharebtn() {
    let shareOptions = document.getElementById("share");
    let x = document.getElementById("share-icon");
    if (shareOptions.style.display === "none") {
        shareOptions.style.display = "flex";
        x.style.backgroundColor = "var(--Grayish-Blue)";
        x.style.fill = "white";
    } else {
        shareOptions.style.display = "none";
        x.style.backgroundColor = "var(--Light-Grayish-Blue)";
        x.style.fill = "#6E8098";
    }
}