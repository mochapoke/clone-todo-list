// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo);


// Functions
function addTodo(event){
  // prevent form from submitting
  // refresh 안되게 하기
  event.preventDefault(); 

  // todo div 할일+버튼1+버튼2 를 포함하는 DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); 
  // todo라는 class이름을 div에 적용함
  // 즉, <div class='todo'> 을 생성한 것임.

  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item'); // use this to CSS
  todoDiv.appendChild(newTodo); // todoDiv 에 추가하기

  // check  mark button
  const completeButton = document.createElement('button');
  completeButton.innerHTML ='<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  // check  trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML ='<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // append toDo List 
  // 위에만든 기능들을 포함한 div를 
  // 쿼리셀렉터로 선태한 todoList에 추가하기
  todoList.appendChild(todoDiv); 
}