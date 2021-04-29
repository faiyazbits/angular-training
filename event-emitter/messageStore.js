class MessageStore {
    messages = [];
    messageEventEmitter = new EventEmitter();
    messageCount = 0;

    addMessage(newMessage) {
        this.messages.push(newMessage);
        this.messageCount++;
        this.messageEventEmitter.emit("ADD", newMessage);

    };

    removeMessage() {
        if (this.messages.length > 0) {
            var removedMessage = this.messages.shift();
            console.log("deleted", removedMessage);
            this.messageCount--;
            this.messageEventEmitter.emit("REMOVE", removedMessage);
        }
    }
}
