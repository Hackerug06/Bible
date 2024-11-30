// script.js
document.addEventListener("DOMContentLoaded", () => {
    const oldTestamentContent = document.getElementById("old-testament-content");
    const newTestamentContent = document.getElementById("new-testament-content");

    // Example: Load books dynamically
    const books = {
        "Old Testament": ["Genesis", "Exodus", "Leviticus"],
        "New Testament": ["Matthew", "Mark", "Luke"]
    };

    const loadBooks = (testament, contentDiv) => {
        let html = `<h3>Books</h3><ul>`;
        books[testament].forEach(book => {
            html += `<li>${book}</li>`;
        });
        html += `</ul>`;
        contentDiv.innerHTML = html;
    };

    loadBooks("Old Testament", oldTestamentContent);
    loadBooks("New Testament", newTestamentContent);
});
