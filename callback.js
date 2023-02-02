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
  duration1: timer(),
  duration2: timer(),
  duration3: timer(),
  duration4: timer(),
  duration5: timer(),
  duration6: timer(),
  duration7: timer(),
};

console.log({ objectOfDurations });
let totalTime1 = 0;
let totalTime2 = 0;

const service = (n, callback1, callback2, dependencies) => {
  const time = timer();
  let duration = objectOfDurations[`duration${n}`];
  duration = Math.round((duration / 1000) * 100) / 100;
  setTimeout(() => {
    console.log(`service${n}: started at 0s and lasted ${duration}s`);
    dependencies[n - 1] = true;
    if (dependencies[0] && dependencies[1]) {
      dependencies[0] = false;
      duration > totalTime1 ? (totalTime1 = duration) : null;
      callback1();
    }
    if (dependencies[2] && dependencies[3]) {
      dependencies[2] = false;
      duration > totalTime2 ? (totalTime2 = duration) : null;
      callback2();
    }
  }, time);
};

const service5 = () => {
  const time = objectOfDurations.duration5;
  const duration = Math.round((time / 1000) * 100) / 100;
  service5_start.innerHTML = totalTime1;
  console.log(
    `%cService 1 & 2 ended at ${totalTime1} , Starting Service 5`,
    "color: red"
  );
  const temp = totalTime1;
  totalTime1 += duration;
  setTimeout(() => {
    dependencies[4] = true;
    service5_end.innerHTML = totalTime1;
    console.log(
      `%cService 5 started at ${temp}s, ended at ${totalTime1}s and lasted ${duration}s`,
      "color: red"
    );
    if (dependencies[4] && dependencies[5]) {
      dependencies[4] = false;
      service7();
    }
  }, time);
};

const service6 = () => {
  const time = objectOfDurations.duration6;
  const duration = Math.round((time / 1000) * 100) / 100;
  service6_start.innerHTML = totalTime2;
  console.log(
    `%cService 3 & 4 ended at ${totalTime2} , Starting Service 6`,
    "color: blue"
  );
  const temp = totalTime2;
  totalTime2 += duration;
  setTimeout(() => {
    dependencies[5] = true;
    service6_end.innerHTML = totalTime2;
    console.log(
      `%cService 6 started at ${temp}s, ended at ${totalTime2}s and lasted ${duration}s`,
      "color: blue"
    );
    if (dependencies[4] && dependencies[5]) {
      dependencies[4] = false;
      service7();
    }
  }, time);
};

const service7 = () => {
  const time = objectOfDurations.duration7;
  const duration = Math.round((time / 1000) * 100) / 100;
  let finalTime = totalTime1 > totalTime2 ? totalTime1 : totalTime2;
  service7_start.innerHTML = finalTime;
  console.log(
    `%cService 5 & 6 ended at ${finalTime} , Starting Service 7`,
    "color: green"
  );
  const temp = finalTime;
  finalTime += duration;
  setTimeout(() => {
    service7_end.innerHTML = finalTime;
    console.log(
      `%cService 7 started at ${temp}s, ended at ${finalTime}s and lasted ${duration}s`,
      "color: green"
    );
  }, timer());
};

service(1, service5, service6, dependencies);
service(2, service5, service6, dependencies);
service(3, service5, service6, dependencies);
service(4, service5, service6, dependencies);
