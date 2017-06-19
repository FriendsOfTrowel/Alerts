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

    this.events = this.events();
    this.listener();
    this.element.dispatchEvent(this.events.mounted);
    return;
  }

  events() {
    const mounted = new Event('trowel.alert.mounted');
    const remove = new Event('trowel.alert.remove');
    const removed = new Event('trowel.alert.removed');

    return { mounted, remove, removed };
  }

  removeAlert() {
    this.element.dispatchEvent(this.events.remove);
    this.element.remove();
    this.element.dispatchEvent(this.events.removed);
    return;
  }

  listener() {
    return this.timesCollection
      .map(times => times.addEventListener('click', this.removeAlert.bind(this)));
  }
}
