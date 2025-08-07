const guitars = [
    {
        id: "1",
        brand: "Fender",
        model: "Hellcat",
    },
    {
        id: "2",
        brand: "Ibanez",
        model: "Artcore",
    },
    {
        id: "3",
        brand: "Music Man",
        model: "Majesty",
    },
];

// Append Guitars to Form
const select = document.getElementById("guitar");

guitars.forEach((guitar) => {
    const option = document.createElement("option");
    option.value = guitar.id;
    option.textContent = `${guitar.brand} - ${guitar.model}`;
    select.appendChild(option);
});

// Calculate # of Requests
const form = document.getElementById("form");
const requestCount = document.getElementById("request-count");

let count = Number(localStorage.getItem("request")) || 0;

form.addEventListener("submit", function (event) {
    count++;
    localStorage.setItem("request", count);
});

if (count == 1) { // I like to be grammatically correct
    document.getElementById("request-count").textContent = `You have made ${count} request.`;
}

else {
    document.getElementById("request-count").textContent = `You have made ${count} requests.`;
}