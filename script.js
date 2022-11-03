const service = (service, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(service + ' ' + time);
      resolve(service);
    }, time);
  });
};

const handleServices1 = (data, serviceToRun) => {
  console.log('data: ', data);
  let first = false;
  let second = false;
  if (data[0] === 'service1' || data[1] === 'service1') {
    first = true;
  }
  if (data[0] === 'service2' || data[1] === 'service2') {
    second = true;
  }
  if (first && second) {
    return new Promise((resolve) => {
      resolve(serviceToRun('service5', Math.random() * 10000));
    });
  }
};

const handleServices2 = (data, serviceToRun) => {
  console.log('data: ', data);
  let first = false;
  let second = false;
  if (data[0] === 'service3' || data[1] === 'service3') {
    first = true;
  }
  if (data[0] === 'service4' || data[1] === 'service4') {
    second = true;
  }
  if (first && second) {
    return new Promise((resolve) => {
      resolve(serviceToRun('service6', Math.random() * 10000));
    });
  }
};
let finalValue1 = null;
let finalValue2 = null;

Promise.all([
  service('service1', Math.random() * 10000),
  service('service2', Math.random() * 10000),
]).then((values) => {
  handleServices1(values, service).then((value) => {
    console.log('value1: ', value);
    return (finalValue1 = value);
  });
});

Promise.all([
  service('service3', Math.random() * 10000),
  service('service4', Math.random() * 10000),
]).then((values) => {
  handleServices2(values, service).then((value) => {
    console.log('value2: ', value);
    return (finalValue2 = value);
  });
});

if (finalValue1 !== null && finalValue2 !== null) {
  service('service7', Math.random() * 10000);
}
