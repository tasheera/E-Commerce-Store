

var nameTitle=new Array;
var priceList=new Array;
var imageSrc=new Array;
var itemCount=0;
function myfunc6(){       // get item details
    selectItems(5)
}
function myfunc5(){   
    selectItems(4)
}
function myfunc4(){   
    selectItems(3)

}
function myfunc3(){            
    selectItems(2)
}
function myfunc2(){            
    selectItems(1)
}
function myfunc1(){
    selectItems(0)
}

function selectItems(i){
    if (nameTitle.indexOf(document.getElementsByClassName("item-title")[i].innerHTML)===-1){ // find items is already in cart?
        nameTitle.push(document.getElementsByClassName("item-title")[i].innerHTML); // add name to name array
        priceList.push(document.getElementsByClassName("item-price")[i].innerHTML); // add price to price array
        imageSrc.push(document.getElementsByClassName("item-image")[i].src); // add image src to imageSrc array
        addItmes();          
    }else {
        alert("Already added to the cart")
                       
    }
}

function addItmes(){
    itemCount++; // count number of items
    add();
    for (var i=0; i<itemCount;i++){
    document.getElementsByClassName("name")[i].innerHTML=nameTitle[i];  // get data from array and add to eleemnts
    document.getElementsByClassName("price")[i].innerHTML=priceList[i]; // get data from array and add to eleemnts    
    }

    quantityButton(itemCount-1); // create quatity show buton
    deleteButton(itemCount-1);//create delete button
    imageAdd(itemCount-1);
    totalPrice();
    itemCountt();  
}


function quantityButton(i){ // create quatity show buton

    var input=document.createElement('input');
    input.className="cart-quantity-input";
    input.setAttribute('type', 'number');
    input.setAttribute('value', '1');
    input.setAttribute('min', '1');
    input.addEventListener("click",totalPrice);
    document.getElementsByClassName("Quantity")[i].appendChild(input);
}



function deleteButton(i){  //create delete button
    var x = document.createElement("IMG");
    x.setAttribute("src", "./images/delete.png");
    x.setAttribute("alt", "delete");
    x.setAttribute("id", "delete");
    x.addEventListener("click", function() {removeRow(this)        
    });
    document.getElementsByClassName("Quantity")[i].appendChild(x);
}


function removeRow(o) {
    
    var p=o.parentNode.parentNode;
    var name=p.getElementsByClassName("price")[0].innerHTML;
    let index = priceList.indexOf(name);
    priceList.splice(index, 1);
    imageSrc.splice(index, 1);
    nameTitle.splice(index, 1);
    p.parentNode.removeChild(p);
    itemCount--;
    totalPrice();  // claculate price
    itemCountt();  // cacluate number of items
}

function imageAdd(i){ // create image
    var x = document.createElement("IMG");
    x.setAttribute("width", "50");
    x.setAttribute("height", "50");
    x.src=imageSrc[i];
    document.getElementsByClassName("cart-image")[i].appendChild(x);
}


function add(){ // create table row and table data
    var table = document.getElementById("myTable");
    var row = table.insertRow(itemCount);
    var cell1 = row.insertCell(0);
    cell1.className="cart-image";
    var cell2 = row.insertCell(1);
    cell2.className="name";
    var cell3 = row.insertCell(2);  
    cell3.className="price";          
    var cell4 = row.insertCell(3);
    cell4.className="Quantity";    
}


function totalPrice(){ // calculate total price
    for (var i=0; i<itemCount;i++){ // validate quantity of items
        if(document.getElementsByClassName("cart-quantity-input")[i].value<=0){
            document.getElementsByClassName("cart-quantity-input")[i].value=1;
        }
    }
    var totalPrice=0.00;
    for (var i=0; i<itemCount;i++){  // slic to get only number of the item without currency mark
        totalPrice+=(parseInt(priceList[i].slice(1,7)*10000)*parseInt( document.getElementsByClassName("cart-quantity-input")[i].value*10000))/100000000;
    }
    document.getElementById("totalPrice").innerHTML=totalPrice.toFixed(2); // assign total price with 2 decimal points to price show
}


function itemCountt(){ // indicate item count in cart icon
    if (itemCount==0){
        document.getElementById("count").innerHTML="";
    }else{
        document.getElementById("count").innerHTML=itemCount;
    }
}


function itemCheck(){ // validate cart has items and name, email fill?
    
    if (itemCount<1){
        alert("Add at least one item to cart place order")
    
    }
    else if(frm.name.value=="" || frm.email.value==""){
            alert(" Fill name and email address to place the order")
        }else{
            if (frm.email.value.includes("@") && frm.email.value.includes(".")){ // check valid email
                valueGet();// get value from name filed and price
                window.location.href = "payment.html";
            }else{
                alert("Check email address")
            }            
        }    
}


function openNav() { // side menu open
    document.getElementById("mySidenav").style.display = "block"; // show in display
    document.getElementById("navbar-cart").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none"; // hide in dispaly
    document.getElementById("navbar-cart").style.display = "block";
  }

  function valueGet(){
    var inputName = document.getElementById('name').value;
    localStorage.setItem( 'objectToPassName', inputName );
    var inputEmail = document.getElementById('email').value;
    localStorage.setItem( 'objectToPassEmail', inputEmail );
    var inputPrice=document.getElementById("totalPrice").innerHTML;
    localStorage.setItem( 'objectToPassPrice', inputPrice );
  }