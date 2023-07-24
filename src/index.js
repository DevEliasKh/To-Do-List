import { makeTaskInLocalStorage } from './task';
import {
	displayTaskFrom,
	displayProjectForm,
	makeTaskCard,
	makeProjectList,
} from './DOM';
import { makeProjectInLocalStorage } from './project';

displayTaskFrom();
displayProjectForm();
makeTaskInLocalStorage();
makeTaskCard();
makeProjectInLocalStorage();
makeProjectList();

// const { DateTime } = require('luxon');
// const now = DateTime.now();
// console.log(now.toLocaleString(DateTime.TIME_24_SIMPLE));
