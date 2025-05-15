const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;

}
function clearBtn(){
    display.value="";
    
}
function calculate() {
    try{
    display.value = eval(display.value);//inbuilt calculator eval
    }
    catch{
        display.value="nigga"
    }
    
}