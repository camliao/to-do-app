function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  // Not sure if adding the deleteItem functionality within the function onReady is correct, as I've done below...
  // or am I'm supposed to create a new function i.e. `function Delete()` that comes after this function.
  // When I tried that however, it pretty much "canceled out" all of the code below, as it didn't let me
  // create a new To-Do-List item; it just caused the page to keep reloading.
  const deleteItem = document.getElementbyId('deleteItem');

  //add event listener to addToDoForm
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
 }



 window.onload = function() {
  onReady();
};
