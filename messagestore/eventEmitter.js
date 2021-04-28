class EventEmitter {
    eventObserversMap = {};

    on(eventName, observer) {
        var observerList = this.eventObserversMap[eventName];

        if (observerList) {
            observerList.push(observer);
        } else {
            var newObserverList = [];
            newObserverList.push(observer);
            this.eventObserversMap[eventName] = newObserverList;
        }
    }

    emit(eventName, data) {
        var observers = this.eventObserversMap[eventName] || [];
        observers.forEach(function (callback) {
            callback(data);
        });
    }
}