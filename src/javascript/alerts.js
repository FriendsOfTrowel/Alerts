export default class TrowelAlerts {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelAlert(element);
    })
  }
}

class TrowelAlert {
  constructor(element) {
    this.element = element;
    this.timesCollection = [].slice.call(this.element.querySelectorAll('[data-alert="times"]'));
    return this.listener();
  }

  removeAlert() {
    return this.element.remove();
  }

  listener() {
    return this.timesCollection
      .map(times => times.addEventListener('click', this.removeAlert.bind(this)));
  }
}
