let allTodos = document.querySelector("#todos");

// ========= add todos from mock api ========
let addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
  console.log("tes button todo");
  // 1. Ambil dom value
  let item = document.getElementById("todo").value;
  let completed = false;
  // 2. Siapkan data yang mau dikirim ke backend
  let todoData = {
    item,
    completed,
  };
  console.log("todoData", todoData);

  // 3. Merubah data object menjadi JSON
  let todoDataJSON = todoData;
  console.log(todoDataJSON);

  // 4. Siapin options untuk post
  let url = "https://5f51a6865e98480016123bdd.mockapi.io/todo";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  };

  // 5. fetch bisasa sesuai dengan options
  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      getTodos();
    });
}
// ========= get todos from mock api ========
const getTodos = async () => {
  try {
    let response = await fetch(
      "https://5f51a6865e98480016123bdd.mockapi.io/todo"
    );
    let data = await response.json();
    console.log(data);
    data.forEach((element) => {
      console.log("data");
      // let itemTodo = document.createElement('div')
      let todoList = document.createElement("li");
      let todoText = document.createTextNode(`${element.item}`);
      todoList.appendChild(todoText);
      let todoComplete = document.createTextNode(`${element.completed}`);
      todoList.appendChild(todoComplete);
      let deleteTodo = document.createElement("button");
      let deleteText = document.createTextNode("delete todo");
      deleteTodo.addEventListener("click", funcDeleteTodo);
      deleteTodo.appendChild(deleteText);

      allTodos.appendChild(todoList);
      allTodos.appendChild(deleteTodo);
    });
  } catch {
    console.log("api mungkin sedang mati");
  }
};
console.log(allTodos);

getTodos();

function funcDeleteTodo() {
  console.log("tombol delete");
}
