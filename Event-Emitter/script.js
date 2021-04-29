const INPUT_BOX = [];
let count = 0;

// GET USER INPUT MESSAGE
function getinputMessage(e) {
  e.preventDefault();
  const inputVal = document.querySelector("#input").value;
  if (inputVal) {
    INPUT_BOX.push(inputVal);
    appendUi(INPUT_BOX);
    msgCount(INPUT_BOX);
    clearInputFiled(inputVal);
  }
}

// APPENDING IN THE UI
function appendUi(data) {
  const msgCont = document.getElementById("messageArea");
  msgCont.innerHTML = "";

  data.forEach((data) => {
    const msgBox = document.createElement("tr");
    msgBox.innerHTML = `<td class="msgContent">${data}</td>`;
    msgCont.appendChild(msgBox);
  });
}

// COUNT THE MESSAGE
function msgCount(data) {
 
  count++;

  let countArea = document.querySelector(".msg_count");
  countArea.innerHTML = "";
  if (data) {
    countArea.append(count);
    UpdateCountExceed();
  }
}

//  UPDATE WHEN MESSAGE EXCEEDS
function UpdateCountExceed() {
  
  let styleBox = document.querySelector(".warningBox");

  if (count >= 5) {
    styleBox.style.backgroundColor = "red";
  }
}

//  CLEARING TEH FIELDS
function clearInputFiled(data) {
  data.value = "";
}

// DELETEING THE MESSAGE
function deleteMessage(data) {
  console.log("Im called");
  INPUT_BOX.forEach((val , idx)=> {
      if(val === data) {
          INPUT_BOX.splice(idx , 1)
      }
  })
  appendUi(data);
  msgCont(data);
  
}

// EVENT LISTENERS
const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", getinputMessage);

const delBtn = document.querySelector("#delete");
delBtn.addEventListener("click", deleteMessage);
