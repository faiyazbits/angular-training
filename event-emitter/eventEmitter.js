class EventEmitter {
    eventObserverMap = {};

    on(eventName, observerFun) {
        var observerList = this.eventObserverMap[eventName];
        if (observerList) {
            observerList.push(observerFun);
        } else {
            var newObserverList = [];
            newObserverList.push(observerFun);
            this.eventObserverMap[eventName] = newObserverList;
        }

    }

    emit(eventName, data) {
        var observer = this.eventObserverMap[eventName] || []
        observer.forEach((cb) => {
            cb(data);
        });
    }

}
