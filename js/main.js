
const dom = {
    new: document.querySelector('#new'),
    add: document.querySelector('#add'),
    tasks: document.querySelector('#tasks')
};

const arrTasks = [];

//Отслеживаем клик по кнопке для добавления задачи

dom.add.addEventListener('click', () => {
    const newTasksText = dom.new.value;
    if(newTasksText && isNotHaveTask(newTasksText, arrTasks)) {
        addTask(newTasksText, arrTasks); 
        dom.new.value = '';
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



