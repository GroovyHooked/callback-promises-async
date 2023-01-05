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

const service1 = () => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  return new Promise((resolve) => {
    setTimeout(() => {
      service1_end.innerHTML = `${duration}s`
      dependencies[0] = true;
      console.log(`service1: started at 0s and lasted ${duration}s`);
      resolve(duration);
    }, time);
  });
};

const service2 = () => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  return new Promise((resolve) => {
    setTimeout(() => {
      service2_end.innerHTML = `${duration}s`
      dependencies[1] = true;
      console.log(`service2: started at 0s and lasted ${duration}s`);
      resolve(duration);
    }, time);
  });
};

const service3 = () => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  return new Promise((resolve) => {
    setTimeout(() => {
      service3_end.innerHTML = `${duration}s`
      dependencies[2] = true;
      console.log(`service3: started at 0s and lasted ${duration}s`);
      resolve(duration);
    }, time);
  });
};

const service4 = () => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  return new Promise((resolve) => {
    setTimeout(() => {
      service4_end.innerHTML = `${duration}s`
      dependencies[3] = true;
      console.log(`service4: started at 0s and lasted ${duration}s`);
      resolve(duration);
    }, time);
  });
};

const service5 = (previousTime) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  service5_start.innerHTML = `${previousTime}s`
  return new Promise((resolve) => {
    setTimeout(() => {
      service5_end.innerHTML = `${previousTime + duration}s`
      dependencies[4] = true;
      console.log(`service5 started at ${previousTime} and lasted ${duration}`);
      const totalTime = previousTime + duration;
      resolve(totalTime);
    }, time);
  });
};

const service6 = (previousTime) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  service6_start.innerHTML = `${previousTime}s`
  return new Promise((resolve) => {
    setTimeout(() => {
      service6_end.innerHTML = `${previousTime + duration}s`
      dependencies[5] = true;
      console.log(`service6 started at ${previousTime} and lasted ${duration}`);
      const totalTime = previousTime + duration;
      resolve(totalTime);
    }, time);
  });
};

const service7 = (previousTime) => {
  const time = timer();
  const duration = Math.round(time / 1000 * 100) / 100
  service7_start.innerHTML = `${previousTime}s`
  return new Promise((resolve) => {
    setTimeout(() => {
      service7_end.innerHTML = `${previousTime + duration}s`
      console.log(`service7 started at ${previousTime}, lasted ${duration} and ended at ${previousTime + duration}s`);
      const totalTime = previousTime + duration;
      resolve(totalTime);
    }, time);
  });
};

service1().then(time => {
  if (dependencies[0] && dependencies[1]) {
    service5(time).then(time => {
      if (dependencies[4] && dependencies[5]) {
        service7(time);
      }
    });
  }
})

service2().then(time => {
  if (dependencies[0] && dependencies[1]) {
    service5(time).then(time => {
      if (dependencies[4] && dependencies[5]) {
        service7(time);
      }
    })
  }
})

service3().then(time => {
  if (dependencies[2] && dependencies[3]) {
    service6(time).then(time => {
      if (dependencies[4] && dependencies[5]) {
        service7(time);
      }
    })
  }
})

service4().then(time => {
  if (dependencies[2] && dependencies[3]) {
    service6(time).then(time => {
      if (dependencies[4] && dependencies[5]) {
        service7(time);
      }
    })
  }
})