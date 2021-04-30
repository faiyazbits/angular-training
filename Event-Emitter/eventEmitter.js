class EventEmitter {
  eventObserversMap = {};

  on(eventName, observer) {
      let observerList = this.eventObserversMap[eventName];

      if (observerList) {
          observerList.push(observer);
      } else {
          let newObserverList = [];
          newObserverList.push(observer);
          this.eventObserversMap[eventName] = newObserverList;
      }
  }

  emit(eventName, data) {
      let observers = this.eventObserversMap[eventName] || [];
      observers.forEach((cb)=> {
          cb(data);
      });
  }
}