/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   // create two variables which will represent the index for the first and last student on the page
   const startIndex = (page *  9) - 9;
   const endIndex = page * 9;
   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list');
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';
   // loop over the length of the `list` parameter
     // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
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
   return studentList;
 }
 
showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const infoLength = Math.ceil(list.length / 9);
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
   // loop over the number of pages needed
     // create the elements needed to display the pagination button
     // insert the above elements
   for (let i = 1; i <= infoLength; i++) {
      linkList.insertAdjacentHTML('beforeend', `
      <button type="button">${i}</button>
      `)
   }
      // give the first pagination button a class of "active"
   const activeButton = document.querySelectorAll('button')[0];
   activeButton.className = 'active';

   // create an event listener on the `link-list` element
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === "BUTTON") {
         const unassign = document.querySelector('.active');
         unassign.className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
 }
 
addPagination(data);

// Call functions
