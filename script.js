document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.add("visible");
    }, 2000); // Set the time (in milliseconds) for the loader to be visible
});
