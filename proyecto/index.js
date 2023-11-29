const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasksList = [];

function addTask(description) {
    tasksList.push({ done: false, description });
}

function printTasks() {
    tasksList.forEach((task, index) => {
        console.log(`[${task.done ? 'X' : ' '}] ${index + 1}. ${task.description}`);
    });
}

function markTaskAsDone(index) {
    if (tasksList[index]) {
        tasksList[index].done = true;
    } else {
        console.log("Tarea no encontrada.");
    }
}

function deleteTask(index) {
    if (tasksList[index]) {
        tasksList.splice(index, 1);
    } else {
        console.log("Tarea no encontrada.");
    }
}

function editTask(index, newDescription) {
    if (tasksList[index]) {
        tasksList[index].description = newDescription;
    } else {
        console.log("Tarea no encontrada.");
    }
}
function askTask() {
    rl.question('Qué quieres hacer? (ADD, LIST, MARK, DELETE, EDIT, EXIT) ', (answer) => {
        switch (answer) {
            case "ADD":
                rl.question('Añade una tarea: ', (answer) => {
                    addTask(answer);
                    askTask();
                });
                break;
            case "LIST":
                printTasks();
                askTask();
                break;
            case "MARK":
                rl.question('¿Cuál tarea has completado? ', (answer) => {
                    markTaskAsDone(answer - 1);
                    askTask();
                });
                break;
            case "DELETE":
                rl.question('¿Cuál tarea quieres borrar? ', (answer) => {
                    deleteTask(answer - 1);
                    askTask();
                });
                break;
            case "EDIT":
                rl.question('¿Cuál tarea quieres editar? ', (answer) => {
                    rl.question('¿Qué quieres poner en su lugar? ', (answer2) => {
                        editTask(answer - 1, answer2);
                        askTask();
                    });
                });
                break;
            case "EXIT":
                rl.close();
                break;
            default:
                askTask();
        }
    });
}

askTask();