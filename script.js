const uidInput = document.querySelector("#uid");
const passInput = document.querySelector("#password");
const submit = document.querySelector("#submit");
const pushTask = document.querySelector("#push-task");
const newTask = document.querySelector("#new-task");
const todoList = document.querySelector("#todolist");
const taskBtns = document.querySelectorAll("#todolist button");
let i = 0;
//this will accept any password and log you in regardless. I will add proper authentication once I copy this project to vs code
submit.addEventListener("click", () => {
  const loggedin = login(uidInput.value, passInput.value)
  if (loggedin) {
    console.log("Authentication Successful");
  } else {
    console.log("Authentication Failed")
  }
})
const login = (uid, password) => {
  return true;
}

function todoClick() {
    try {
      todoList.innerHTML += `
      <li> 
        <input type="checkbox" name="tasks">
        <span class="checkmark"></span>
        <button id="${i}"></button>
        <label>${newTask.value}</label>
      </li>`
      newTask.value = "";
    }
    catch(e) {
      console.log(e.message)
    }
    i++;
}

function todoLoad() {
  for (x of taskBtns) {
    x.addEventListener("click", () => {

    })
  }
}