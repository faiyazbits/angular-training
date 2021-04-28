var messageStore = null;
$(document).ready(function() {
    messageStore = new MessageStore();

    function counter(){
       var counterDiv = $("#messageCount");
       var count = 0;

        messageStore.messageEventEmitter.on("ADD", function(message){
            count++;
            counterDiv.text(count);
        });

        messageStore.messageEventEmitter.on("REMOVE", function(removedMessage){
            count--;
            counterDiv.text(count);
        });
    }

    function colorCoder(){
        var countForColor = 0;

        messageStore.messageEventEmitter.on("ADD", function(message){
            countForColor++;
            updateColorIndicator();
        });

        messageStore.messageEventEmitter.on("REMOVE", function(removedMessage){
            countForColor--;
            updateColorIndicator();
        });

      function updateColorIndicator(){
        var colorCode =  $("#colorCode")
            if(countForColor >= 5){
                colorCode.css({"background-color": "red"});
            } else {
                colorCode.css({"background-color": "#a94442"});
            }
        }
    }

    function listDisplay(){
        messageStore.messageEventEmitter.on("ADD", function(message){
            var value = $("#messageTextBox").val().toString();
            var messageString = "<p>" + value + "</p>";
            $("#messages").append(messageString);
        });

        messageStore.messageEventEmitter.on("REMOVE", function(removedMessage){
            $("#messages>p:last").remove();
        });
    }

    counter();
    colorCoder();
    listDisplay();

    $("#addMessage").click(function () {
        var value =  $("#messageTextBox").val().toString();
        messageStore.addMessage(value);
    });

    $("#deleteMessage").click(function () { 
            messageStore.removeMessage();
    });
});