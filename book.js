const titleInput = document.querySelector('#title');
const authorInput= document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

let myLibrary = [];

const DEFAULT = [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      pages: "295",
      status: "Read",
    },
  ];

// Add books from localStorage if pages is refreshed
if (myLibrary.length === 0) {
    retrieveData();
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const addBookBtn = document.querySelector('#addBtn');
addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
})

// Obtain user input information (title, author, pages, read)
function addBookToLibrary() {
    // Extract values from user input
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;

    // Create a new book object with the new values
    const book = new Book(title, author, pages, read);

    // Store new book objects in myLibrary array
    myLibrary.push(book);
    saveData();
    form.reset();
}


// Function to save data to localStorage
function saveData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Function to retrieve data from localStorage
function retrieveData() {
   myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
}


