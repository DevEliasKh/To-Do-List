////  store all task in array ane each task as object
//todo function to add task
//todo function to edit task
//todo function to delete task
//todo function to change the project
//todo function to change the due time
//// save all this task related stuff in local storage

import { makeTaskCard } from './DOM';
export const task = [
	{
		title: 'some title',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		project: 'programming',
		dueTime: '13:30',
		dueDate: 'Fri, Oct 14, 1983',
	},
];

export function addTask() {
	const title = document.querySelector('#task-title');
	const description = document.querySelector('#task-description');
	const project = document.querySelector('#task-project');
}

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
		task.push(newTask);
		taskFrom.style.display = 'none';
		makeTaskCard();
		saveInStorage();
	});
}

function saveInStorage() {
	let taskInStorage = JSON.stringify(task);
	localStorage.setItem('task', taskInStorage);
}
