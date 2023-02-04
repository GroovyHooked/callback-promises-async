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
    pickColorAndLog(n, totalDuration, time, window.colors[n]);
  }
  if (n === 3 || n === 4) {
    pickColorAndLog(n, totalDuration, time, window.colors[n]);
  }
  if (n === 5) {
    pickColorAndLog(n, totalDuration, time, window.colors[n]);
  }
  if (n === 6) {
    pickColorAndLog(n, totalDuration, time, window.colors[n]);
  }
  if (n === 7) {
    pickColorAndLog(n, totalDuration, time, window.colors[n]);
  }
}

export const displayDuration = (n, startTime, duration) => {
  window.objectOfNodes[n].start.style.color = "#000";;
  window.objectOfNodes[n].end.style.color = "#000";
  window.objectOfNodes[n].start.innerHTML = `${startTime}s`;
  window.objectOfNodes[n].end.innerHTML = `${duration}s`;
  window.objectOfNodes[n].div.style.backgroundColor = window.colors[n];
  window.objectOfNodes[n].div.style.color = "white"
}
