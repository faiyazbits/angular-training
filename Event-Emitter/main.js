let messageStore = null;
$(document).ready(()=> {
    messageStore = new MessageStore();

    function counter(){
       let counterDiv = $("#msgCount");
       let count = 0;

        messageStore.messageEventEmitter.on("ADD",(message)=>{
            count++;
            counterDiv.text(count);
        });

        messageStore.messageEventEmitter.on("REMOVE", (removedMessage)=>{
            count--;
            counterDiv.text(count);
        });
    }

    function colorCoder(){
        let countForColor = 0;

        messageStore.messageEventEmitter.on("ADD", (message)=>{
            countForColor++;
            updateColorIndicator();
        });

        messageStore.messageEventEmitter.on("REMOVE", (removedMessage)=>{
            countForColor--;
            updateColorIndicator();
        });

      function updateColorIndicator(){
        let colorCode =  $("#warningBox")
            if(countForColor >= 5){
                colorCode.css({"background-color": "red"});
            } else {
                colorCode.css({"background-color": "greenyellow"});
            }
        }
    }

    function listDisplay(){
        messageStore.messageEventEmitter.on("ADD", (message)=>{
            let value = $("#userInput").val().toString();
            let messageString = `<div> ${value} </div>`
            $("#messageArea").append(messageString);
        });

        messageStore.messageEventEmitter.on("REMOVE", (removedMessage)=>{
            $("#messageArea>div:last").remove();
        });
    }

    counter();
    colorCoder();
    listDisplay();

    $("#add").click(()=> {
        let value =  $("#userInput").val().toString();
        messageStore.addMessage(value);
    });

    $("#delete").click(()=> { 
            messageStore.removeMessage();
    });
});