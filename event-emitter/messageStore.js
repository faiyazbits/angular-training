class MessageStore {
    messages = []
    messageEventEmitter = new EventEmitter()
    messageCount = 0;

    addMessage(newMessage) {
        this.messages.push(newMessage)
        this.messageCount++;
        this.messageEventEmitter.emit("ADD", newMessage)
    };
    removeMessage() {
        if (this.messages.length > 0) {
            let removedMessage = this.messages.shift()
            this.messageCount--;
            this.messageEventEmitter.emit("REMOVE", removedMessage)
        }
    }

}