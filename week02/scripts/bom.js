const input = document.querySelector("#favechap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value; // Populate the li element variable's textContent or innerHTML with the input value.
deleteButton.textContent = "❌"; // Populate the button textContent with a ❌.

li.append(deleteButton); // Append the li element variable with the delete button.
list.append(li); // Append the li element variable to the unordered list in your HTML.