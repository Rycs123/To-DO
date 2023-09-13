// Berhubungan dengan db

const fs = require('fs');
const { stringify } = require('querystring');

class TodoModel {
   constructor(id, task, status) {
      this.id = id;
      this.task = task;
      this.status = status || false;
   }

   static getTodos() {
      let data = fs.readFileSync('./data.json', 'utf8');
      let parsedData = JSON.parse(data);
      let todos = parsedData.map(element => {
         const { id, task, status } = element;
         return new TodoModel(id, task, status);
      });
      return todos;
   }

   static show() {
      let parsedData = this.getTodos();
      return parsedData;
   }

   static add(todo) {
      let todos = this.getTodos();
      let id = todos[todos.length - 1].id + 1;
      let task = todo[0];
      let temp = new TodoModel(id, task);
      console.log(temp);
      todos.push(temp);
      this.save(todos);
   }

   static delete(todo) {
      let todos = this.getTodos();
      let id = Number(todo[0]);
      todos = todos.filter(todo => todo.id !== id);
      // console.log(todos);
      this.save(todos);
   }

   static update(todo) {
      // console.log(todo);
      let todos = this.getTodos();
      let id = Number(todo[0]);
      let task = todo[1];
      todos = todos.map(todo => {
         if (todo.id === id) {
            todo.task = task;
         }
         return todo;
      })
      // console.log(todos);
      this.save(todos);
   }
   static save(data) {
      // todo[0] masih dalam bentuk string 'kerja' harus diubah ke object biar bs dipush
      fs.writeFileSync('./data.json', JSON.stringify(data, null, 3))
   }
}

module.exports = TodoModel;