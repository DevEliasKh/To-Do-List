//// function to make project
//// store all project in an array

export const project = ['programming'];
let projectToAddToStorage = '';

export function makeProjectInLocalStorage() {
	if (!localStorage.getItem('project')) {
		let projectInStorage = JSON.stringify(project);
		localStorage.setItem('project', projectInStorage);
	}
}

export function getProjectValue() {
	const projectInput = document.querySelector('.project-list li input');
	const projectName = projectInput.value;
	projectInput.style.display = 'none';
	projectInput.value = '';
	if (projectName) {
		project.push(projectName);
		const parent = document.querySelector('.project-list');
		const newProject = document.createElement('li');
		newProject.innerText = projectName;
		parent.prepend(newProject);
		projectToAddToStorage = projectName;
		saveProjectInLocalStorage();
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
