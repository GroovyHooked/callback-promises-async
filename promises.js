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
};

const service = (n, startTime, dep) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100;
  return new Promise((resolve) => {
    setTimeout(() => {
      dep[`service${n}`] = true;
      console.log(`service${n}: started at ${startTime}s and lasted ${duration}s for a total of ${startTime + duration}s`);
      resolve(duration + startTime);
    }, time);
  });
};


const runService = (n, startTime, deps) => {
  service(n, startTime, deps).then((duration) => {
    if (deps.service1 && deps.service2) {
      deps.service1 = false;
      deps.service2 = false;
      service(5, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, duration, deps)
        }
      })
    }
    if (deps.service3 && deps.service4) {
      deps.service3 = false;
      deps.service4 = false;
      service(6, duration, deps).then((duration) => {
        if (deps.service5 && deps.service6) {
          service(7, duration, deps)
        }
      })
    }
  });
}


runService(1, 0, dependencies);
runService(2, 0, dependencies);
runService(3, 0, dependencies);
runService(4, 0, dependencies);




