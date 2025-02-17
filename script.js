const addButton = document.getElementById("add-btn");
const deleteButton = document.getElementById("delete-btn");
const todoInput = document.getElementById("todo-input");
const unorderedListContainer = document.getElementById("unordered-list");

// Code To Change The Theme......
const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
  const backgroundColor = getComputedStyle(document.body).backgroundColor;

  if (!backgroundColor || backgroundColor === "rgb(255, 255, 255)") {
    // Checking white in RGB format
    document.body.style.backgroundColor = "#2E2E2E"; // Matte grey shade
    document.getElementById("label-footer").style.color = "white";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.getElementById("label-footer").style.color = "black";
    document.body.style.color = "black";
  }
});

addButton.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (!todoText.trim()) return; // Prevent adding empty tasks

  // Create <li> element
  const liElement = document.createElement("li");
  liElement.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "list-group-item"
  );
  liElement.innerText = todoText; // Set task text

  // Create delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "btn-sm"); // Bootstrap styling

  deleteButton.addEventListener("click", () => {
    liElement.remove();
  });

  // Append delete button to <li>
  liElement.appendChild(deleteButton);

  // Append <li> to the unordered list
  unorderedListContainer.appendChild(liElement);

  // Clear input field
  todoInput.value = "";
});

deleteButton.addEventListener("click", () => {
  unorderedListContainer.innerHTML = ""; // Clear all list items
});
