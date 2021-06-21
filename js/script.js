/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const header = document.querySelector('.header');
header.insertAdjacentHTML('beforeend', `
<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`)


//Creates first page of students
const showPage = (list, page) => {
   //creates the maximum number of students on a page
   const startIndex = (page *  9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   if(list.length === 0) {
      studentList.innerHTML = `<h1>This person could not be found, please try again</h1>`
   }

   //Loops over data objects range and adds formatted info to li
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML('beforeend', `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `)
      }
   }
 }


//Creates pagination buttons and listens for clicks
const addPagination = (list) => {
   //Calculates maximum number of pages needed for students (9 per page)
   const infoLength = Math.ceil(list.length / 9);

   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   //Loops over page length and creates button per page needed
   for (let i = 1; i <= infoLength; i++) {
      linkList.insertAdjacentHTML('beforeend', `
      <li>
      <button type="button">${i}</button>
      </li>
      `)
   }

   document.querySelector('.link-list button').className = 'active';

   //Listens for click and changes target to active, removing active from previous button
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === "BUTTON") {
         const active = document.querySelector('.active');
         active.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
 }

//Creates and formats search bar 
const searchBar = (list) => {
   const search = document.querySelector('#search');
   const button = document.querySelectorAll('button')[0];
   const input = document.querySelector('input');

   const performSearch = (searchInput, list) => {
      let searchList = [];
      for (let i = 0; i < list.length; i++) {
         const nameCheck = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`
         if (searchInput.length === 0) {
            showPage(list, 1);
            addPagination(list);
         } else if (nameCheck.includes(searchInput.value.toLowerCase())) {
            searchList.push(list[i]);
            showPage(searchList, 1);
            addPagination(searchList);
         } 
         // else if (searchInput.value.toLowerCase() !== nameCheck) {
         //    document.querySelector('body').innerHTML = `Sorry, ${searchInput.value} is not a student`
         // }
      }
   }

   button.addEventListener('click', (e) => {
      performSearch(search, data);
   });


   input.addEventListener('keyup', (e) => {
      performSearch(search, data)
   });
}


// for (let i = 0; i < data.length; i++){
//    console.log(data[i].name.first);
//    console.log(data[i].name.last);
// }
searchBar(data);
showPage(data, 1);
addPagination(data);