// Declare the data to display in the font-end

let dataArray = [
    "Frankenstein",
    "Dracula",
    "Chucky",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin",
    "Joker",
    "Clown"
];

let costumesContainer = document.getElementById("costumeContainer");

// Create an unordered list tag
let costumesContainerList = document.createElement("ul");

// costumesContainer.innerText = "Hello World!";

dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);

    // Create the list element
    let newCostumeEntry = document.createElement("li");

    // Add the value to the HTML element
    newCostumeEntry.innerText = costume;

    // Add a delete button to each entry
    let removeButton = document.createElement("button");

    // Add a placeholder value or name to the button
    removeButton.innerText = "Remove " + costume;

    // Add the element to the container
    costumesContainerList.appendChild(newCostumeEntry);

    // Add the button to the container
    costumesContainerList.appendChild(removeButton);
    
});


// Add the container to the HTML page
costumesContainer.appendChild(costumesContainerList);