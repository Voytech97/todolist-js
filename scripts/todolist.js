const todoInput = document.getElementsByClassName('todoInput')[0];
const btn = document.getElementsByClassName('btn')[0];


document.onselectstart = function(){
    return false;
};

btn.addEventListener('click', ()=>{
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    if(localTasks === null){
        taskList = []
    } else {
        taskList = localTasks;
    }
    taskList.push(todoInput.value)
    localStorage.setItem('localTask', JSON.stringify(taskList))
    showList()
})

function showList(){
    let output = '';
    let displayTasks = document.querySelector('.todoItem')
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    if(localTasks === null){
        taskList = []
    } else {
        taskList = localTasks;
    }
    taskList.forEach((data, index)=>{
        output += `
        <div class="todolistTask">
    <p class="taskText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})"><b>x</b></button>
</div>
        `
    });
    displayTasks.innerHTML = output;
}
showList()

function deleteItem(index){
    let localTasks = JSON.parse(localStorage.getItem('localTask'))
    taskList.splice(index, 1)
    localStorage.setItem('localTask', JSON.stringify(taskList))
    showList()
}