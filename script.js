
// Get Element By ID
const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

// Data Set to Local Storage and get from Local storage
const dataHandler = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const inputText = getElement("todo-text")
    const inputValue = inputText.value;
   
    if (inputValue.length === 0) {
        return alert("Please Ente a Title");
    }
    console.log(todos);
    let todoList;

    if(!todos) {
        todoList = [
            {title: inputValue, completed : false},
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    } else {
        todoList = [
            ...todos,
            {title: inputValue, completed : false},
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    inputText.value = '';
    render();
}


// Display Data in UI and render from local storage
 
const render = () => {
    const todosData = JSON.parse(localStorage.getItem("TODOS"));
   
    const todoContainer = document.getElementById("todo-list");
    todoContainer.innerHTML = '';

    todosData.forEach((todo) => {
        
        const li = document.createElement('li');
        li.classList.add('py-3');
        li.innerText = todo.title;
        todoContainer.appendChild(li);
    });
}
render();

//Delete 
const deleteTodos = () => {
    localStorage.removeItem("TODOS");
    render();
}
