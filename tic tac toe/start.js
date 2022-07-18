
var symbol;
f="";
inp=1;
xScore=0
oScore=0
localStorage.setItem("player1",xScore)
localStorage.setItem("player2",oScore)

   function selectXorO(){
let selectedImage =document.querySelectorAll('.s-image-edit');
    selectedImage.forEach(img =>{
        img=document.addEventListener('click',(e)=>{
          getImageId=e.target.id;
          // symbol=getImageId;
          console.log(getImageId);
          if(getImageId=='imageO'){
            f=0
          }
          else if(getImageId=='imageX'){
            f=1
          }
          localStorage.setItem("imageid",f)
          removeImgSelection(selectedImage);
     
          document.querySelector(`[id='${getImageId}']`).classList.add('selected');
          
        });
    });

  }

  function input1(){
inp=1
localStorage.setItem("playerTurn",inp)
  }
  function input2(){
inp=2
localStorage.setItem("playerTurn",inp)
  }
  
  function removeImgSelection(img){
    [].forEach.call(img,function(el){
        el.classList.remove("selected");
        
    })
  }



