

/* style.backgroundColor = 'rgba(93, 127, 0, 1)'; */

/* Add list item function */

function addListItem() {
    const newElement = document.createElement("li");
    const newElementText = document.createTextNode("Hello again");
    newElement.appendChild(newElementText);
    document.getElementById('unorder-list').appendChild(newElement);

}

/* Add numbers function */

function addNumbers() {
    let innerValues = document.getElementById('input-field');
    const addedNumbers = innerValues.value;
    innerValues.value = parseInt(addedNumbers) + 1;
    if (innerValues.value == 5) {
        document.getElementById('btn-disable').setAttribute('disabled', true);
    }
    console.log(addedNumbers);

}

