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
const dependencies = []
let finalTime1 = 0;
let finalTime2 = 0;
//debugger
const service1 = (callback) => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  endTime > finalTime1 ? finalTime1 = endTime : null;
  console.log('Started service 1 at 0s');
  setTimeout(() => {
    service1_end.innerHTML = endTime;
    console.log('%cEnded: Service 1 at ' + endTime + ' s', 'color: red');
    dependencies[0] = true
    if (dependencies[0] && dependencies[1]) {
      callback();
    }
  }, time);
}

const service2 = (callback) => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  endTime > finalTime1 ? finalTime1 = endTime : null;
  console.log('Started service 2 at 0s');
  setTimeout(() => {
    service2_end.innerHTML = endTime;
    console.log('%cEnded: Service 2 at ' + endTime + 's', 'color: red');
    dependencies[1] = true
    if (dependencies[0] && dependencies[1]) {
      callback();
    }
  }, time);
}

const service3 = (callback) => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  endTime > finalTime2 ? finalTime2 = endTime : null;
  console.log('Started service 3 at 0s');
  setTimeout(() => {
    service3_end.innerHTML = endTime;
    console.log('%cEnded: Service 3 at ' + endTime + 's', 'color: blue');
    dependencies[2] = true
    if (dependencies[2] && dependencies[3]) {
      callback();
    }
  }, time);
}

const service4 = (callback) => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  endTime > finalTime2 ? finalTime1 = endTime : null;
  console.log('Started service 4 at 0s');
  setTimeout(() => {
    service4_end.innerHTML = endTime;
    console.log('%cEnded: Service 4 at ' + endTime + 's', 'color: blue');
    dependencies[3] = true
    if (dependencies[2] && dependencies[3]) {
      callback();
    }
  }, time);
}

const service5 = () => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  service5_start.innerHTML = finalTime1;
  console.log('%cService 1 & 2 ended at ' + finalTime1 + ', Starting Service 5', 'color: red');
  const temp = finalTime1;
  finalTime1 += endTime;
  setTimeout(() => {
    service5_end.innerHTML = finalTime1;
    console.log('%cService 5 started at ' + temp + 's, ended at ' + finalTime1 + 's' + ' and lasted ' + endTime + 's', 'color: red');
    dependencies[4] = true
    if (dependencies[4] && dependencies[5]) {
      service7();
    }
  }, time);
}

const service6 = () => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  service6_start.innerHTML = finalTime2;
  console.log('%cService 3 & 4 ended at ' + finalTime2 + ', Starting Service 6', 'color: blue');
  const temp = finalTime2;
  finalTime2 += endTime;
  setTimeout(() => {
    service6_end.innerHTML = finalTime2;
    console.log('%cService 6 started at ' + temp + 's, ended at ' + finalTime2 + 's' + ' and lasted ' + endTime + 's', 'color: blue');
    dependencies[5] = true
    if (dependencies[4] && dependencies[5]) {
      service7();
    }
  }, time);
}

const service7 = () => {
  const time = timer();
  const endTime = Math.round(time / 1000 * 100) / 100
  let finaltime = finalTime1 > finalTime2 ? finalTime1 : finalTime2;
  service7_start.innerHTML = finaltime;
  console.log('%cService 5 & 6 ended at ' + finaltime + 's, Starting Service 7', 'color: green');
  const temp = finaltime;
  finaltime += endTime;
  setTimeout(() => {
    service7_end.innerHTML = finaltime;
    console.log('%cService 7 started at ' + temp + 's, ended at ' + finaltime + 's' + ' and lasted ' + endTime + 's', 'color: green');
    dependencies[6] = true
  }, timer());
}


service1(service5);
service2(service5);
service3(service6);
service4(service6);