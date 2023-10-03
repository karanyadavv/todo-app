let todo = [];

renderTodoList();

function renderTodoList(){
  let todoHTML = '';

for(let i =0; i<todo.length; i++){
  const todolm = todo[i];
  const valuehtml = `
  <div class="todo-list-container">
  <p class="list-item">
  ${todolm}
  </p>
  <button class="delete-button" onclick="
      todo.splice(${i}, 1);
      renderTodoList();
      pendingTasks();
  ">
    <img src="icons/delete.png" alt="Icon" />
  </button>
  </div>`;
  todoHTML += valuehtml;
}

document.querySelector('.js-todo-list')
  .innerHTML = todoHTML;
}


function addTodos(){
  const inputElement = document.querySelector('.js-todo-name');
  const name  = inputElement.value;


  if (name.trim() === '') {
    alert('Please enter a todo name.');
    return;
  }

  todo.push(name);

  inputElement.value = '';
  renderTodoList();
  pendingTasks();
}

function pendingTasks(){
  document.querySelector('.js-pending-task').innerHTML = `You have ${todo.length} pending tasks`;
}

function clearAll(){
  todo = [];
  document.querySelector('.js-todo-list')
      .innerHTML = '';
  pendingTasks();
}