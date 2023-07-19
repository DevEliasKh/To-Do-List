////  store all task in array ane each task as object
//todo function to add task
//todo function to edit task
//todo function to delete task
//todo function to change the project
//todo function to change the due time
//todo save all this task related stuff in local storage

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
