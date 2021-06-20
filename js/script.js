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
   const startIndex = (page *  10) - 10;
   const endIndex = page * 10;
   console.log(startIndex);
   console.log(endIndex);
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
      if (i > startIndex && i < endIndex) {
         const ul = document.querySelector('.student-list')

         const li = document.createElement('li');
         li.className = 'student-item cf';
         ul.appendChild(li);

         const div = document.createElement('div');
         div.className = 'student-details';
         li.appendChild(div);

         const img = document.createElement('img');
         img.className = 'avatar';
         img.src = `${list[i].picture.large}`;
         div.appendChild(img);

         const h3 = document.createElement('h3');
         h3.innerHTML = `${list[i].name.first} ${list[i].name.last}`;
         div.appendChild(h3);

         const span = document.createElement('span');
         span.className = 'email';
         span.innerHTML = `${list[i].email}`;
         div.appendChild(span);

         const divJoined = document.createElement('div');
         divJoined.className = 'joined-details';
         li.appendChild(divJoined);

         const spanDate = document.createElement('span');
         spanDate.className = 'date';
         spanDate.innerHTML = `Joined ${list[i].registered.date}`;
         divJoined.appendChild(spanDate);
      }
   }
 }
 
showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
