function startGame() {
    var name = getInputValue('name');
    postName(name);
}
function postName(name) {
    var nameElement = document.getElementById('postedName');
    nameElement.innerText = "My name is: " + name;
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('start').addEventListener('click', startGame);
