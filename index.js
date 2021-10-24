class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selectorEL = document.querySelector(selector);
    this._daysEL = this._selectorEL.querySelector('[data-value="days"]');
    this._hoursEL = this._selectorEL.querySelector('[data-value=hours]');
    this._minsEL = this._selectorEL.querySelector('[data-value=mins]');
    this._secsEL = this._selectorEL.querySelector('[data-value=secs]');
    this._time = targetDate;
    this._intervalId = null;
    this._isActive = false;
  }

  start() {
    if (this._isActive) {
      return;
    }

    this._isActive = true;
    this._intervalId = setInterval(() => {
      const time = this.getTimeComponents(this._time - Date.now());
      this.insertValues(time);
    }, 1000);
  }
  getTimeComponents(time) {

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
    }
    
  insertValues({ days, hours, mins, secs }) {
    this._daysEL.textContent = days;
    this._hoursEL.textContent = hours;
    this._minsEL.textContent = mins;
    this._secsEL.textContent = secs;
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 2, 2022'),
});

timer.start();