const display = document.getElementById("display");


function addToDisplay(token){
   console.log('i am here');
   display.value += token;
}

function calculate(){
    try{
        
    display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error"
    }
}

function clearDisplay(){
    display.value = "";
}


