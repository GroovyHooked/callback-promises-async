import { logger, displayDuration, timer } from "./utils.js";

const dependencies = {};

const service = (n, startTime, dep) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100;
  return new Promise((resolve) => {
    setTimeout(() => {
      dep[`service${n}`] = true;
      logger(n, startTime, duration);
      displayDuration(n, startTime, duration + startTime);
      resolve(duration + startTime);
    }, time);
  });
};


const runService = (n, startTime, deps) => {
  service(n, startTime, deps).then((duration) => {
    if (deps.service1 && deps.service2) {
      deps.service1 = false;
      service(5, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, duration, deps)
        }
      })
    }
    if (deps.service3 && deps.service4) {
      deps.service3 = false;
      service(6, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, duration, deps)
        }
      })
    }
  });
}

for (let i = 1; i <= 4; i++) {
  runService(i, 0, dependencies);
}



