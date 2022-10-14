const newItemCategory=document.querySelector("[name=newItemCategory]");
const newItemType=document.querySelector("[name=newItemType]");
const newItemManuf=document.querySelector("[name=newItemManuf]");
const newItemModel=document.querySelector("[name=newItemModel]");
const newItemQty=document.querySelector("[name=newItemQty]");
const btn_addItemToOrder=document.querySelector("[name='addItemToOrder']");
const orderTable=document.getElementById('id_orderTable');
const btn_update=document.querySelector("[name='updateOrder']");

function prepareValues()
{
    let values={};
    values.category=newItemCategory.value;
    values.type=newItemType.value;
    values.manuf=newItemManuf.value;
    values.model=newItemModel.value;
    values.quantity=newItemQty.value;
    return values;
}
function addItemToOrder()
{
    let values=prepareValues();
    let newRow=orderTable.insertRow();
    appendOrderItemValues(newRow,values);
    newItemCategory.value="";
   newItemType.value="";
   newItemManuf.value="";
   newItemModel.value="";
   newItemQty.value="";
}
function deleteItem(button)
{
// console.dir(button);
// console.dir(button.parentNode.parentNode);
    const RowParent=button.parentNode.parentNode.parentNode;
    RowParent.removeChild(button.parentNode.parentNode);
}
function editItem(button)
{
    var change = button.parentNode.parentNode;
    let category = change.cells[0].innerText;
    let type = change.cells[1].innerText;
    let manuf = change.cells[2].innerText;
    let model = change.cells[3].innerText;
    let quantity = change.cells[4].innerText;

    document.getElementsByName('newItemCategory')[0].value=category;
    document.getElementsByName('newItemType')[0].value=type;
    document.getElementsByName('newItemManuf')[0].value=manuf;
    document.getElementsByName('newItemModel')[0].value=model;
    document.getElementsByName('newItemQty')[0].value=quantity;
    var inp=document.getElementsByName('updateOrder')[0];
    inp.value=change.rowIndex;

}
function updateItem (btn_edit)
{
 let newChange = orderTable.rows[btn_edit.value];

 newChange.cells[0].innerText=newItemCategory.value;
 newChange.cells[1].innerText= newItemType.value;
 newChange.cells[2].innerText= newItemManuf.value;
 newChange.cells[3].innerText= newItemModel.value;
 newChange.cells[4].innerText= newItemQty.value;

    newItemCategory.value="";
    newItemType.value="";
    newItemManuf.value="";
    newItemModel.value="";
    newItemQty.value="";

}
function appendOrderItemValues(row,values)
{
    let categoryCell=row.insertCell(0);
    categoryCell.innerHTML=values.category;

    let typeCell=row.insertCell(1);
    typeCell.innerHTML=values.type;

    let manufCell =  row.insertCell(2);
    manufCell.innerHTML = values.manuf;

    let modelCell =  row.insertCell(3);
    modelCell.innerHTML = values.model;

    let qtyCell =  row.insertCell(4);
    qtyCell.innerHTML = values.quantity;

    let actionCell=row.insertCell(5);
    actionCell.innerHTML="<input type='button' name=btn_del onclick='deleteItem(this)' value='Delete'>";

    let editCell = row.insertCell(6)
    editCell.innerHTML="<input type='button' name=btn_edit onclick='editItem(this)' value='Edit'>";
}

btn_addItemToOrder.addEventListener("click", addItemToOrder);
btn_update.addEventListener("click", updateItem);