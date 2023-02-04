const colors = {
  1: "pink",
  2: "pink",
  3: "lightblue",
  4: "lightblue",
  5: "#ff8e8e",
  6: "#0077b6",
  7: "#40916c",
}

export const timer = () => Math.random() * 10000;

export const logger = (n, totalDuration, time) => {
  const pickColorAndLog = (n, totalDuration, time, color) => {
    if (color) {
      return console.log(
        `%cservice${n}: started at ${totalDuration}s and lasted ${time}s for a total of ${totalDuration + time
        }s`,
        `color: white; background-color: ${color};`
      );
    }
    return console.log(
      `service${n}: started at ${totalDuration}s and lasted ${time}s for a total of ${totalDuration + time
      }s`
    );
  };
  if (n < 3) {
    pickColorAndLog(n, totalDuration, time, colors[n]);
  }
  if (n === 3 || n === 4) {
    pickColorAndLog(n, totalDuration, time, colors[n]);
  }
  if (n === 5) {
    pickColorAndLog(n, totalDuration, time, colors[n]);
  }
  if (n === 6) {
    pickColorAndLog(n, totalDuration, time, colors[n]);
  }
  if (n === 7) {
    pickColorAndLog(n, totalDuration, time, colors[n]);
  }
}

export const displayDuration = (n, startTime, duration) => {
  window.objectOfNodes[n].start.innerHTML = startTime;
  window.objectOfNodes[n].end.innerHTML = duration;
  window.objectOfNodes[n].div.style.backgroundColor = colors[n];
  window.objectOfNodes[n].div.style.color = "white"
}
