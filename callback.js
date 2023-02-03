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
const dependencies = [];
const objectOfDurations = {};

let totalTime1 = 0;
let totalTime2 = 0;
let finalTime = 0;

const service = (n, dependencies, service, totalDuration = 0) => {
  const time = Math.round((timer() / 1000) * 100) / 100;
  objectOfDurations[`duration${n}`] = time;
  setTimeout(() => {
    logger(n, totalDuration, time);
    displayDuration(n, totalDuration, time);
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

function logger(n, totalDuration, time) {
  const pickColorAndLog = (n, totalDuration, time, color) => {
    if (color) {
      return console.log(
        `%cservice${n}: started at ${totalDuration}s and lasted ${time}s for a total of ${
          totalDuration + time
        }s`,
        `color: white; background-color: ${color};`
      );
    }
    return console.log(
      `service${n}: started at ${totalDuration}s and lasted ${time}s for a total of ${
        totalDuration + time
      }s`
    );
  };
  if (n < 3) {
    pickColorAndLog(n, totalDuration, time, "lightblue");
  }
  if (n === 3 || n === 4) {
    pickColorAndLog(n, totalDuration, time, "pink");
  }
  if (n === 5) {
    pickColorAndLog(n, totalDuration, time, "red");
  }
  if (n === 6) {
    pickColorAndLog(n, totalDuration, time, "blue");
  }
  if (n === 7) {
    pickColorAndLog(n, totalDuration, time, "black");
  }
}

const objectOfNode = {
  1: {
    start: service1_start,
    end: service1_end,
  },
  2: {
    start: service2_start,
    end: service2_end,
  },
  3: {
    start: service3_start,
    end: service3_end,
  },
  4: {
    start: service4_start,
    end: service4_end,
  },
  5: {
    start: service5_start,
    end: service5_end,
  },
  6: {
    start: service6_start,
    end: service6_end,
  },
  7: {
    start: service7_start,
    end: service7_end,
  },
};

function displayDuration(n, startTime, duration) {
  objectOfNode[n].start.innerHTML = startTime;
  objectOfNode[n].end.innerHTML = duration;
}
