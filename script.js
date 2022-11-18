const timer = () => Math.random() * 10000;

const service = (service, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(service + " " + time);
      resolve(service);
    }, time);
  });
};

const handlePromises = async () => {
  const promise1 = await service("service1", timer());
  const promise2 = await service("service2", timer());
  const promise3 = await service("service3", timer());
  const promise4 = await service("service4", timer());
  let promise5;
  let promise6;
  let promise7;
  if (promise1 && promise2) {
    promise5 = await service("service5", timer());
  }
  if (promise3 && promise4) {
    promise6 = await service("service6", timer());
  }
  if (promise5 && promise6) {
    promise7 = await service("service7", timer());
  }
};

handlePromises();
