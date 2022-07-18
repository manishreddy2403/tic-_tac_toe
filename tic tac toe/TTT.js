
const XWinScore =localStorage.getItem('player1');
document.getElementById("Xscore").innerHTML= XWinScore; 
const OWinScore =localStorage.getItem('player2');
document.getElementById("Oscore").innerHTML= OWinScore; 
document.getElementById("TTT").classList.add('x');


const Xnamee =localStorage.getItem('playerX');
document.getElementById("players").innerHTML= Xnamee +" "+ "<span style=\"color:black\">"+"Its Your Turn";



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

flag = 1;

var a=document.getElementsByClassName='TTTgame';
a=document.addEventListener('click', (e) =>{
const b=e.target.id ;
if (flag == 1  && document.getElementById(b).innerHTML == "" ){ 
    document.getElementById("TTT").classList.remove('x');
    // document.getElementById(b).classList.add('x');
    document.getElementById(b).style.pointerEvents = 'none';
    console.log(document.getElementById(b).innerHTML)

    document.getElementById(b).innerHTML = "<img src='xpngegg.png' width='80px' height='80px'>";
    
   
        
        document.getElementById("TTT").classList.add('o');
        
    // document.getElementById("TTT").classList.add('x');
    
    //  document.getElementById('players').innerHTML="player o";
    flag = 0;
    msg(1);
    xWin[b]=1;
    ar+=1
    //console.log(ar.length);
    check();
    
}
else if(flag == 0  && document.getElementById(b).innerHTML == ""){
    document.getElementById("TTT").classList.remove('o');
    
    document.getElementById(b).style.pointerEvents = 'none';
    document.getElementById(b).innerHTML = "<img src='opngegg.png' width='80px' height='80px'>";
    document.getElementById(b).disabled = true;
    
        
        document.getElementById("TTT").classList.add('x');
 
    flag = 1;
    msg(0);
    oWin[b]=1;
    ar+=1
    
    check();

 
}
})

function check() {

for(var i=0; i<winner.length; i++){
  
    if(xWin[winner[i][0]] > -1 && xWin[winner[i][1]] > -1 &&  xWin[winner[i][2]] > -1) {
    
        id=strikeClass[i]
        document.getElementById("strike").classList.add(id);
        document.getElementById("players").innerHTML= " ";
        const Xnamee =localStorage.getItem('playerX');
        document.getElementById("titleWinner").innerHTML= Xnamee+" "+"<span style=\"color:black\">"+"<br> You won the match" ;
        document.getElementById("win-img-edit1").innerHTML=`<img src="image2.gif" class="win-img-edit" alt="hgfhg">`;
        let wait = setTimeout(waitFunction, 1000);
        let waitXwin = setTimeout(xWinFunction, 1000);
 

       
        break;
    

    }if(oWin[winner[i][0]] > -1 && oWin[winner[i][1]] > -1 && oWin[winner[i][2]] > -1) {
        
        id=strikeClass[i]
        document.getElementById("strike").classList.add(id); 
        document.getElementById("players").innerHTML= " ";
        const Xnamee =localStorage.getItem('playerO');
        document.getElementById("titleWinner").innerHTML= Xnamee+" "+"<span style=\"color:black\">"+ " <br> You won the match" ;
        document.getElementById("win-img-edit1").innerHTML=`<img src="image2.gif" class="win-img-edit" alt="hgfhg">`;
        let wait = setTimeout(waitFunction, 1000);
        let waitOwin = setTimeout(oWinFunction, 1000);

        
        

        break;
        
        
       
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
   


    } if(x==1){
        const Onamee =localStorage.getItem('playerO');
        document.getElementById("players").innerHTML= Onamee +" "+ "<span style=\"color:black\">"+"Its Your Turn" ;
      
    }
   

}
//Score board Name

const Xnameee =localStorage.getItem('playerX');
 document.getElementById("x-winner-name").innerHTML= Xnameee;

const Onameee =localStorage.getItem('playerO');
document.getElementById("o-winner-name").innerHTML= Onameee;         










