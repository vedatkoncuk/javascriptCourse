const todoList = [{
  name:'make dinner',
  date:'2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    const{name, date} = todoObject;
    const html = `
    <div>${name}</div>
    <div> ${date}</div>
    <div>
      <button onclick ="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
    </div>`;
    todoListHTML += html;
  });

  document.querySelector('.todo-list-js')
  .innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name =  inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;

  todoList.push({
 /*    name: name,
    date: date */
    name,
    date
});


  renderTodoList();
}


