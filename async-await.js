import { timer, logger, displayDuration } from './utils.js';

const dependencies = {};
let isStarted = false;
let chrono

const startChrono = () => {
  if (!isStarted) {
    chrono = window.startChronometer();
    isStarted = true;
  }
}

const service = async (n, startTime, dependencies) => {
  startChrono();
  const time = timer();
  const duration = Math.round((time / 1000) * 100) / 100;
  await new Promise((resolve) => {
    setTimeout(() => {
      dependencies[`service${n}`] = true;
      logger(n, startTime, duration)
      displayDuration(n, startTime, duration + startTime);
      resolve();
      if (n === 7) clearInterval(chrono);
    }, time);
  });
  return duration + startTime;
};

let service5, service6;
const service1 = await service(1, 0, dependencies);
const service2 = await service(2, 0, dependencies);
const service3 = await service(3, 0, dependencies);
const service4 = await service(4, 0, dependencies);

if (service1 > service2) {
  service5 = await service(5, service1, dependencies);
} else {
  service5 = await service(5, service2, dependencies);
}
if (service3 > service4) {
  service6 = await service(6, service3, dependencies);
} else {
  service6 = await service(6, service4, dependencies);
}
if (service5 > service6) {
  await service(7, service5, dependencies);
} else {
  await service(7, service6, dependencies);
}

