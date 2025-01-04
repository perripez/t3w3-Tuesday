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

function renderData() {

    // Create an unordered list tag
    let costumesContainerList = document.createElement("ul");

    // Removes the existing content from the element
    costumesContainer.innerText = "";

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

        removeButton.onclick = (() => removeCostumeFromDataList(costume));

        // Add the element to the container
        costumesContainerList.appendChild(newCostumeEntry);

        // Add the button to the container
        newCostumeEntry.appendChild(removeButton);

    });

    // Add the container to the HTML page
    costumesContainer.appendChild(costumesContainerList);
}

function removeCostumeFromDataList(targetItemToRemove){
    dataArray = dataArray.filter((costume) => costume !== targetItemToRemove);
    renderData();
}

function addCostumeToDataList(event, targetInputId) {

    // Prevent the form from doing defult behaviour (refreshing page)
    event.preventDefault();
    console.log("Add costume to the list function is running!")

    // Find the input text field based on targetInputId
    let targetTextInput = document.getElementById(targetInputId);

    // Get the value from the field
    console.log(targetTextInput.value);

    // Push to the dataArray
    dataArray.push(targetTextInput.value);

    // Clear input field after submit
    targetTextInput.value = "";

    // renderData function call to update the page
    renderData();
}

// Find the form from the event
// Add funtion outside of function -> only executes once, not every time function runs
let formInputButton = document.getElementById("costumesInputForm");
formInputButton.addEventListener("submit", (event) => addCostumeToDataList(event, "costumeInputText"));