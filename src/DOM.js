//todo use task array to display task card
//todo see task based on project or time

import { project } from './project';
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
	const projectInput = document.querySelector('.project-list li input');
	addProjectBtn.addEventListener('click', () => {
		if (
			projectInput.style.display == '' ||
			projectInput.style.display == 'none'
		) {
			projectInput.style.display = 'block';
		} else {
			const projectName = projectInput.value;
			projectInput.style.display = 'none';
			projectInput.value = '';
			if (projectName) {
				project.push(projectName);
				const parent = document.querySelector('.project-list');
				const newProject = document.createElement('li');
				newProject.innerText = projectName;
				parent.prepend(newProject);
			}
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
