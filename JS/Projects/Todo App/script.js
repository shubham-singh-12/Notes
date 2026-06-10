let inputElement = document.querySelector("#inputField");
let clickBtn = document.querySelector(".btn");
let todoDiv = document.querySelector(".todoListElem")

const addTodo = () => {
    // console.log(inputElement.value);

    // Create new element
    let paraElement = document.createElement("p");
    paraElement.textContent = inputElement.value;
    // console.log(paraElement);

    // Append New element as we click on btn
    todoDiv.append(paraElement);

    // Clear input field
    inputElement.value = "";

};

// Remove element as we click on it
const removeElement = () => {
    let currentElement = event.target;
    currentElement.remove();
}


clickBtn.addEventListener("click", () => {
    addTodo();
});

todoDiv.addEventListener("click", () => {
    removeElement();
})