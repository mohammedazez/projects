let allTodos = document.querySelector("#all-todos");

const showTodos = async () => {
  try {
    // proses ambil data sesuai user
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id);
    let response = await fetch(
      `https://5f51a6865e98480016123bdd.mockapi.io/users/${user.id}/todos`
    );
    let data = await response.json();
    console.log(data);

    // proses menampilkan datanya
    data.forEach((element) => {
      // show todo list
      let todoList = document.createElement("li");
      let todoText = document.createTextNode(`${element.todo}`);
      todoList.appendChild(todoText);

      // tambah line enter
      linebreak = document.createElement("br");
      todoList.appendChild(linebreak);

      //show completed
      let todoCompleted = document.createTextNode(`${element.completed}`);
      todoList.appendChild(todoCompleted);

      // button delete
      let deleteTodo = document.createElement("button");
      let deleteText = document.createTextNode("delete todo");
      deleteTodo.appendChild(deleteText);

      // function untuk delete
      deleteTodo.addEventListener("click", function () {
        funcDeleteTodo(user.id, element.id);
      });

      // button edit completed
      let editCompletedBtn = document.createElement("button");
      let editCompletedText = document.createTextNode("completed");
      editCompletedBtn.appendChild(editCompletedText);

      // function untuk edit complete
      editCompletedBtn.addEventListener("click", () => {
        funcEditCompleted(user.id, element.id);
      });

      // button edit todo
      let editTodo = document.createElement("button");
      let editTodoText = document.createTextNode("Edit Todo");
      editTodo.appendChild(editTodoText);

      // function untuk edit todo
      editTodo.addEventListener("click", () => {
        funcEditTodo(user.id, element.id);
      });

      // appendchild ke div todo
      allTodos.appendChild(todoList);
      allTodos.appendChild(deleteTodo);
      allTodos.appendChild(editCompletedBtn);
      allTodos.appendChild(editTodo);
    });
  } catch {
    console.log("error");
  }
};
showTodos();

const addTodo = async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);
  let todo = document.getElementById("todo-input").value;
  console.log("tes add", todo);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo, completed: false }),
  };

  let response = await fetch(
    `https://5f51a6865e98480016123bdd.mockapi.io/users/${user.id}/todos/`,
    options
  );
  let result = await response.json();
  console.log(result);
  location.reload();
};

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
    .then(() => {
      alert("data anda sudah terhapus");
      location.reload();
    });
}

function funcEditCompleted(idUser, idTodo) {
  console.log("idUser", idUser);
  console.log("idTodo", idTodo);
  let url = `https://5f51a6865e98480016123bdd.mockapi.io/users/${idUser}/todos/${idTodo}`;

  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: true }),
  };

  fetch(url, options)
    .then((response) => {
      response.json();
    })
    .then(() => {
      alert("todo anda sudah selesai");
      location.reload();
    });
}

async function funcEditTodo(idUser, idTodo) {
  console.log("tes button edit");
  console.log("idUser", idUser);
  console.log("idTodo", idTodo);

  let url = `https://5f51a6865e98480016123bdd.mockapi.io/users/${idUser}/todos/${idTodo}`;
  let response = await fetch(url);
  let data = await response.json();

  let promptEdit = prompt("edit todo anda");
  console.log(promptEdit);

  let dataKirim = {
    ...data,
    todo: promptEdit,
  };

  console.log(dataKirim);

  let options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataKirim),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then(() => {
      alert("todo anda sudah terganti");
      location.reload();
    });
}

function logout() {
  console.log("tes logout");
  localStorage.clear();
  window.location.replace("./index.html");
}
