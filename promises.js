import { logger, displayDuration, timer } from "./utils.js";

const dependencies = {};

const service = (n, startTime, dependencies) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100;
  return new Promise((resolve) => {
    setTimeout(() => {
      dependencies[`service${n}`] = true;
      logger(n, startTime, duration);
      displayDuration(n, startTime, duration + startTime);
      resolve(duration + startTime);
    }, time);
  });
};


const runService = (n, startTime, dependencies) => {
  service(n, startTime, dependencies).then((duration) => {
    if (dependencies.service1 && dependencies.service2) {
      dependencies.service1 = false;
      service(5, duration, dependencies).then((duration) => {
        if (dependencies.service5 && dependencies.service6) {
          service(7, duration, dependencies)
        }
      })
    }
    if (dependencies.service3 && dependencies.service4) {
      dependencies.service3 = false;
      service(6, duration, dependencies).then((duration) => {
        if (dependencies.service5 && dependencies.service6) {
          service(7, duration, dependencies)
        }
      })
    }
  });
}

for (let i = 1; i <= 4; i++) {
  runService(i, 0, dependencies);
}



