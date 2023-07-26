//// use task array to display task card
//// use project array to make project list
//todo make clickable project to sort task by project

import { getProjectValue } from './project';
import { getTaskValue } from './task';

export function displayTaskFrom() {
	const addTask = document.querySelector('.add-task');
	const taskFrom = document.querySelector('.add-task-form');
	addTask.addEventListener('click', () => {
		taskFrom.style.display = 'grid';
	});

	getTaskValue();
}

export function displayProjectForm() {
	const addProjectBtn = document.querySelector('.add-project');
	const projectInput = document.querySelector('.default-project li input');
	addProjectBtn.addEventListener('click', () => {
		if (
			projectInput.style.display == '' ||
			projectInput.style.display == 'none'
		) {
			projectInput.style.display = 'block';
		} else {
			getProjectValue();
		}
	});
}

export function makeTaskCard() {
	const parent = document.querySelector('.tasks');
	parent.innerHTML = '';
	let taskInStorage = localStorage.getItem('task');
	let task = JSON.parse(taskInStorage);
	for (let i = 0; i < task.length; i++) {
		const currentTask = task[i];
		const newTask = document.createElement('div');
		newTask.className = 'task';
		newTask.innerHTML = `<div class="task-name fa-regular fa-circle fa-xl">
										<span> ${currentTask.title}</span>
									</div>
									<p class="description">
										${currentTask.description}
									</p>
									<p class="tags">
										<span class="project-name fas fa-tag"><a href="#"> ${currentTask.project}</a></span>
										<span class="due-date fa-solid fa-calendar"><a href="#"> ${currentTask.dueTime},${currentTask.dueDate}</a></span>
										<span class="edit fas fa-edit fa-lg"></span>
									</p>`;
		parent.prepend(newTask);
	}
}

export function makeProjectList() {
	let projectInStorage = localStorage.getItem('project');
	let project = JSON.parse(projectInStorage);
	const parent = document.querySelector('.created-project');
	parent.innerHTML = '';
	project.forEach((item) => {
		const newProject = document.createElement('li');
		newProject.innerHTML = `${item}`;
		parent.prepend(newProject);
	});
}
