const openPopup = document.getElementById("mri-btn");
        const drop = document.getElementById("popup-mri");
        const overlay = document.getElementById("overlay-mri");

        openPopup.addEventListener("click", () => {
            drop.style.display = "block";
            overlay.style.display = "block";
        });

        overlay.addEventListener("click", () => {
            drop.style.display = "none";
            overlay.style.display = "none";
        });