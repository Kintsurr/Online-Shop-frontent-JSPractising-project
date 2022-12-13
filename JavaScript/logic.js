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
    tableHead.setAttribute("id", `name${c+1}`)
    const td1 = document.createElement("td");
    td1.setAttribute("id", `num${c+1}`)
    const td2 = document.createElement("td");
    td2.setAttribute("id", `color${c+1}`)
    const td3 = document.createElement("td");
    td3.setAttribute("id", `price${c+1}`)
    const td4 = document.createElement("td");
    td4.setAttribute("id", `date${c+1}`)
    const td5 = document.createElement("td");
    td5.setAttribute("id", `btCont${c+1}`)
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    const randomString = Math.floor(Math.random()*colorArray.length);
    const randomNumber = Math.floor(Math.random()* (60 - 40 + 1)) + 40;
    const randomID = Math.floor(Math.random()*idArray.length);
    const randomNum = Math.floor(Math.random() * (1500 * precision - 330 * precision) + 330 * precision) / (1*precision);
    
    tableRow.setAttribute("id", `tr${c+1}`)
    totalProducts.push(c);
    editButton.setAttribute("type", "button");
    editButton.setAttribute('id', `btn${c+1}`)
    editButton.classList.add("btn","btn-secondary");
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target","#exampleModal") 
    editButton.setAttribute('onclick', 'editProduct(this.id)')
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn","btn-danger");
    deleteButton.style.marginLeft="5%";
    deleteButton.setAttribute('id', `dbt${c+1}`)
    deleteButton.setAttribute("data-bs-toggle","modal");
    deleteButton.setAttribute('data-bs-target', "#deleteModal");
    deleteButton.setAttribute('onclick', `deleteProduct(this.id)`);
    

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

function addProduct(){
    var inputName = document.getElementById("inputName").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var inputColor = document.getElementById("inputColor").value;
    var inputPrice = document.getElementById("inputPrice").value;
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

      tableRow.setAttribute('id', `tr${totalProducts.length+1}`)
      tableHead.setAttribute("id", `name${totalProducts.length+1}`)
      td1.setAttribute("id", `num${totalProducts.length+1}`)
      td2.setAttribute("id", `color${totalProducts.length+1}`)
      td3.setAttribute("id", `price${totalProducts.length+1}`)
      td4.setAttribute("id", `date${totalProducts.length+1}`)
      td5.setAttribute("id", `btCont${totalProducts.length+1}`)
      editButton.setAttribute("id",`btn${totalProducts.length+1}`) 
      totalProducts.push(totalProducts.length);
      editButton.setAttribute("type", "button");
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target","#exampleModal") 
      editButton.setAttribute('onclick', 'editProduct(this.id)')
      editButton.classList.add("btn","btn-secondary");
      deleteButton.setAttribute("type", "button");
      deleteButton.classList.add("btn","btn-danger");
      deleteButton.style.marginLeft="5%";
      deleteButton.setAttribute('id', `dbt${totalProducts.length+1}`)
      deleteButton.setAttribute("data-bs-toggle","modal");
      deleteButton.setAttribute('data-bs-target', "#deleteModal");
      deleteButton.setAttribute('onclick', `deleteProduct(this.id)`);
      

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
      document.getElementById("inputPrice").value='';
      document.getElementById("inputDate").value='';
  
}

function editProduct(btnId){
  const btnContainer = document.getElementById(`${btnId}`).parentElement.parentElement.id;
  const rowContainer = document.getElementById(`${btnContainer}`);
  const rowNumber=btnId.slice(3);
  const tableHead = document.getElementById(`name${rowNumber}`);
      const td1 = document.getElementById(`num${rowNumber}`);
      const td2 = document.getElementById(`color${rowNumber}`);
      const td3 = document.getElementById(`price${rowNumber}`);
      const td4 = document.getElementById(`date${rowNumber}`);
  
      document.getElementById("editInputName").value=`${tableHead.innerText}`;
      document.getElementById("editInputNumber").value=`${td1.innerText}`;
      document.getElementById("editInputColor").value=`${td2.innerText}`;
      document.getElementById("editInputPrice").value=`${td3.innerText}`;
      document.getElementById("editInputDate").value=`${td4.innerText}`;

      document.getElementById("editEddProduct").setAttribute('onclick', `saveEdit(${rowNumber})`); 
}

function saveEdit(rowNumber){
  var inputName = document.getElementById("editInputName").value;
  var inputNumber = document.getElementById("editInputNumber").value;
  var inputColor = document.getElementById("editInputColor").value;
  var inputPrice = document.getElementById("editInputPrice").value;
  var inputDate = document.getElementById("editInputDate").value;

  if(inputName!='' && inputNumber!=''){
  
    const tableHead = document.getElementById(`name${rowNumber}`);
    const td1 = document.getElementById(`num${rowNumber}`);
    const td2 = document.getElementById(`color${rowNumber}`);
    const td3 = document.getElementById(`price${rowNumber}`);
    const td4 = document.getElementById(`date${rowNumber}`);

    tableHead.textContent = `${inputName}`;
    td1.textContent = `${inputNumber}`;
    td2.textContent = `${inputColor}`;
    td3.textContent = `${inputPrice}`;
    td4.textContent = `${inputDate}`; 
  }
}

function deleteProduct(btnId){
  const btnContainer = document.getElementById(`${btnId}`).parentElement.parentElement.id;
  const rowContainer = document.getElementById(`${btnContainer}`);
  const rowNumber=btnId.slice(3);
  var tableHead; 
  var td1;
  var td2;
  var td3;
  var td4;
    if(rowNumber <= productsNumber){
      tableHead = document.getElementById(`name${rowNumber}`);
      td1= document.getElementById(`num${rowNumber}`);
      td2 = document.getElementById(`color${rowNumber}`);
      td3 = document.getElementById(`price${rowNumber}`);
      td4 = document.getElementById(`date${rowNumber}`);
    }else{
      tableHead = document.getElementById(`name${rowNumber-1}`);
      td1 = document.getElementById(`num${rowNumber-1}`);
      td2 = document.getElementById(`color${rowNumber-1}`);
      td3 = document.getElementById(`price${rowNumber-1}`);
      td4 = document.getElementById(`date${rowNumber-1}`);
    }

    document.getElementById(`dltName`).textContent = tableHead.innerText;
    document.getElementById(`dltNumber`).textContent = td1.innerText;
    document.getElementById(`dltColor`).textContent = td2.innerText;
    document.getElementById(`dltPrice`).textContent = td3.innerText;
    document.getElementById(`dltDate`).textContent = td4.innerText;
    document.getElementById("confirmDeleteBtn").setAttribute('onclick', `confirmDelete(${rowNumber})`); 
}

function confirmDelete(rowNumber){
  if(rowNumber <= productsNumber){
  document.getElementById(`tr${rowNumber}`).remove();
  }else{
  document.getElementById(`tr${rowNumber-1}`).remove();
  }

}
