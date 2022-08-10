let string = "";
let buttons = document.querySelectorAll('.clicked');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'pie'){
      string = "3.141592653589793238"
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
function hidecalc(){
let calculator = document.querySelector('#btn-calc');
let butt = document.getElementById('btun');
if(calculator.style.display != 'none'){
calculator.style.display = 'none';
}
else{
  calculator.style.display = 'block';
}
}