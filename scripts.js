const h1 = document.querySelector("h1");
const nam = document.querySelector(".nam");
const las = document.querySelector(".las");
const add = document.querySelector(".btn");
const trr = document.querySelector(".trr");

add.addEventListener("click", () => {
  item();
  toDo();
});
z;
function item() {
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  let newToDo = {
    Name: nam.value,
    LastName: las.value,
  };
  let result = [...task, newToDo];
  localStorage.setItem("todo", JSON.stringify(result));
}
nam.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    item();
    toDo();
  }
});
las.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    item();
    toDo();
  }
});

function del() {
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  let btns = document.querySelectorAll(".delete");
  btns.forEach((btnn, index) => {
    btnn.addEventListener("click", () => {
      task = task.filter((el, idx) => {
        return idx !== index;
      });
      localStorage.setItem("todo", JSON.stringify(task));
      toDo();
    });
  });
}
del();
// trr.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentNode.parentNode.remove();
//   }
// });
function toDo() {
  trr.innerHTML = "";

  if (nam.value === "" || las.value === "") {
    // alert("You must write somthing");
  } else {
    trr.innerHTML = "";
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    task.map((el) => {
      trr.innerHTML += `<tr>
      <th>${el.Name}</th> <th>${el.LastName}</th> <th><button class="delete btn btn-danger">delete</button></th>
      </tr>`;
      nam.value = "";
      las.value = "";
    });
    del();
    // trr.innerHTML += `<tr>
    // <th>${el.Name}</th> <th>${el.LastName}</th> <th><button class="delete btn btn-danger">delete</button></th>
    // </tr>`;
    // nam.value = "";
    // las.value = "";
  }
}
toDo();
add.addEventListener("mouseover", () => {
  if (nam.value === "" || las.value === "") {
    add.style.cursor = "no-drop";
  } else {
    add.style.cursor = "pointer";
  }
});

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((el) => {
  console.log(el > 4);
});
