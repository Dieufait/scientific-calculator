document.addEventListener("DOMContentLoaded", function(){
         // your Javascript code gestion here
         const display = document.getElementById('calc-display');
         const buttons = document.getElementsByClassName('btn');



         let currentValue="";

         function evaluateResult(){
           const convertedValue = currentValue
             .replace("×", "*")
             .replace("÷", "/")
             .replace("%", "*0.01")
             .replace("sin", "Math.sin")
             .replace("cos", "Math.cos")
             .replace("π", "Math.PI")
             .replace("ln", "Math.log");   
           const result = eval(convertedValue)
           currentValue = result.toString();
           display.value = currentValue;
         }


         for(let i = 0; i < buttons.length; i++) {
           const button = buttons[i];
           button.addEventListener('click', function(){
              const value = button.innerText;

             if(value=="AC"){
               currentValue = "";
               display.value = currentValue;
             }else if(value=="="){
                evaluateResult();
             }else{
              currentValue += value;
              display.value = currentValue;
             }
             
           })

         }

         
     });