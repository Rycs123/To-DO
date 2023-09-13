// Berhubungan ama db dan view (client)

const TodoModel = require('../model/TodoModel');
const TodoView = require("../view/TodoView");

class TodoController {
   static show() {
      let todos = TodoModel.show();
      TodoView.show(todos);
   }

   static add(params) {
      TodoModel.add(params);
   }

   static delete(params) {
      TodoModel.delete(params);
   }

   static update(params) {
      TodoModel.update(params);
   }

   static message(msg) {
      TodoView.message(msg);
   }
}

module.exports = TodoController;