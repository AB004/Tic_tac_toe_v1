console.log("Welcome!")

let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"
let isgameover = false;
var count = 0;
const changeTurn = ()=>{

    return turn === "X" ? "O" : "X"
}
music.play();
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,14.65,90],
        [1,4,7,0,14.65,90],
        [2,5,8,10,14.65,90],
        [0,4,8,0,14.5,45],
        [2,4,6,0,14.5,135]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!!!";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
           
            document.querySelector(".line").style.width = "30vw";
            
            
        }
    })
}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            count++;
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                if(count === 9 ){
                    document.getElementsByClassName("info")[0].innerText = "Draw!";
                }
                else{
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
                
            }
            
        }
    })
    element.addEventListener('touchstart', ()=>{
        if(boxtext.innerText === ''){
            count++;
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                if(count === 9 ){
                    document.getElementsByClassName("info")[0].innerText = "Draw!";
                }
                else{
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
                
            }
            
        }
    })
})


reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.width = ' 0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

reset.addEventListener("touchstart", ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.width = ' 0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})