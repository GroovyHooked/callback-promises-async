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
const dependencies = [];
const objectOfDurations = {
  duration1: Math.round((timer() / 1000) * 100) / 100,
  duration2: Math.round((timer() / 1000) * 100) / 100,
  duration3: Math.round((timer() / 1000) * 100) / 100,
  duration4: Math.round((timer() / 1000) * 100) / 100,
  duration5: Math.round((timer() / 1000) * 100) / 100,
  duration6: Math.round((timer() / 1000) * 100) / 100,
  duration7: Math.round((timer() / 1000) * 100) / 100,
};

let totalTime1 = 0;
let totalTime2 = 0;
let finalTime = 0;

const service = (n, dependencies, service, duration = 0) => {
  const time = timer();
  let lasted = objectOfDurations[`duration${n}`];
  setTimeout(() => {
    console.log(
      `service${n}: started at ${duration}s and lasted ${lasted}s for a total of ${
        duration + lasted
      }s`
    );
    dependencies[n - 1] = true;
    if (dependencies[0] && dependencies[1]) {
      dependencies[0] = false;
      objectOfDurations.duration1 > objectOfDurations.duration2
        ? (totalTime1 = objectOfDurations.duration1)
        : (totalTime1 = objectOfDurations.duration2);
      service(5, dependencies, service, totalTime1);
    }
    if (dependencies[2] && dependencies[3]) {
      dependencies[2] = false;
      objectOfDurations.duration3 > objectOfDurations.duration4
        ? (totalTime2 = objectOfDurations.duration3)
        : (totalTime2 = objectOfDurations.duration4);
      service(6, dependencies, service, totalTime2);
    }
    if (dependencies[4] && dependencies[5]) {
      dependencies[4] = false;
      objectOfDurations.duration5 > objectOfDurations.duration6
        ? (finalTime = objectOfDurations.duration5)
        : (finalTime = objectOfDurations.duration6);
      totalTime1 > totalTime2
        ? (finalTime += totalTime1)
        : (finalTime += totalTime2);
      service(7, dependencies, undefined, finalTime);
    }
  }, time);
};

service(1, dependencies, service);
service(2, dependencies, service);
service(3, dependencies, service);
service(4, dependencies, service);
