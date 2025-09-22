const display=document.getElementById("display");
function appendToDisplay(a){
    display.value+=a;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
   catch(error){
    display.value="Error"
   } 
}
function clearDisplay(){
    display.value="";
}