const timer = () => Math.random() * 10000;
const dependencies = []

const service1 = (callback) => {
  console.log('Started: Service 1');
  setTimeout(() => {
    console.log('Ended: Service 1');
    dependencies[0] = 'done'
    if (dependencies[0] === 'done' && dependencies[1] === 'done') {
      callback();
    }
  }, timer());
}

const service2 = (callback) => {
  console.log('Started: Service 2');
  setTimeout(() => {
    console.log('Ended: Service 2');
    dependencies[1] = 'done'
    if (dependencies[0] === 'done' && dependencies[1] === 'done') {
      callback();
    }
  }, timer());
}

const service3 = (callback) => {
  console.log('Started: Service 3');
  setTimeout(() => {
    console.log('Ended: Service 3');
    dependencies[2] = 'done'
    if (dependencies[2] === 'done' && dependencies[3] === 'done') {
      callback();
    }
  }, timer());
}

const service4 = (callback) => {
  console.log('Started: Service 4');
  setTimeout(() => {
    console.log('Ended: Service 4');
    dependencies[3] = 'done'
    if (dependencies[2] === 'done' && dependencies[3] === 'done') {
      callback();
    }
  }, timer());
}

const service5 = () => {
  console.log('Started: Service 5');
  setTimeout(() => {
    console.log('Ended: Service 5');
    dependencies[4] = 'done'
    if (dependencies[4] === 'done' && dependencies[5] === 'done') {
      service7();
    }
  }, timer());
}

const service6 = () => {
  console.log('Started: Service 6');
  setTimeout(() => {
    console.log('Ended: Service 6');
    dependencies[5] = 'done'
    if (dependencies[4] === 'done' && dependencies[5] === 'done') {
      service7();
    }
  }, timer());
}

const service7 = () => {
  console.log('Started: Service 7');
  setTimeout(() => {
    console.log('Ended: Service 7');
    dependencies[6] = 'done'
  }, timer());
}


service1(service5);
service2(service5);
service3(service6);
service4(service6);