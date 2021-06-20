/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


//Creates first page of students
const showPage = (list, page) => {
   //creates the maximum number of students on a page
   const startIndex = (page *  9) - 9;
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

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
      <button type="button">${i}</button>
      `)
   }

   const activeButton = document.querySelectorAll('button')[0];
   activeButton.className = 'active';
   //Listens for click and changes target to active, removing active from previous button
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === "BUTTON") {
         const unassign = document.querySelector('.active');
         unassign.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
 }

//Creates and formats search bar 
const searchBar = () => {
   const header = document.querySelector('.header');
   header.insertAdjacentHTML('beforeend', `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `)
}

searchBar();
showPage(data, 1);
addPagination(data);