const btn = document.getElementById("minBtn");
const content = document.getElementById("windowContent");
let minimized = false;

btn.addEventListener("click", () => {
    if (!minimized) {
        content.style.height = "0px";
        content.style.padding = "0px";
        minimized = true;
    } else {
        content.style.height = "120px";
        content.style.padding = "25px";
        minimized = false;
    }
});


const galleryWindow = document.getElementById("galleryWindow");
const btnGa = document.getElementById("minBtnGallery");

btnGa.addEventListener("click", () => {
    if (galleryWindow.style.display === "none"){
        galleryWindow.style.display = "block";
    } else {
        galleryWindow.style.display = "none";
    }
});


// Lightbox (veľké zväčšenie)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gal-img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
