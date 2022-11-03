const titleInput = document.querySelector('#title');
const authorInput= document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || []; // Retrieve books from saved localStorage

// If statement to display books if array is not empty
if (myLibrary.length != 0 || myLibrary != null) {
    displayBooks();
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
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

    if (title && author && pages) {
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
    
      let bgColor;

      const div = document.createElement('div');

      div.setAttribute('class', 'bookCard')
      div.setAttribute('id', index)

      div.style.border = "1px solid grey";
      div.style.width = '250px';
      div.style.height = '250px';
      div.style.padding = '20px';
      div.style.marginLeft = '10px';
      div.style.borderRadius = "15px";
      div.style.boxShadow = '10px 15px 20px grey'
      div.style.background = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';

      card.style.display = 'flex';
      card.style.flexWrap = "wrap";
      card.style.margin = '10px';
      card.style.gap = '15px';
      card.style.justifiContent = 'center';
      
      div.innerHTML = `
      <div><h2>Title: ${book.title}</h2></div>
      <div><h2>Author: ${book.author}</h2></div>
      <div><h2>Pages: ${book.pages}</h2></div>
      <div><h2>Read: <button class='readBtn' id='${index}'>${book.read}</button></h2></div>
      <button class='delBtn' id=${index}>Delete</button>
      `;
      
      card.appendChild(div)
      
      
  })
  
    deleteItem();
      
    readStatus();
}



function showForm() {
  document.querySelector('.box').style.display = 'block';
}

document.querySelector('#closeX').addEventListener('click', () => {
  document.querySelector('.box').style.display = 'none';
})



function deleteItem() {
  const deleteBtn = document.querySelectorAll('.delBtn');
      
      for (btn of deleteBtn) {
        btn.addEventListener('click', function() {
          
          let con = confirm('Are you sure you want to delete this book?');
          if (con == true) {
            myLibrary.splice(this.id, 1)
            saveData();
            window.location.reload();
          }else {
            return;
          }
          
        })
      }
}

function readStatus() {
  const statusRead = document.querySelectorAll('.readBtn');

    for (item of statusRead) {
      item.addEventListener('click', function () {

      if (myLibrary[this.id].read == 'true') {
        myLibrary[this.id].read = 'false';
        saveData()
        window.location.reload();
        
      } else {
          myLibrary[this.id].read = 'true';
          saveData();
          window.location.reload();
      }
    })
  }
}