// Untuk client

class TodoView {
   static show(params) {
      console.log("Todo List: ");
      params.forEach(param => {
         const { id, task, status } = param;
         if (status) {
            console.log(`${id}. [X] ${task}`);
         } else {
            console.log(`${id}. [ ] ${task}`);
         }
      });
   }

   static message(msg) {
      console.log(msg);
   }
}

module.exports = TodoView;