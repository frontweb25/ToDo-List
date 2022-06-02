
const dom = {
    new: document.querySelector('#new'),
    add: document.querySelector('#add'),
    tasks: document.querySelector('#tasks'),
    count: document.querySelector('#count')
};

const arrTasks = [];

//Отслеживаем клик по кнопке для добавления задачи

dom.add.addEventListener('click', () => {
    const newTasksText = dom.new.value;
    if(newTasksText && isNotHaveTask(newTasksText, arrTasks)) {
        addTask(newTasksText, arrTasks); 
        dom.new.value = '';
        tasksRender(arrTasks);
    }
});

//Функция добавления задачи
function addTask(text, list) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text: text,
        isComplete: false,
    };
    list.push(task);
    console.log(arrTasks);
}

//Проверка существования задачи в массиве задач

function isNotHaveTask(text, list) {
    let isNotHave = true; // статус проверки

    list.forEach(task => {
        if(task.text === text) {
            alert('Задача уже существует');
            isNotHave = false;
            dom.new.value = '';
        } 
    });
    return isNotHave;
}



//Функция вывода списка задач

function tasksRender(list) {
    let htmlList = '';

    list.forEach(task => {
        const cls = task.isComplete ? 'todo__task todo__task-complete' 
        : 'todo__task';
        const checked = task.isComplete ? 'checked' : '';

        const taskHtml = `
        <div id="${task.id}" class="${cls}">
        <label class="todo__checkbox">
            <input type="checkbox" ${checked}>
            <div class="todo__checkbox-div"></div>
        </label>
        <div class="todo__task-text">${task.text}</div>
        <div class="todo__task-del">-</div>
        </div>
        `;
        htmlList += taskHtml;
    });

    dom.tasks.innerHTML = htmlList;
    countTask(arrTasks);
}

//Отслеживаем клик по чекбоксу задачи
dom.tasks.onclick = (event) => {
    const target = event.target;
    const isCheckBoxEl = target.classList.contains('todo__checkbox-div');
    const isDeletekEl = target.classList.contains('todo__task-del');

    if(isCheckBoxEl) {
        const task = target.parentElement.parentElement;
        const taskId = task.getAttribute('id');
        changeTaskStatus(taskId, arrTasks);
        tasksRender(arrTasks);
    }
    if(isDeletekEl) {
        const task = target.parentElement;
        const taskId = task.getAttribute('id');
        deleteTask(taskId, arrTasks);
        tasksRender(arrTasks);
    }
};

//Функция изменения статуса задачи
function changeTaskStatus(id, list) {
    list.forEach(task => {
        if(task.id == id) {
            task.isComplete = !task.isComplete;
        }
    });
}

//Функция удаления задачи

function deleteTask(id, list) {
    list.forEach((task, idx) => {
        if(task.id == id) {
            list.splice(idx, 1);
        }
    });
}

function countTask(list) {
    dom.count.innerHTML = list.length;
}