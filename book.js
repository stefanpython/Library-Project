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

    if (title && author && pages && read) {
      // Create a new book object with the new values
    const book = new Book(title, author, pages, read);

    // Store new book objects in myLibrary array
    myLibrary.push(book);
    
    saveData();
    // displayBooks();
    window.location.reload();
    form.reset(); // reset form inputs
    } else {
      alert("Please enter all the information and try again.")
    }
    
}


// Function to save data to localStorage
function saveData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}


// Function to loop through and display each book on html
function displayBooks() {

  const card = document.querySelector('.card');

  myLibrary.forEach((book, index) => {

      const div = document.createElement('div');

      div.setAttribute('class', 'bookCard')
      div.setAttribute('id', index)

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
      card.style.justifiContent = 'center';
      
      div.innerHTML = `
      <div><h2>Title: ${book.title}</h2></div>
      <div><h2>Author: ${book.author}</h2></div>
      <div><h2>Pages: ${book.pages}</h2></div>
      <div><h2>Read: ${book.read}</h2></div>
      <button class='delBtn' id=${index}>Delete</button>
      `;

      
      card.appendChild(div)
      
      
  })
      const deleteBtn = document.querySelectorAll('.delBtn');
      
      for (btn of deleteBtn) {
        btn.addEventListener('click', function() {
    
          myLibrary.splice(this.id, 1)
          saveData();
          window.location.reload();
        })
      }
  
}



function showForm() {
  document.querySelector('.box').style.display = 'block';
}

document.querySelector('#closeX').addEventListener('click', () => {
  document.querySelector('.box').style.display = 'none';
})




// Try - add id`s for each book with a variable which you increment and compare it to the id value of the pressed button and then splice.