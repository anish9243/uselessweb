// URL for fetching random goat images from loremflickr
const randomGoatImageUrl = "https://loremflickr.com/800/500/goat";

// Function to set the random image on page load
document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("random-goat-image");
    imgElement.src = randomGoatImageUrl;
});
