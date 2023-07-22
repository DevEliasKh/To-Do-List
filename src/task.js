////  store all task in array ane each task as object
//// function to add task
//todo function to delete task
//// save all this task related stuff in local storage

import { makeTaskCard } from './DOM';

const task = [
	{
		title: 'some title',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		project: 'programming',
		dueTime: '13:30',
		dueDate: 'Fri, Oct 14, 1983',
	},
];

let taskToAddToStorage = {};
export function getTaskValue() {
	const form = document.querySelector('#add-task-form');
	const taskFrom = document.querySelector('.add-task-form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let newTask = {};
		newTask.title = document.querySelector('#task-title').value;
		newTask.description = document.querySelector('#task-description').value;
		newTask.project = document.querySelector('#task-project').value;
		newTask.dueTime = document.querySelector('#task-time').value;
		newTask.dueDate = document.querySelector('#task-date').value;
		taskToAddToStorage = newTask;
		saveTaskInLocalStorage();
		makeTaskCard();
		taskFrom.style.display = 'none';
	});
}

export function makeTaskInLocalStorage() {
	if (!localStorage.getItem('task')) {
		let taskInStorage = JSON.stringify(task);
		localStorage.setItem('task', taskInStorage);
	}
}

function saveTaskInLocalStorage() {
	const newTask = taskToAddToStorage;
	let oldTaskInStorage = localStorage.getItem('task');
	let task = JSON.parse(oldTaskInStorage);
	task.push(newTask);
	let newTaskInStorage = JSON.stringify(task);
	localStorage.setItem('task', newTaskInStorage);
}
