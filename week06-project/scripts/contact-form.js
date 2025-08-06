const guitars = [
    {
        id: "1",
        brand: "Fender",
        model: "Hellcat",
        colour: "Natural",
        type: "acoustic",
        strings: "6"
    },
    {
        id: "2",
        brand: "Ibanez",
        model: "Artcore",
        colour: "Black Flat",
        type: "semi-acoustic",
        strings: "6"
    },
    {
        id: "3",
        brand: "Music Man",
        model: "Majesty",
        colour: "Green Gravity",
        type: "electric",
        strings: "6"
    },
];

// Append guitars to Form
const select = document.getElementById("guitar");

guitars.forEach((guitar) => {
    const option = document.createElement("option");
    option.value = guitar.id;
    option.textContent = `${guitar.brand} - ${guitar.model}`;
    select.appendChild(option);
});

// Calculate # of Reviews
const reviewHTML = document.getElementById("review-count");
if (reviewHTML) { // Check if #review-count exists
    let count = Number(localStorage.getItem("review")) || 0;

    count++;

    localStorage.setItem("review", count);
    document.getElementById("review-count").textContent = count;
}