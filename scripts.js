const books = {
    NIV: {
        OldTestament: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
        NewTestament: ["Matthew", "Mark", "Luke", "John", "Acts"]
    },
    NKJV: {
        OldTestament: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
        NewTestament: ["Matthew", "Mark", "Luke", "John", "Acts"]
    }
};

const chaptersPerBook = 50; // Example
const versesPerChapter = 30; // Example

const bookList = document.getElementById("book-list");
const chapterList = document.getElementById("chapter-list");
const verseList = document.getElementById("verse-list");

document.querySelectorAll("input[name='version']").forEach(input => {
    input.addEventListener("change", () => {
        loadBooks(input.value);
    });
});

function loadBooks(version) {
    bookList.innerHTML = "";
    const testamentBooks = [...books[version].OldTestament, ...books[version].NewTestament];
    testamentBooks.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        listItem.addEventListener("click", () => loadChapters(index + 1));
        bookList.appendChild(listItem);
    });
}

function loadChapters(bookNumber) {
    chapterList.innerHTML = "";
    verseList.innerHTML = "";
    for (let i = 1; i <= chaptersPerBook; i++) {
        const chapterItem = document.createElement("li");
        chapterItem.textContent = `Chapter ${i}`;
        chapterItem.addEventListener("click", () => loadVerses(i));
        chapterList.appendChild(chapterItem);
    }
}

function loadVerses(chapterNumber) {
    verseList.innerHTML = "";
    for (let i = 1; i <= versesPerChapter; i++) {
        const verseItem = document.createElement("li");
        verseItem.textContent = `Verse ${i}`;
        verseList.appendChild(verseItem);
    }
}

// Load the default version (NIV) on page load
loadBooks("NIV");
