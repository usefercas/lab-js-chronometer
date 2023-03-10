class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback != undefined) {
          callback();
        }
      }, 1000);
    }

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let response;
    let numeroEnString = value.toString();
    if (numeroEnString.length < 2) {
      console.log("Estoy dentro del if");
      response = "0" + numeroEnString;
    } else {
      response = numeroEnString;
    }
    return response;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + 
    this.computeTwoDigitNumber(this.getSeconds());
  }
}
