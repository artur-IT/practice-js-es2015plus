import Programmer from "./classes/Programmer.js";
import Junior from "./classes/Junior.js";
import Mid from "./classes/Mid.js";
import Senior from "./classes/Senior.js";

const features = {
  skills: 10,
  experience: 10,
  willingness: 10,
};

const task = {
  difficult: 3,
  size: 3,
};

// const programmer = new Programmer(features);
// const time = programmer.getApproximateTimeTaskDoneInHours(task);
// console.log("Programmer: ", time);

const programmerJunior = new Junior(features);
const timeJunior = programmerJunior.getApproximateTimeTaskDoneInHours(task);
console.log("Junior: ", timeJunior);

const programmerMid = new Mid(features);
const timeMid = programmerMid.getApproximateTimeTaskDoneInHours(task);
console.log("Mid: ", timeMid);

const programmerSenior = new Senior(features);
const timeSenior = programmerSenior.getApproximateTimeTaskDoneInHours(task);
console.log("Senior: ", timeSenior);
