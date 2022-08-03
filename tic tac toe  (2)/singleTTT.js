






playerTurn=localStorage.getItem("playerTurn")
flag=' ';
let board = [ [ '_', '_', '_' ],
              [ '_', '_', '_' ],
              [ '_', '_', '_' ] ];
    player = ' ', opponent = ' ';

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

// playman=localStorage.getItem("imageid")
// flag = localStorage.getItem("imageid");
// console.log(playerTurn);
// console.log(flag)




class Move
{
    constructor()
    {
        let row,col;
    }
}

var a=document.getElementsByClassName='TTTgame';
playman=localStorage.getItem("imageid");
flag = localStorage.getItem("imageid");
console.log(playerTurn);
console.log(flag)



if(flag==1){
    document.getElementById("TTT").classList.add('x');
    player='o'
    opponent='x'
    ai="o"
}else{

    document.getElementById("TTT").classList.add('o');
    player='x'
    opponent='o'
    ai="x"
}

console.log(player);
console.log(opponent);
console.log(ai);

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
   let timer = setTimeout(delayedFunction1, 500);
   
}
else if(flag == 0  && document.getElementById(b).innerHTML == ""){
    document.getElementById("TTT").classList.add('o');
  oTurn(b);
  let timer = setTimeout(delayedFunction1, 500);
}
})

function delayedFunction1(b){
    let bestMove = findBestMove(board);
    board[bestMove.row][bestMove.col]=ai;
    console.log(bestMove)
    r=bestMove.row
    c=bestMove.col
    
    if(r==0 && c==0) {
        id='0' 
        if(ai=='o'){
           
        document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
        oWin[id]=1;
        }else{
            document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
            xWin[id]=1;

        }

        //arr[0]=0
    }
    else if(r==0 && c==1){
        id='1' 
        if(ai=='o'){
            
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
        //arr[1]=0
    }
    else if(r==0 && c==2){
        id='2'
        if(ai=='o'){
            
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==1 && c==0){
        id='3'
        if(ai=='o'){
           
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==1 && c==1){
        id='4'
        if(ai=='o'){
           
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==1 && c==2){
        id='5'
        if(ai=='o'){
           
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==2 && c==0){
        id='6'
        if(ai=='o'){
            
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==2 && c==1){
        id='7'
        if(ai=='o'){
            
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    else if(r==2 && c==2){
        id='8'
        if(ai=='o'){
          
            document.getElementById(id).innerHTML="<img src='opngegg.png' width='80px' height='80px'></img>"
            oWin[id]=1;
            }else{
                document.getElementById(id).innerHTML= "<img src='xpngegg.png' width='80px' height='80px'></img>"
                xWin[id]=1;
    
            }
    }
    ar+=1
    document.getElementById(id).style.pointerEvents = 'none';
    check();

    
}

function isMovesLeft(board)
{
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (board[i][j] == '_')
                return true;
                
    return false;
}

// This is the evaluation function as discussed
// in the previous article ( http://goo.gl/sJgv68 )
function evaluate(b)
{
    
    // Checking for Rows for X or O victory.
    for(let row = 0; row < 3; row++)
    {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2])
        {
            if (b[row][0] == player)
                return +10;
                
            else if (b[row][0] == opponent)
                return -10;
        }
    }

    // Checking for Columns for X or O victory.
    for(let col = 0; col < 3; col++)
    {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col])
        {
            if (b[0][col] == player)
                return +10;

            else if (b[0][col] == opponent)
                return -10;
        }
    }

    // Checking for Diagonals for X or O victory.
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2])
    {
        if (b[0][0] == player)
            return +10;
            
        else if (b[0][0] == opponent)
            return -10;
    }

    if (b[0][2] == b[1][1] &&
        b[1][1] == b[2][0])
    {
        if (b[0][2] == player)
            return +10;
            
        else if (b[0][2] == opponent)
            return -10;
    }

    // Else if none of them have
    // won then return 0
    return 0;
}

// This is the minimax function. It
// considers all the possible ways
// the game can go and returns the
// value of the board
function minimax(board, depth, isMax)
{
    let score = evaluate(board);

    
    if (score == 10)
        return score;

    
    if (score == -10)
        return score;

    
    if (isMovesLeft(board) == false)
        return 0;

    
    if (isMax)
    {
        let best = -1000;

        
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                
                
                if (board[i][j]=='_')
                {
                    
                    
                    board[i][j] = player;

                    
                    best = Math.max(best, minimax(board,
                                    depth + 1,!isMax));

                    board[i][j] = '_';
                }
            }
        }
        return best;
    }

    
    else
    {
        let best = 1000;

        
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                
                
                if (board[i][j] == '_')
                {
                    
                    
                    board[i][j] = opponent;

                    
                    best = Math.min(best, minimax(board,
                                    depth + 1, !isMax));

                    
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}

// This will return the best possible
// move for the player
function findBestMove(board)
{
    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;

    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            
            if (board[i][j] == '_')
            {               
                board[i][j] = player;           
                let moveVal = minimax(board, 0, false);
                board[i][j] = '_';
                if (moveVal > bestVal)
                {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }


    return bestMove;
}


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
        

       
        break ;
       
  

    }if(oWin[winner[i][0]] > -1 && oWin[winner[i][1]] > -1 && oWin[winner[i][2]] > -1) {
        
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
        //console.log(Xnamee);


    } if(x==1){
        const Onamee =localStorage.getItem('playerO');
        document.getElementById("players").innerHTML= Onamee +" "+ "<span style=\"color:black\">"+"Its Your Turn" ;
        //console.log(Onamee);
    }
   

}
     

function xTurn(b){
    document.getElementById(b).innerHTML = `<img src='xpngegg.png' width='80px' height='80px'></img>`;
    // document.getElementById(b).innerHTML ='X'
    // document.getElementById(b).style.pointerEvents = 'none';
    b=parseInt(b)
    if(b==0){
        board[0][0]='x'
    }
    if(b==1){
        board[0][1]='x'
    }
    if(b==2){
        board[0][2]='x'
    }
    if(b==3){
        board[1][0]='x'
    }
    if(b==4){
        board[1][1]='x'
    }
    if(b==5){
        board[1][2]='x'
    }
    if(b==6){
        board[2][0]='x'
    }
    if(b==7){
        board[2][1]='x'
    }
    if(b==8){
        board[2][2]='x'
    }
    document.getElementById(b).style.pointerEvents = 'none';

    flag = 1;
    // msg(1);
    xWin[b]=1;
    ar+=1
    //console.log(ar.length);
    check();
   
    

}

function oTurn(b){
  

    document.getElementById(b).innerHTML = `<img src='opngegg.png' width='80px' height='80px'></img>`;
    // document.getElementById(b).innerHTML ='O'
    console.log(document.getElementById(b).innerHTML)
    // document.getElementById(b).style.pointerEvents = 'none';
    b=parseInt(b)
    if(b==0){
        board[0][0]='o'
    }
    if(b==1){
        board[0][1]='o'
    }
    if(b==2){
        board[0][2]='o'
    }
    if(b==3){
        board[1][0]='o'
    }
    if(b==4){
        board[1][1]='o'
    }
    if(b==5){
        board[1][2]='o'
    }
    if(b==6){
        board[2][0]='o'
    }
    if(b==7){
        board[2][1]='o'
    }
    if(b==8){
        board[2][2]='o'
    }
    document.getElementById(b).style.pointerEvents = 'none';

    

    flag = 0;
    // msg(0);
    oWin[b]=1;
    ar+=1
    
    check();

}
