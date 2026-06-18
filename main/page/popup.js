       const openPopup = document.getElementById("mri-btn");
       const closePopup = document.getElementById("mri-close");
       const popup = document.getElementById("popup");
    //    const overlay = document.getElementById("overlay");

        // Open popup
        openPopup.addEventListener("click", () => {
            popup.style.display = "block";
            overlay.style.display = "block";
        });

        // Close popup
        closePopup.addEventListener("click", () => {
            popup.style.display = "none";
            overlay.style.display = "none";
        });
        // Close popup when clicking outside
        overlay.addEventListener("click", () => {
            popup.style.display = "none";
            overlay.style.display = "none";
        });

// ______________________________________________________________________
/8 Chrome App Launcher 8/
const openCal = document.getElementById("cal-btn");
        const closeCal = document.getElementById("cal-close");
        const calpopup = document.getElementById("cal-popup");
        const caloverlay = document.getElementById("cal-overlay");

        // Open popup
        openCal.addEventListener("click", () => {
            calpopup.style.display = "block";
            caloverlay.style.display = "block";
        });

        // Close popup
        closeCal.addEventListener("click", () => {
            calpopup.style.display = "none";
            caloverlay.style.display = "none";
        });

        // Close popup when clicking outside
        caloverlay.addEventListener("click", () => {
            calpopup.style.display = "none";
            caloverlay.style.display = "none";
        });
// ______________________________________________________________________
/8 Chrome App Launcher 8/
const openlink = document.getElementById("link-btn");
        const closelink = document.getElementById("link-close");
        const linkpopup = document.getElementById("link-popup");
        const linkoverlay = document.getElementById("link-overlay");

        // Open popup
        openlink.addEventListener("click", () => {
            linkpopup.style.display = "block";
            linkoverlay.style.display = "block";
        });

        // Close popup
       /* closelink.addEventListener("click", () => {
            linkpopup.style.display = "none";
            linkoverlay.style.display = "none";
        });*/

        // Close popup when clicking outside
        linkoverlay.addEventListener("click", () => {
            linkpopup.style.display = "none";
            linkoverlay.style.display = "none";
        });