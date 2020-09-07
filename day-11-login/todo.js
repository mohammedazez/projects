let allTodos = document.querySelector("#all-todos");

const showTodos = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id);
    let response = await fetch(
      `https://5f51a6865e98480016123bdd.mockapi.io/users/${user.id}/todos`
    );
    let data = await response.json();
    console.log(data);
    data.forEach((element) => {
      let todoList = document.createElement("li");
      let todoText = document.createTextNode(`${element.todo}`);
      todoList.appendChild(todoText);

      // button delete
      let deleteTodo = document.createElement("button");
      let deleteText = document.createTextNode("delete todo");
      deleteTodo.appendChild(deleteText);
      // function untuk delete
      deleteTodo.addEventListener("click", function () {
        funcDeleteTodo(user.id, element.id);
      });

      allTodos.appendChild(todoList);
      allTodos.appendChild(deleteTodo);
    });
  } catch {
    console.log("error");
  }
};
showTodos();

function funcDeleteTodo(idUser, idTodo) {
  console.log("idUser", idUser);
  console.log("idTodo", idTodo);
  let url = `https://5f51a6865e98480016123bdd.mockapi.io/users/${idUser}/todos/${idTodo}`;

  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => {
      response.json();
    })
    .then((result) => {
      alert("data anda sudah terhapus");
      location.reload();
    });
}

function logout() {
  console.log("tes logout");
  localStorage.clear();
  window.location.replace("./index.html");
}
