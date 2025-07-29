const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () 
{
    if (input.value.trim() !== "") 
    {
        displayList(input.value);
        chaptersArray.push(input.value); // add the chapter to the array
        setChaptersList(); // update the localStorage with the new array
        input.value = "";
    }
    
    input.focus()
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value; // Populate the li element variable's textContent or innerHTML with the input value.
    deleteButton.textContent = "❌";
    
    deleteButton.addEventListener("click", function() // Delete button
    {
        list.removeChild(li);
        input.focus();
    });
    
    li.append(deleteButton); // Append the li element variable with the delete button.
    list.append(li); // Append the li element variable to the unordered list in your HTML.
    
    input.value = "";
    input.focus()
}

function setChapterList() { // Updates chapter list
    localStorage.setItem("chapterList", JSON.stringify(chaptersArray));
}

function getChapterList() { // Retrieves chapter list
    return JSON.parse(localStorage.getItem("chapterList"))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); //slices off last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}