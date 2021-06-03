      var screen = document.getElementById('screen');
      var digits = document.querySelectorAll("#digit");
      var operators =  document.querySelectorAll(".operator");
      var equal=  document.getElementById('equal');
      var clear = document.getElementById('c');
      var backspace = document.getElementById('ce');
    
      var screenValue = '';
      
      for (item of digits){
        item.addEventListener('click', (e)=>{
          buttonText = e.target.innerText;

          if(buttonText == '0'){
            screen.value += '0';
  
          }
          else{
          screen.value += buttonText;
          screenValue = screen.value;
        }
       

        })}




        for (item of operators){
          item.addEventListener('click', (e)=>{
          buttonText = e.target.innerText;
          
          if(screen.value == ''){
            operators= '';

          }
          else{
            operators = buttonText;
            screen.value += buttonText;
          }
          })}

          function equals(){
              (buttonText == '=' && screen.value=='')? screen.value= '': screen.value = screen.value && eval(screen.value);
              
            };

          function clearAll(){
            (buttonText=='C')? screen.value= '' : '0';
            screen.value = '';
            }
              
          function clearLastOne() {
            var value = screen.value;
            screen.value = value.substr(0, value.length - 1);
        }