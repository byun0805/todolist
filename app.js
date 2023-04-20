const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearBtn = document.getElementById('clear-tasks');

// 로컬스토리지에서 할 일 목록을 불러옵니다.
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 화면에 할 일 목록을 보여줍니다.
function renderTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
      task.completed = !task.completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    });
    taskList.appendChild(taskItem);
  });
}

// 새로운 할 일을 추가합니다.
function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName !== '') { // 공백 여부 확인
    tasks.push({ name: taskName, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
  }
}

// 할 일 목록을 모두 삭제합니다.
function clearTasks() {
  localStorage.removeItem('tasks');
  tasks.splice(0, tasks.length);
  renderTasks();
}

// 이벤트 리스너를 등록합니다.
addTaskBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTasks);

// 화면 초기화 시 할 일 목록을 보여줍니다.
renderTasks();