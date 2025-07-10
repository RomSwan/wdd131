const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () 
{
    if (input.value.trim() !== "") 
    {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value; // Populate the li element variable's textContent or innerHTML with the input value.
        deleteButton.textContent = "❌"; // Populate the button textContent with a ❌.
    
        deleteButton.addEventListener("click", function()
        {
            list.removeChild(li);
            input.focus();
        });
    
        li.append(deleteButton); // Append the li element variable with the delete button.
        list.append(li); // Append the li element variable to the unordered list in your HTML.
    
        input.value = "";
    }
    
    input.focus()
});