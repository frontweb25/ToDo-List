
const dom = {
    new: document.querySelector('#new'),
    add: document.querySelector('#add'),
    tasks: document.querySelector('#tasks')
};

const arrTasks = [];

//Отслеживаем клик по кнопке для добавления задачи

dom.add.addEventListener('click', () => {
    const task = dom.new.value;
    if(task) {
        addTask(task); 
        dom.new.value = '';
    } 
    
    
});

//Функция добавления задачи
function addTask(text) {
    const timestamp = Date.now();
    const task = {
        id: timestamp,
        text: text,
        isComplete: false,
    };
    arrTasks.push(task);
    console.log(arrTasks)
}


