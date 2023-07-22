import { makeTaskInLocalStorage } from './task';
import { displayTaskFrom, displayProjectForm, makeTaskCard } from './DOM';
import { makeProjectInLocalStorage } from './project';

displayTaskFrom();
displayProjectForm();
makeTaskInLocalStorage();
makeTaskCard();
makeProjectInLocalStorage();
// const { DateTime } = require('luxon');
// const now = DateTime.now();
// console.log(now.toLocaleString(DateTime.TIME_24_SIMPLE));
