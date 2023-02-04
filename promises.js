import { logger, displayDuration, timer, objectOfNode } from "./utils.js";

const dependencies = {
  service1: false,
  service2: false,
  service3: false,
  service4: false,
  service5: false,
  service6: false,
};

const service = (n, startElement, endElement, startTime, dep) => {
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


const runService = (n, startElement, endElement, startTime, deps) => {
  service(n, startElement, endElement, startTime, deps).then((duration) => {
    if (deps.service1 && deps.service2) {
      deps.service1 = false;
      service(5, objectOfNode[5].start, objectOfNode[5].end, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, objectOfNode[7].start, objectOfNode[7].end, duration, deps)
        }
      })
    }
    if (deps.service3 && deps.service4) {
      deps.service3 = false;
      service(6, objectOfNode[6].start, objectOfNode[6].end, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, objectOfNode[7].start, objectOfNode[7].end, duration, deps)
        }
      })
    }
  });
}

for (let i = 1; i <= 4; i++) {
  runService(i, objectOfNode[i].start, objectOfNode[i].end, 0, dependencies);
}



