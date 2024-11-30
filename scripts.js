const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"
];
const newTestamentBooks = ["Matthew", "Mark", "Luke", "John", "Acts"];
const chaptersPerBook = 50; // Example
const versesPerChapter = 30; // Example

const bookList = document.getElementById("book-list");
const chapterList = document.getElementById("chapter-list");
const verseList = document.getElementById("verse-list");

document.getElementById("old-testament-btn").addEventListener("click", () => {
    populateList(bookList, oldTestamentBooks, "book");
});

document.getElementById("new-testament-btn").addEventListener("click", () => {
    populateList(bookList, newTestamentBooks, "book");
});

document.getElementById("niv-btn").addEventListener("click", () => {
    alert("Switching to NIV version...");
    // Logic to display NIV content can be added here
});

document.getElementById("nkjv-btn").addEventListener("click", () => {
    alert("Switching to NKJV version...");
    // Logic to display NKJV content can be added here
});

function populateList(list, items, type) {
    list.innerHTML = "";
    items.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", () => {
            if (type === "book") populateChapters(index + 1);
            else if (type === "chapter") populateVerses(index + 1);
        });
        list.appendChild(listItem);
    });
}

function populateChapters(bookNumber) {
    chapterList.innerHTML = "";
    for (let i = 1; i <= chaptersPerBook; i++) {
        const chapterItem = document.createElement("li");
        chapterItem.textContent = `Chapter ${i}`;
        chapterItem.addEventListener("click", () => populateVerses(i));
        chapterList.appendChild(chapterItem);
    }
}

function populateVerses(chapterNumber) {
    verseList.innerHTML = "";
    for (let i = 1; i <= versesPerChapter; i++) {
        const verseItem = document.createElement("li");
        verseItem.textContent = `Verse ${i}`;
        verseList.appendChild(verseItem);
    }
}
