// JavaScript for toggling between versions (NIV and NKJV)
document.addEventListener("DOMContentLoaded", () => {
    const toggleVersion = document.getElementById("version-toggle");
    const verses = document.querySelectorAll(".verse");

    toggleVersion.addEventListener("change", () => {
        const selectedVersion = toggleVersion.value;
        verses.forEach(verse => {
            verse.textContent = verse.dataset[selectedVersion];
        });
    });
});
