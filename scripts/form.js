const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Append Products to Form
const select = document.getElementById("product");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
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