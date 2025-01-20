const form=document.querySelector('form')

form.addEventListener('submit',function (e) {
e.preventDefault();
const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');
const comment=document.querySelector('#comment');

    if (height === '' || height < 0 || isNaN (height) ) {
        results.innerHTML= `please give a valid height ${height}`;

    }else if (weight===''||weight < 0||isNaN(weight)) {
     results.innerHTML=`please give valid weight${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         results.innerHTML=`<span> ${bmi}</span>`


         if (bmi<=18.6) {
            comment.innerHTML='you are under weight'
           
           
        } else if (bmi<= 24.9){
            comment.innerHTML='you are in Normal Range'
            
        }
        else{
            comment.innerHTML='you are overweight you should be under 24.9'
            
            
        }
    }
   

} )