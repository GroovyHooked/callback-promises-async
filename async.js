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

const timer = () => Math.random() * 10000;

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
  const duration = Math.round(time / 1000 * 100) / 100;
  await new Promise((resolve) => {
    setTimeout(() => {
      dep[`service${n}`] = true;
      console.log(`service${n}: started at ${startTime}s and lasted ${duration}s for a total of ${startTime + duration}s`);
      displayDuration(startElement, endElement, startTime, duration + startTime);
      resolve();
    }, time);
  });
  return duration + startTime;
};

const runService = async (n, startElement, endElement, startTime, deps) => {
  const duration = await service(n, startElement, endElement, startTime, deps);
  if (deps.service1 && deps.service2) {
    deps.service1 = false;
    await runService(5, service5_start, service5_end, duration, deps);
  }
  if (deps.service3 && deps.service4) {
    deps.service3 = false;
    await runService(6, service6_start, service6_end, duration, deps);
  }
  if (deps.service5 && deps.service6) {
    deps.service5 = false;
    await runService(7, service7_start, service7_end, duration, deps);
  }
};


const displayDuration = (startElement, endElement, startTime, duration) => {
  startElement.innerHTML = startTime;
  endElement.innerHTML = duration;
};

runService(1, service1_start, service1_end, 0, dependencies);
runService(2, service2_start, service2_end, 0, dependencies);
runService(3, service3_start, service3_end, 0, dependencies);
runService(4, service4_start, service4_end, 0, dependencies);
