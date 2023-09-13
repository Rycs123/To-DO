let tasks = [
   {
      id: 1,
      name: "Belajar DOM",
      status: true,
   },
   {
      id: 2,
      name: "Belajar CSS",
      status: false,
   },
   {
      id: 3,
      name: "Belajar HTML",
      status: false,
   }
]

let btn_click = document.getElementById("btn_click");

btn_click.style.background = "black";
btn_click.style.color = "white";

function button_clicked() {
   let input_task = document.getElementById("task_form").value
   if (input_task !== '') {
      let id = tasks[tasks.length - 1].id + 1
      let tempObj = {
         id,
         name: input_task,
         status: false
      }
      tasks.push(tempObj)
      getTask()
      // ? Ketika udah add task, harus ngisi ulang
      document.getElementById('task_form').value = ''
   } else {
      alert("Harap mengisi task dengan benar")
   }
}

btn_click.addEventListener("click", button_clicked)

// * Callback Function
// btn_click.addEventListener("click", () => {
//    console.log("Event Listener Click");
// })
// console.log(tasks);

function getTask() {
   let tBody = document.getElementById("tBody");
   tBody.innerHTML = ""
   tasks.forEach(task => {
      tBody.innerHTML += `<tr>
      <td>${task.id}</td>
      <td>${task.name}</td>
      <td>${task.status}</td>
    </tr>`
   })
}

getTask()
