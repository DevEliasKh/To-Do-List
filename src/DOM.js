//todo use task array to display task card
//todo see task based on project or time

export function displayTaskFrom() {
	const addTask = document.querySelector('.add-task');
	addTask.addEventListener('click', () => {
		const taskFrom = document.querySelector('.add-task-form');
		taskFrom.style.display = 'grid';
	});
}

export function displayProjectForm() {
	const addProjectBtn = document.querySelector('.add-project');
	const projectInput = document.querySelector('aside ul li input');
	addProjectBtn.addEventListener('click', () => {
		if (projectInput.style.display == '') {
			projectInput.style.display = 'block';
		} else {
			const projectName = projectInput.value;
			projectInput.style.display = 'none';
			projectInput.value = '';
			console.log(projectName);
		}
	});
}
