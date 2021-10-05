let currentValue = document.getElementById("display").innerHTML;
function display(value){
    currentValue = document.getElementById("display").innerHTML;
    if (currentValue==0){
       currentValue = "";
    }
    else{
        currentValue = document.getElementById("display").innerHTML;
    }
    
    document.getElementById("display").innerHTML = currentValue + value;
   
}

function calculate(){
    currentValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
    
}

function clearv(){
    
    document.getElementById("display").innerHTML = 0;
    
}