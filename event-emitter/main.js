let messageStore = null;
$(document).ready(function () {
    messageStore = new MessageStore();

    function Counter() {
        let counterDiv = $("#messageCount")
        let count = 0;
        messageStore.messageEventEmitter.on("ADD", function (message) {
            count++;
            counterDiv.text("")
            counterDiv.text(count)
        })
        messageStore.messageEventEmitter.on("REMOVE", function (removedMessage) {
            count--;
            counterDiv.text("")
            counterDiv.text(count)
        })

    }

    function colorCoder() {
        var countForColor = 0
        messageStore.messageEventEmitter.on("ADD", function (message) {
            countForColor++;
            updateIndicatorDisplay(countForColor)
        })
        messageStore.messageEventEmitter.on("REMOVE", function (removedMessage) {
            countForColor--
            updateIndicatorDisplay(countForColor)
        })


    }

    function updateIndicatorDisplay(count) {

        if (count >= 5) {
            $("#colorCode").css({ "background-color": "red" })

        } else {
            $("#colorCode").css({ "background-color": "green" })
        }

    }

    function listDisplay() {
        messageStore.messageEventEmitter.on("ADD", function (message) {
            let value = document.getElementById("messageTextBox").value;
            let messageString = `<p>${value}</p>`;
            $("#messages").append(messageString)

        })
        messageStore.messageEventEmitter.on("REMOVE", function (message) {
            $("#messages>p:last").remove()
        })
    }

    $("#addMessage").click(function () {
        console.log("hello")
        let value = document.getElementById("messageTextBox").value;
        messageStore.addMessage(value);
    })
    $("#deleteMessage").click(function () {
        messageStore.removeMessage();
        console.log("hello")
    })
    colorCoder();
    listDisplay();
    Counter();
})