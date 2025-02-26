

const randomcolor= function(){
    const hex ="0123456789ABCDEF"
    let color="#"
    for (let i=0;i<6;i++){
      color +=hex[Math.floor(Math.random()* 16)];
    }
    return color;
  };
  let interavalid ;
  
  const startcolorchange =function(){
    if (!interavalid){
      interavalid =setInterval(changecolorbg,1000);
    }
  
  
    function changecolorbg(){
  document.body.style.backgroundColor=randomcolor();
    }
  };
  
  const stopcolorchange =function(){
  clearInterval(interavalid);
  interavalid= null;
  };
  
  document.querySelector('#start').addEventListener('click',startcolorchange);
  
  document.querySelector('#stop').addEventListener('click',stopcolorchange);