//creating default products
const tBody=document.getElementById("rows-container");
const productsNumber = 10;
var colorArray = ['Red','Black'];
var idArray = [92, 38];
var precision = 100; // 2 decimals
var randomNum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}



for(let i=0; i<productsNumber;i++){
    var tableRow = document.createElement("tr");
    var tableHead = document.createElement("th");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    var randomString = Math.floor(Math.random()*colorArray.length);
    var randomNumber = Math.floor(Math.random()* (60 - 40 + 1)) + 40;
    var randomID = Math.floor(Math.random()*idArray.length);
    var randomNum = Math.floor(Math.random() * (1500 * precision - 330 * precision) + 330 * precision) / (1*precision);
    
    tableHead.setAttribute("scope",`${i+1}`);
    editButton.setAttribute("type", "button");
    //editButton.setAttribute("data-bs-toggle", "modal");
    //editButton.setAttribute("data-bs-target","#exampleModal")
    deleteButton.setAttribute("type", "button");
    //deleteButton.setAttribute("data-bs-toggle", "modal");
    //deleteButton.setAttribute("data-bs-target","#exampleModal")
    editButton.classList.add("btn","btn-secondary");
    deleteButton.classList.add("btn","btn-danger");
    deleteButton.style.marginLeft="5%";

    tableHead.textContent += `HL Road Frame - ${colorArray[randomString]}, ${randomNumber}`;
    td1.textContent += `FR-R${idArray[randomID]}${colorArray[randomString].substring(0, 1)}-${randomNumber}`;
    td2.textContent += `${colorArray[randomString]}`;
    td3.textContent += `${randomNum}`;
    td4.textContent += `${randomDate(new Date(2012, 0, 1), new Date())}`; 
    editButton.textContent += "Edit";
    deleteButton.textContent += "Delete";

    td5.append(editButton,deleteButton);
    tableRow.append(tableHead,td1,td2,td3,td4,td5);
    document.getElementById('rows-container').appendChild(tableRow)
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})