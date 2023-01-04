const timer = () => Math.random() * 10000;
const dependencies = []

const service = (callback, dep, nb) => {
  console.log(`Started: ${nb}`);
  const time = timer()
  setTimeout(() => {
    console.log(`Ended: ${nb} in ${Math.round(time)}ms`);
    dep[nb - 1] = true
    if (dep[nb - 1] && dep[nb]) {
      callback();
    }
  }, time);
}

const service1 = service(service5, dependencies, 1);
const service2 = service(service5, dependencies, 2);
const service3 = service(service6, dependencies, 3);
const service4 = service(service6, dependencies, 4);


function service5() {
  console.log('Service 1 & 2 ended, Starting Service 5');
  setTimeout(() => {
    console.log('Ended: Service 5');
    dependencies[4] = true
    if (dependencies[4] && dependencies[5]) {
      service7();
    }
  }, timer());
}

function service6() {
  console.log('Service 3 & 4 ended, Starting Service 6');
  setTimeout(() => {
    console.log('Ended: Service 6');
    dependencies[5] = true
    if (dependencies[4] && dependencies[5]) {
      service7();
    }
  }, timer());
}

function service7() {
  console.log('Service 5 & 6 ended, Starting Service 7');
  setTimeout(() => {
    console.log('Ended: Service 7');
    dependencies[6] = true
  }, timer());
}

service1(service5);
service2(service5);
service3(service6);
service4(service6);