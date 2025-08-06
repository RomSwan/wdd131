const guitars = [
    {
        id: "F-H",
        brand: "Fender",
        model: "Hellcat",
        colour: "Natural",
        price: 2000,
        discount: false,
        type: "Acoustic Electric",
        body: "Mahogany",
        neck: "Maple",
        fretboard: "Walnut",
        frets: "19",
        strings: "6",
        pickups: "Fishman system",
        imgURL: "images/fender-hellcat.jpg"
    },
    {
        id: "I-A",
        brand: "Ibanez",
        model: "Artcore",
        colour: "Tobacco Flat",
        price: 1500,
        discount: false,
        type: "Hollowbody Electric",
        body: "Basswood",
        neck: "Basswood",
        fretboard: "Laurel",
        frets: "22",
        strings: "6",
        pickups: "2 Infinity R humbuckers",
        imgURL: "images/ibanez-artcore.jpg"
    },
    {
        id: "MM-M",
        brand: "Music Man",
        model: "Majesty",
        colour: "Green Gravity",
        price: 20000,
        discount: true,
        type: "Electric",
        strings: "6",
        body: "Mahogany",
        neck: "Mahogany",
        fretboard: "Ebony",
        frets: "24",
        strings: "6",
        pickups: "Dreamcatcher and Rainmaker",
        imgURL: "images/music-man-majesty.jpg"
    },
];

// Calculate Discount
function calculateDiscount(discount, price) {
    if (discount) {
        discountPrice = price / 2

        return `${discountPrice}zł (50% OFF) <i><s>${price}zł</s></i>`
    }

    else {
        return `${price}zł`
    }
}

// Guitar Display
//createGuitarDisplay(guitars));

// Filters
const home = document.querySelector("#hellcat") // Hellcat
home.addEventListener("click", () => {
    createGuitarDisplay(guitars.filter(guitar => guitar.id == "F-H"));
});
const old = document.querySelector("#artcore") // Artcore
old.addEventListener("click", () => {
    createGuitarDisplay(guitars.filter(guitar => guitar.id == "I-A"));
});
const new_ = document.querySelector("#majesty") // Majesty
new_.addEventListener("click", () => {
    createGuitarDisplay(guitars.filter(guitar => guitar.id == "MM-M"));
});

function createGuitarDisplay(guitarChoice) {
    document.querySelector(".guitar-info").innerHTML = ""; // Cleans output

  guitarChoice.forEach(guitar => {
    // Variables
    let display = document.createElement("div");

    let topInfo = document.createElement("div");
    let name = document.createElement("h3");
    let price = document.createElement("h3");

    let image = document.createElement("img");

    let bottomInfo = document.createElement("div");
    let type = document.createElement("h4");
    let colour = document.createElement("p");
    let body = document.createElement("p");
    let neck = document.createElement("p");
    let fretboard = document.createElement("p");
    let frets = document.createElement("p");
    let strings = document.createElement("p");
    let pickups = document.createElement("p");

    // Display Content
    display.setAttribute("class", "display");
    topInfo.setAttribute("class", "topInfo");
    bottomInfo.setAttribute("class", "bottomInfo");

    name.innerHTML = `<span class="guitar-name">${guitar.brand} - ${guitar.model}</span>`;
    price.innerHTML = `<span class="guitar-price">${calculateDiscount(guitar.discount, guitar.price)}</span>`;

    image.setAttribute("class", "guitar-image");
    image.setAttribute("src", guitar.imgURL);
    image.setAttribute("alt", `${guitar.name}`);
    image.setAttribute("loading", "lazy");

    type.innerHTML = `<span class="guitar-type">${guitar.type}</span>`;
    colour.innerHTML = `<span class="label">Colour:</span> ${guitar.colour}`
    body.innerHTML = `<span class="label">Body:</span> ${guitar.body}`;
    neck.innerHTML = `<span class="label">Neck:</span> ${guitar.neck}`;
    fretboard.innerHTML = `<span class="label">Fretboard:</span> ${guitar.fretboard}`;
    frets.innerHTML = `<span class="label">Frets:</span> ${guitar.frets}`;
    strings.innerHTML = `<span class="label">Strings:</span> ${guitar.strings}`;
    pickups.innerHTML = `<span class="label">Pickups:</span> ${guitar.pickups}`;

    // Append Variables to Display
    display.appendChild(topInfo);
    display.appendChild(image);
    display.appendChild(bottomInfo);

    topInfo.appendChild(name);
    topInfo.appendChild(price);

    bottomInfo.appendChild(type);
    bottomInfo.appendChild(colour);
    bottomInfo.appendChild(body);
    bottomInfo.appendChild(neck);
    bottomInfo.appendChild(fretboard);
    bottomInfo.appendChild(frets);
    bottomInfo.appendChild(strings);
    bottomInfo.appendChild(pickups);

    // Add Display to HTML
    document.querySelector(".guitar-info").appendChild(display);
  })
}