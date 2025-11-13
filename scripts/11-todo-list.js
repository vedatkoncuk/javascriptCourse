const todoList = [];

renderTodoList();


function renderTodoList() {
  let renderTodo = '';
  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    const html = `<p>${element}</p>`;
    renderTodo += html;
  }
  console.log(renderTodo);
  document.querySelector('.todo-list-js').innerHTML = renderTodo;

}

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name =  inputElement.value;
  console.log(name);

  todoList.push(name);
  console.log(todoList);

  renderTodoList();
}


