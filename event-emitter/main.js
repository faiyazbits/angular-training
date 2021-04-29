addBtn = document.getElementById('addMessage');
deleBtn = document.getElementById('DeleteMessage');
messagBox = document.getElementById('message-box');
counterDiv = document.getElementById('messageCount');
colorCode = document.getElementById('colorCode');
messageStore = new MessageStore();


function listDisplay() {
    messageStore.messageEventEmitter.on('ADD', function () {
        var value = document.getElementById("messageTextBox").value.toString();
        var paragraph = document.createElement('p');
        paragraph.innerText = value;
        messagBox.append(paragraph);

    });
    messageStore.messageEventEmitter.on("REMOVE", function () {
        var firstChildText = document.querySelector('p:first-child');
        messagBox.removeChild(firstChildText);
    });
}

function counter() {
    messageStore.messageEventEmitter.on("ADD", function () {
        counterDiv.textContent = messageStore.messageCount;
    });

    messageStore.messageEventEmitter.on("REMOVE", function () {
        counterDiv.textContent = messageStore.messageCount;
    })

}

function colorCoder() {
    var countForColor = 0;
    messageStore.messageEventEmitter.on("ADD", function () {
        countForColor++;
        updateIndicatorDisplay();
    });
    messageStore.messageEventEmitter.on("REMOVE", function () {
        countForColor--;
        updateIndicatorDisplay();
    });

    function updateIndicatorDisplay() {
        if (countForColor >= 3) {
            colorCode.style.backgroundColor = "red";
        } else {
            colorCode.style.backgroundColor = "yellow";
        }
    }
}

colorCoder()
listDisplay();
counter();

addBtn.addEventListener("click", function () {
    var value = document.getElementById("messageTextBox").value.toString();
    messageStore.addMessage(value);
    var value = document.getElementById("messageTextBox").value = '';

});

deleBtn.addEventListener("click", function () {
    messageStore.removeMessage();
})
