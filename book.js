const title = document.querySelector('#title');
const author= document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

let counter = 0;
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', (event) => {

    event.preventDefault();

    let titleBook = title.value;
    let authorBook = author.value;
    let pagesBook = pages.value;
    let readBook = read.checked;
    
    const newBook = new Book(titleBook, authorBook, pagesBook, readBook);

    myLibrary.push(newBook);
    displayBook(newBook);

    saveData();
    form.reset();
})


// Function to save data to localStorage
function saveData () {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Function to retrieve data from localStorage
function retrieveData () {
   savedBookList = JSON.parse(localStorage.getItem('myLibrary') || '[]')
}


function displayBook(newBook) {

    const card = document.querySelector('.card');

    let div = document.createElement('div');
    div.setAttribute('data-num', counter);
    div.style.width = "13rem";
    div.style.height = " 13rem";
    div.style.border = " 4px solid #c31";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "10px";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.textAlign = "center";
    div.style.borderRadius = "5px";
    div.innerHTML = `
    <div class="box title">${newBook.title}</div>
    <div class="box author">${newBook.author}</div>
    <div class="box pages">${newBook.pages}</div>
    <div class="box read">${newBook.read}</div>
    `;

    card.appendChild(div);
    newBook.dataNum = `${counter}`;
    counter++;
    console.log(newBook)
}




















// function render() {

//     let boo;
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i)
//         let z = localStorage.getItem(key);
//         let foo = z.split(',');
//         boo = JSON.parse(foo);
//       }

//     for (let j=0; j<boo.length; j++){
//         addBook(boo[j])
//         console.log(boo[j])
//     }
//     return boo;
// }


// function addBook(item) {

//     title.textContent = item.title
//     author.textContent = item.author
//     pages.textContent = item.pages
//     read.textContent = item.read
// }