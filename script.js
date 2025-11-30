// minimalizovanie navka
const btn = document.getElementById("minBtn");
const content = document.getElementById("windowContent");
let minimized = false;

btn.addEventListener("click", () => {
    if (!minimized) {
        content.style.height = "0px";
        content.style.padding = "0px";
        minimized = true;
    } else {
        content.style.height = "auto";
        content.style.padding = "25px";
        minimized = false;
    }
});

// minimalizovanie galerie
const galleryWindow = document.getElementById("galleryWindow");
const btnGa = document.getElementById("minBtnGallery");

btnGa.addEventListener("click", () => {
    if (galleryWindow.style.display === "none"){
        galleryWindow.style.display = "block";
    } else {
        galleryWindow.style.display = "none";
    }
});

// minimalizovanie filtracie
const filterWindow = document.getElementById("filterWindow");
const filterBtn = document.getElementById("filterMinBtn");
const filterContent = document.getElementById("filterContent");

let filterMin = false;

filterBtn.addEventListener("click", () => {
    if (!filterMin) {
        filterContent.style.height = "0px";
        filterContent.style.padding = "0px";
        filterMin = true;
    } else {
        filterContent.style.height = "auto";
        filterContent.style.padding = "20px";
        filterMin = false;
    }
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const galleryImages = document.querySelectorAll(".gal-img");

if (galleryImages.length > 0 && lightbox && lightboxImg) {

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

// Pop-Up
document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("popupWindow");
    const popupClose = document.getElementById("popupClose");
    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();  
            popup.classList.remove("hidden");
        });
    }

    popupClose.addEventListener("click", () => {
        popup.classList.add("hidden");
        newsletterForm.reset();
    });

});

// logika filtrovania
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => {
            b.classList.remove("active-filter");
        });
        btn.classList.add("active-filter");

        const filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".gal-img").forEach(img => {
            if (filter === "all" || img.dataset.category === filter) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});

//defaultne nastavenie all aby svietilo
document.addEventListener("DOMContentLoaded", () => {
    const defaultBtn = document.querySelector('.filter-btn[data-filter="all"]');
    
    if (defaultBtn) {
        defaultBtn.classList.add("active-filter");
        document.querySelectorAll(".gal-img").forEach(img => {
            img.style.display = "block";
        });
    }
});
