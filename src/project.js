//// function to make project
//// store all project in an array

import { makeProjectList } from './DOM';

export const project = ['programming', 'Workout'];
let projectToAddToStorage = '';

export function makeProjectInLocalStorage() {
	if (!localStorage.getItem('project')) {
		let projectInStorage = JSON.stringify(project);
		localStorage.setItem('project', projectInStorage);
	}
}

export function getProjectValue() {
	const projectInput = document.querySelector('.default-project li input');
	const projectName = projectInput.value;
	projectInput.style.display = 'none';
	projectInput.value = '';
	if (projectName) {
		projectToAddToStorage = projectName;
		saveProjectInLocalStorage();
		makeProjectList();
	}
	console.log(projectToAddToStorage);
}

function saveProjectInLocalStorage() {
	const newProject = projectToAddToStorage;
	let oldProjectInStorage = localStorage.getItem('project');
	let project = JSON.parse(oldProjectInStorage);
	project.push(newProject);
	let newProjectInStorage = JSON.stringify(project);
	localStorage.setItem('project', newProjectInStorage);
}

export function sortByProject() {
	const projects = document.querySelectorAll('.created-project li');
	projects.forEach((project) => {
		project.addEventListener('click', console.log(project.innerText));
	});
}

function showProjectTask(project) {
	let taskInStorage = localStorage.getItem('task');
	let tasks = JSON.parse(taskInStorage);
	tasks.forEach((task) => {
		if (task.project == project) {
			console.log(task);
		} else {
			console.log('ops');
		}
	});
}
