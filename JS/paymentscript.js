


var inputName = localStorage['objectToPassName'];
localStorage.removeItem( 'objectToPassName' ); // Clear the localStorage
if (inputName!=undefined){
document.getElementById("name").value=inputName;
}

var inputEmail = localStorage['objectToPassEmail'];
localStorage.removeItem( 'objectToPassEmail' ); // Clear the localStorage
if (inputName!=undefined){
document.getElementById("email").value=inputEmail;
}

var inputPrice=localStorage['objectToPassPrice'];
localStorage.removeItem('objectToPassPrice'); // Clear the localStorage
if (inputPrice!=undefined){
    document.getElementById("amount").innerHTML=inputPrice;
}


function validateCreditCard(){
    if(document.getElementById('card').value.length!=16){ // check length of the  credit ard card number eqaul to 16
        alert("Invalid credit card")
        document.getElementById('card').style.border="1px solid red";
        checkoutDisable();
    }else{
        document.getElementById('card').style.border="1px solid #ccc";
        checkoutShow(); // checkout button enable
    }
    allValidation();
}

function validateCvv(){

    if(document.getElementById('cvv').value.length!=3 || isNaN(document.getElementById('cvv').value) ){ // check length of the  credit ard card cvv number eqaul to 3
        alert("Invalid CVV number")
        document.getElementById('cvv').style.border="1px solid red";
        checkoutDisable();
    }else{
        document.getElementById('cvv').style.border="1px solid #ccc";
        checkoutShow(); // checkout button enable
    }
    allValidation();
}

function creditCardYear(){ // check credit ard card expired or not 
    if(document.getElementById('year').value!="" && document.getElementById('month').value!=""){
        if(document.getElementById('year').value<2024){                   // check credit ard card expire year
            if (document.getElementById('year').value==2023){
            
            if(parseInt(document.getElementById('month').value)<8){// check credit ard card expire month
                alert("Your card has expired")
                document.getElementById('month').style.border="1px solid red";
                document.getElementById('year').style.border="1px solid red";   
                checkoutDisable();
            }else{
                document.getElementById('month').style.border="1px solid #ccc";  
                document.getElementById('year').style.border="1px solid #ccc";  
                checkoutShow(); // checkout button enable
            }
        }else{
            alert("Your card has expired")
            document.getElementById('month').style.border="1px solid red";
            document.getElementById('year').style.border="1px solid red";   
            checkoutDisable();
        }
        
        
        }else{
            document.getElementById('month').style.border="1px solid #ccc";  
            document.getElementById('year').style.border="1px solid #ccc";  
            checkoutShow(); // checkout button enable
        }
    }
    allValidation();
}


function allValidation(){
    if(document.getElementById('card').value.length!=16 && document.getElementById('card').value.length!=0){
        checkoutDisable();
    }else if(document.getElementById('cvv').value.length!=3 && document.getElementById('cvv').value.length!=""){
        checkoutDisable();
    }else if(document.getElementById('year').value<2024){
        if(document.getElementById('year').value==2023){
            if(parseInt(document.getElementById('month').value)<8){
                checkoutDisable();
            }
        }else{
            checkoutDisable();
        }
    }
}


function checkoutDisable(){ // checkout button disable
    document.getElementById("checkout").disabled = true;
    document.getElementById("checkout").style.opacity="0.1";
    document.getElementById("checkout").style.cursor="default";
}

function checkoutShow(){// checkout button enable
    document.getElementById("checkout").disabled = false;
    document.getElementById("checkout").style.opacity="0.9";
    document.getElementById("checkout").style.cursor="pointer";
}

