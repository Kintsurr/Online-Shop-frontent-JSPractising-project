//creating default products
const tBody=document.getElementById("rows-container");
const productsNumber = 10;
var totalProducts=[];
const colorArray = ['Red','Black'];
const idArray = [92, 38];
const precision = 100; // 2 decimals
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}
  

function defaultProducts(c){
    const tableRow = document.createElement("tr");
    const tableHead = document.createElement("th");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    const randomString = Math.floor(Math.random()*colorArray.length);
    const randomNumber = Math.floor(Math.random()* (60 - 40 + 1)) + 40;
    const randomID = Math.floor(Math.random()*idArray.length);
    const randomNum = Math.floor(Math.random() * (1500 * precision - 330 * precision) + 330 * precision) / (1*precision);
    
    tableHead.setAttribute("scope",`${c+1}`);
    totalProducts.push(c);
    editButton.setAttribute("type", "button");
    deleteButton.setAttribute("type", "button");
    editButton.classList.add("btn","btn-secondary");
    deleteButton.classList.add("btn","btn-danger");
    deleteButton.style.marginLeft="5%";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target","#CreateModal") 
    tableHead.textContent += `HL Road Frame - ${colorArray[randomString]}, ${randomNumber}`;
    td1.textContent += `FR-R${idArray[randomID]}${colorArray[randomString].substring(0, 1)}-${randomNumber}`;
    td2.textContent += `${colorArray[randomString]}`;
    td3.textContent += `${randomNum}`;
    td4.textContent += `${randomDate(new Date(1, 0, 2012), new Date())}`; 
    editButton.textContent += "Edit";
    deleteButton.textContent += "Delete";

    td5.append(editButton,deleteButton);
    tableRow.append(tableHead,td1,td2,td3,td4,td5);
    document.getElementById('rows-container').appendChild(tableRow)
}

for(let i=0; i<productsNumber;i++){
    defaultProducts(i);
}
//----------------------------------------------------------------------------------
function closeProduct(){

  document.getElementById("inputName").value='';
    document.getElementById("inputNumber").value='';
    document.getElementById("inputColor").value='';
    document.getElementById("inputCost").value='';
    document.getElementById("inputPrice").value='';
    document.getElementById("inputSize").value='';
    document.getElementById("inputWeight").value='';
    document.getElementById("inputDate").value='';
}

function setEditProduct(clickedId){
  if(clickedId == "addProduct" ){
    var inputName = document.getElementById("inputName").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var inputColor = document.getElementById("inputColor").value;
    var inputCost = document.getElementById("inputCost").value;
    var inputPrice = document.getElementById("inputPrice").value;
    var inputSize = document.getElementById("inputSize").value;
    var inputWeight = document.getElementById("inputWeight").value;
    var inputDate = document.getElementById("inputDate").value;
    if(inputName!='' && inputNumber!=''){
     
      const tableRow = document.createElement("tr");
      const tableHead = document.createElement("th");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
  
      tableHead.setAttribute("scope",`${totalProducts.length+1}`);
      totalProducts.push(totalProducts.length);
      editButton.setAttribute("type", "button");
      deleteButton.setAttribute("type", "button");
      editButton.classList.add("btn","btn-secondary");
      deleteButton.classList.add("btn","btn-danger");
      deleteButton.style.marginLeft="5%";
  
      tableHead.textContent += `${inputName}`;
      td1.textContent += `${inputNumber}`;
      td2.textContent += `${inputColor}`;
      td3.textContent += `${inputPrice}`;
      td4.textContent += `${inputDate}`; 
      editButton.textContent += "Edit";
      deleteButton.textContent += "Delete";
  
      td5.append(editButton,deleteButton);
      tableRow.append(tableHead,td1,td2,td3,td4,td5);
      document.getElementById('rows-container').appendChild(tableRow)
    }
      document.getElementById("inputName").value='';
      document.getElementById("inputNumber").value='';
      document.getElementById("inputColor").value='';
      document.getElementById("inputCost").value='';
      document.getElementById("inputPrice").value='';
      document.getElementById("inputSize").value='';
      document.getElementById("inputWeight").value='';
      document.getElementById("inputDate").value='';
  }else{
//sue scope
  }
}