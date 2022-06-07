const root = document.querySelector("#root");

// Create basic todoList
const todoList = [
  {
    text: "Gym",
    completed: false,
  },
  {
    text: "School",
    completed: false,
  },
  {
    text: "Cook",
    completed: false,
  },
];

// Create a function called renderTodos() that loops through todoList
// and puts the todos in li elements inside of todoListElement
const renderTodos = () => {
  // Create a todoListElement
  const todoListElement = document.createElement("ul");

  // Standard for loop with array
  // initialize a counter; condition for for loop to stop; increment
  // for (let i = 0; i < todoList.length; i += 1) {
  //   // i = 0, 1, 2
  //   const item = todoList[i];
  //   console.log(item);
  // }

  // For of loop
  // for (const item of todoList) {
  //   console.log(item);
  // }

  // Foreach
  todoList.forEach((todo, idx) => {
    const todoElement = document.createElement("li");
    todoElement.textContent = todo.text;
    if (todo.completed) {
      // ^ same as saying (todo.completed === true)
      // If the todo is completed, add a class to the todoElement of completed
      todoElement.classList.add("completed");
    }
    // Add an event listener for click,
    // that will toggle the class completed
    // and change the completed property
    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      todoList[idx].completed = !todoList[idx].completed;
    });

    // Append new todoElement to the todoListElement
    todoListElement.appendChild(todoElement);
  });

  root.appendChild(todoListElement);
};

const addTodo = (todoText) => {
  // add the new todo to the todoList
};

window.onload = () => {
  renderTodos();

  // Create a form with a text input for a new todo
  // and an input type submit.
  // When the form receives the submit event,
  // it should prevent the page from being reloaded
  // and call the addTodo() function which will
  // add the new Todo to the todoList and renderTodos()
};
