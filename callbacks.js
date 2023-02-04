import { logger, displayDuration, timer } from "./utils.js";

const dependencies = {};
const objectOfDurations = {};

let totalTime1 = 0;
let totalTime2 = 0;
let finalTime = 0;
let isStarted = false;
let chrono

const startChrono = () => {
  if (!isStarted) {
    chrono = window.startChronometer();
    isStarted = true;
  }
}

const service = (n, dependencies, service, totalDuration = 0) => {
  startChrono()
  const time = Math.round((timer() / 1000) * 100) / 100;
  objectOfDurations[`duration${n}`] = time;
  setTimeout(() => {
    logger(n, totalDuration, time);
    displayDuration(
      n,
      totalDuration,
      totalDuration === 0 ? time : totalDuration + time
    );
    dependencies[n] = true;
    if (dependencies[1] && dependencies[2]) {
      dependencies[1] = false;
      objectOfDurations.duration1 > objectOfDurations.duration2
        ? (totalTime1 = objectOfDurations.duration1)
        : (totalTime1 = objectOfDurations.duration2);
      service(5, dependencies, service, totalTime1);
    }
    if (dependencies[3] && dependencies[4]) {
      dependencies[3] = false;
      objectOfDurations.duration3 > objectOfDurations.duration4
        ? (totalTime2 = objectOfDurations.duration3)
        : (totalTime2 = objectOfDurations.duration4);
      service(6, dependencies, service, totalTime2);
    }
    if (dependencies[5] && dependencies[6]) {
      dependencies[5] = false;
      objectOfDurations.duration5 + totalTime1 >
        objectOfDurations.duration6 + totalTime2
        ? (finalTime = objectOfDurations.duration5 + totalTime1)
        : (finalTime = objectOfDurations.duration6 + totalTime2);
      service(7, dependencies, undefined, finalTime);
      clearInterval(chrono);
    }
  }, time);
};


for (let i = 1; i <= 4; i++) {
  service(i, dependencies, service);
}
