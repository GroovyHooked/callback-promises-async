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
const service1_div = document.querySelector(".service1");
const service2_div = document.querySelector(".service2");
const service3_div = document.querySelector(".service3");
const service4_div = document.querySelector(".service4");
const service5_div = document.querySelector(".service5");
const service6_div = document.querySelector(".service6");
const service7_div = document.querySelector(".service7");
const pattern_span = document.querySelector(".pattern");
const timer = document.querySelector(".time");

const button_callbacks = document.getElementById("start-callbacks");
const button_promises = document.getElementById("start-promises");
const button_async = document.getElementById("start-async-await");

const objectOfNodes = {
  1: {
    start: service1_start,
    end: service1_end,
    div: service1_div,
  },
  2: {
    start: service2_start,
    end: service2_end,
    div: service2_div,
  },
  3: {
    start: service3_start,
    end: service3_end,
    div: service3_div,
  },
  4: {
    start: service4_start,
    end: service4_end,
    div: service4_div,
  },
  5: {
    start: service5_start,
    end: service5_end,
    div: service5_div,
  },
  6: {
    start: service6_start,
    end: service6_end,
    div: service6_div,
  },
  7: {
    start: service7_start,
    end: service7_end,
    div: service7_div,
  },
  buttons: {
    button_callbacks,
    button_promises,
    button_async,
  }
};

const colors = {
  1: "#f9b049",
  2: "#f9b049",
  3: "#0096c7",
  4: "#0096c7",
  5: "#F9844A",
  6: "#277DA1",
  7: "#43AA8B",
}

window.cleanStyles = () => {
  for (let i = 1; i < 8; i++) {
    objectOfNodes[i].div.style.backgroundColor = "#D6CCC2";
    objectOfNodes[i].div.style.color = "black"
    objectOfNodes[i].start.innerHTML = "";
    objectOfNodes[i].end.innerHTML = "";
  }
}
window.startScript = (src, button, color) => {
  window.cleanStyles();
  const scriptToRemove = document.querySelector('script[type="module"]');
  if (scriptToRemove) {
    scriptToRemove.remove();
  }
  const script = document.createElement('script');
  script.type = 'module';
  script.src = src;
  document.body.appendChild(script);
  button.style.backgroundColor = 'grey';
  const pattern = src.split('.')[1].split('').slice(1).join('')
  pattern_span.innerHTML = `${pattern}`;
  pattern_span.style.color = color;
  console.log(`****************** ${pattern.toUpperCase()} ******************`)
}

window.objectOfNodes = objectOfNodes;
window.colors = colors;

window.startChronometer = () => {
  let start = Date.now();
  const interval = setInterval(() => {
    timer.innerHTML = Math.round((Date.now() - start) / 1000 * 100) / 100;
  }, 150);
  return interval;
}


