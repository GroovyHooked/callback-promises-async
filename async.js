import { timer, logger } from './utils.js';

const service1_start = document.getElementById("service1-start");
const service2_start = document.getElementById("service2-start");
const service3_start = document.getElementById("service3-start");
const service4_start = document.getElementById("service4-start");
const service1_end = document.getElementById("service1-end");
const service2_end = document.getElementById("service2-end");
const service3_end = document.getElementById("service3-end");
const service4_end = document.getElementById("service4-end");
const service5_start = document.getElementById("service5-start");
const service5_end = document.getElementById("service5-end");
const service6_start = document.getElementById("service6-start");
const service6_end = document.getElementById("service6-end");
const service7_start = document.getElementById("service7-start");
const service7_end = document.getElementById("service7-end");


const dependencies = {
  service1: false,
  service2: false,
  service3: false,
  service4: false,
  service5: false,
  service6: false,
  service7: false,
};

const service = async (n, startElement, endElement, startTime, dep) => {
  const time = timer();
  const duration = Math.round((time / 1000) * 100) / 100;
  await new Promise((resolve) => {
    setTimeout(() => {
      dep[`service${n}`] = true;
      logger(n, startTime, duration)
      displayDuration(startElement, endElement, startTime, duration + startTime);
      resolve();
    }, time);
  });
  return duration + startTime;
};

let service5, service6;
const service1 = await service(1, service1_start, service1_end, 0, dependencies);
const service2 = await service(2, service2_start, service2_end, 0, dependencies);
const service3 = await service(3, service3_start, service3_end, 0, dependencies);
const service4 = await service(4, service4_start, service4_end, 0, dependencies);


if (service1 > service2) {
  service5 = await service(5, service5_start, service5_end, service1, dependencies);
} else {
  service5 = await service(5, service5_start, service5_end, service2, dependencies);
}
if (service3 > service4) {
  service6 = await service(6, service6_start, service6_end, service3, dependencies);
} else {
  service6 = await service(6, service6_start, service6_end, service4, dependencies);
}
if (service5 > service6) {
  await service(7, service7_start, service7_end, service5, dependencies);
} else {
  await service(7, service7_start, service7_end, service6, dependencies);
}

function displayDuration(startElement, endElement, startTime, duration){
  startElement.innerHTML = startTime;
  endElement.innerHTML = duration;
};
