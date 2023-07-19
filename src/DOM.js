//todo use task array to display task card
//todo see task based on project or time

import { task } from './task';

export function displayTaskFrom() {
	const addTask = document.querySelector('.add-task');
	const taskFrom = document.querySelector('.add-task-form');
	addTask.addEventListener('click', () => {
		taskFrom.style.display = 'grid';
	});

	const form = document.querySelector('#add-task-form');
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
	});
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
			console.log(projectName);
			if (projectName) {
				const parent = document.querySelector('.project-list');
				const newProject = document.createElement('li');
				newProject.innerText = projectName;
				parent.prepend(newProject);
			}
		}
	});
}
