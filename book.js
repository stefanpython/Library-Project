let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

// Function to add new book

function addBookToLibrary () {
    event.preventDefault();
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    saveData();
    form.reset();
}

addBookToLibrary.prototype = Object.create(Book.prototype);

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
    addBookToLibrary();
})


// Function to save data to localStorage
function saveData () {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Function to retriever data from localStorage
function retrieveData () {
   savedBookList = JSON.parse(localStorage.getItem('myLibrary') || '[]')
}

