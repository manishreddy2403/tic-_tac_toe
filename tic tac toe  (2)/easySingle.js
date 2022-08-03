
playerTurn=localStorage.getItem("playerTurn")
flag="";

var index =['0','1','2','3','4','5','6','7','8'];
var randomNum=[];
  i=index.length;
  j=0;

  while(i--){
   j= Math.floor(Math.random() * (i+1));
   randomNum.push(index[j]);
   index.splice(j,1);
  }

randomNum=[3,4,5,6,7,8,1,2,0]
console.log(randomNum);
console.log(randomNum.length);
var xWin =[];
var oWin =[];
var ar=0
var winner =[

   ['0','1','2'],  
   ['3','4','5'], 
   ['6','7','8'], 

   ['0','3','6'], 
   ['1','4','7'], 
   ['2','5','8'], 

   ['0','4','8'], 
   ['2','4','6']
]

strikeClass=["strike-row-1","strike-row-2","strike-row-3","strike-col-1","strike-col-2","strike-col-3","strike-dal-1","strike-dal-2"]



var a=document.getElementsByClassName='TTTgame';
playman=localStorage.getItem("imageid")
flag = localStorage.getItem("imageid");
console.log(playerTurn);
console.log(flag)


if(flag==1){
    document.getElementById("TTT").classList.add('x');
}else{

    document.getElementById("TTT").classList.add('o');
}

// if(playerTurn===2){
//     if(flag==1){
//         flag=0
//     }
//     else{
//         flag=1
//     }
//     randomMethod();
// }
// if(playerTurn==1){

// }
a=document.addEventListener('click', (e) =>{
const b=e.target.id ;
if (flag == 1  && document.getElementById(b).innerHTML == "" ){ 
      document.getElementById("TTT").classList.add('x');

   xTurn(b);
   
   
}
else if(flag == 0  && document.getElementById(b).innerHTML == ""){
    document.getElementById("TTT").classList.add('o');
  oTurn(b);

 
}
randomMethod();
})


function check() {

for(var i=0; i<winner.length; i++){
  
    if(xWin[winner[i][0]] > -1 && xWin[winner[i][1]] > -1 &&  xWin[winner[i][2]] > -1) {
    
        id=strikeClass[i]
        document.getElementById("strike").classList.add(id);
      
        if(playman==1){
            document.getElementById("titleWinner").innerHTML="<img src='xpngegg.png' width='50px' height='50px'></img>"+"<span style=\"color:black\">"+"<br> you won the game " ;
            document.getElementById("win-img-edit1").innerHTML=`<img src="image2.gif" class="win-img-edit" alt="hgfhg">`;
        }else{
            document.getElementById("titleWinner").innerHTML="<img src='gameOver.jpeg' width='200px' height='200px' margin-bottom='10px'></img>"+"<span style=\"color:black\">"+"<br> you loss the game "  ;

        }
       
       
        let wait = setTimeout(waitFunction, 1000);
        let waitXwin = setTimeout(xWinFunction, 1000);
        

       
        return;
       
  

    }else if(oWin[winner[i][0]] > -1 && oWin[winner[i][1]] > -1 && oWin[winner[i][2]] > -1) {
        
        id=strikeClass[i]
        document.getElementById("strike").classList.add(id); 
       
        if(playman==0){
            document.getElementById("titleWinner").innerHTML="<img src='opngegg.png' width='50px' height='50px'></img>"+"<span style=\"color:black\">"+"<br> you won the game " ;
            document.getElementById("win-img-edit1").innerHTML=`<img src="image2.gif" class="win-img-edit" alt="hgfhg">`;
        }else{
            document.getElementById("titleWinner").innerHTML="<img src='gameOver.jpeg' width='200px' height='200px' margin-bottom='10px'></img>"+"<span style=\"color:black\">"+"<br> you loss the game "  ;

        }
     
       
        let wait = setTimeout(waitFunction, 1000);
        let waitOwin = setTimeout(oWinFunction, 1000);
   
        
        

        return;
        
        
       
    }if(ar==9 ){
       
        document.getElementById("titleWinner").innerHTML= "It's Draw Match";
        document.getElementById("win-img-edit1").innerHTML=`<img src="unnamed.gif" class="win-img-edit" alt="hgfhg">`
        let wait = setTimeout(waitFunction, 1000);
     
    
    
}

}
}

function waitFunction(){
    document.getElementById("myModal").showModal();

}
function xWinFunction(){
    document.getElementById("Xscore").innerHTML=  parseInt(document.getElementById("Xscore").innerHTML ) + 1; 
    localStorage.setItem("player1",parseInt(document.getElementById("Xscore").innerHTML))

}
function oWinFunction(){
    document.getElementById("Oscore").innerHTML=  parseInt(document.getElementById("Oscore").innerHTML ) + 1; 
    localStorage.setItem("player2",parseInt(document.getElementById("Oscore").innerHTML))

}


///Player turn


function msg(x){

    if(x==0){
        const Xnamee =localStorage.getItem('playerX');
        document.getElementById("players").innerHTML= Xnamee +" "+ "<span style=\"color:black\">"+ "Its Your Turn";
        //console.log(Xnamee);


    } if(x==1){
        const Onamee =localStorage.getItem('playerO');
        document.getElementById("players").innerHTML= Onamee +" "+ "<span style=\"color:black\">"+"Its Your Turn" ;
        //console.log(Onamee);
    }
   

}
     

function xTurn(b){
    document.getElementById(b).innerHTML = "<img src='xpngegg.png' width='80px' height='80px'></img>";
    document.getElementById(b).style.pointerEvents = 'none';
  
    flag = 0;
    // msg(1);
    xWin[b]=1;
    ar+=1
    //console.log(ar.length);
    check();
   
    

}

function oTurn(b){
  

    document.getElementById(b).innerHTML = "<img src='opngegg.png' width='80px' height='80px'></img>";
    document.getElementById(b).style.pointerEvents = 'none';
    

    flag = 1;
    // msg(0);
    oWin[b]=1;
    ar+=1
    
    check();

}
function randomMethod(){
    randomindex=0;
    while(randomindex < 9){
        val=document.getElementById(randomNum[randomindex]).innerHTML
        console.log(val)
        console.log(randomindex)
        if(val==''){
            break;
        }
        else{
            randomindex += 1
        }
    }
    
    if(flag==1){
        xTurn(randomNum[randomindex]);

    }else if(flag==0){
        oTurn(randomNum[randomindex]);
    }

}

  