const titleInput = document.querySelector('#title');
const authorInput= document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || []; // Retrieve books from saved localStorage

// If statement to display books if array is not empty
if (myLibrary.length != 0 || myLibrary != null) {
    displayBooks();
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// eventListener to addBtn to add books to myLibray array
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
    // displayBooks();
    window.location.reload();
    form.reset(); // reset form inputs
}


// Function to save data to localStorage
function saveData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Function to retrieve data from localStorage
// function retrieveData() {
//    myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
// }

// Function to loop through and display each book on html
function displayBooks() {

  const card = document.querySelector('.card');

  myLibrary.forEach((book) => {

      const div = document.createElement('div');

      div.style.border = "1px solid grey";
      div.style.width = '270px';
      div.style.height = '250px';
      div.style.padding = '20px';
      div.style.marginLeft = '10px';
      div.style.borderRadius = "15px";

      card.style.display = 'flex';
      card.style.flexWrap = "wrap";
      card.style.margin = '10px';
      card.style.gap = '15px';
      
      div.innerHTML = `
      <div><h2>Title: ${book.title}</h2></div>
      <div><h2>Author: ${book.author}</h2></div>
      <div><h2>Pages: ${book.pages}</h2></div>
      <div><h2>Read: ${book.read}</h2></div>
      
      `;
      card.appendChild(div)
  })
}