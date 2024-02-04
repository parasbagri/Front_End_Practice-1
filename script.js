// document.onkeydown = function(e){
//      console.log('Key :', e.ctrlKey); 
// }  

// document.onkeydown = function mykey(e){
//   console.log('Key : ', e.key)
// }; 

// document.onkeydown = function mykey(e) {
//     alert('dd');
//     console.log('Key : ', e.code);
//   } 

// let bod = document.getElementById('body');
// let game = document.getElementById('game');

// window.addEventListener('keydown',(e)=>{
//      bod.textContent = `Hee i'm ${e.key} or batao kya chahiye !!`
//      console.log(e.keyCode);
// }) 


// bloble variable 
 let score = 0;
 cross = true;

const audio1 = new Audio('assets/gameover.mp3');
const audio2 = new Audio('assets/music.mp3');
setTimeout(() =>{
     audio2.play();
},1000)

document.onkeydown = function(e){
    if(e.keyCode == 38)
    {
        let dino = document.querySelector('.dino')
        dino.classList.add("jump");
        setTimeout(() =>{
            dino.classList.remove("jump");
        }, 600)
    }
    // move left side only
    if(e.keyCode == 39)
    {
        let dino = document.querySelector('.dino')
        let dinoX = parseFloat(window.getComputedStyle(dino,null).getPropertyValue("left"))
         dino.style.left = dinoX + 112 + 'px';        
    }
    // moving backword piche 
    if(e.keyCode == 37)
    {
        let dino = document.querySelector('.dino')
        let dinoX = parseFloat(window.getComputedStyle(dino,null).getPropertyValue("left"))
         dino.style.left = dinoX - 112 + 'px';        
    } 

} 

//
setInterval(()=>{
    let dino = document.querySelector('.dino')
    let gameOver = document.getElementById("game");
    let obstacle = document.querySelector('.obstacleAni')
     //dino ka X or Y exis
    // let dX = window.getComputedStyle(dino,null).getPropertyValue('left')
    // let dY = window.getComputedStyle(dino,null).getPropertyValue("top")

    // obstale ka Exixs
    // let oX = window.getComputedStyle(obstacle,null).getPropertyValue('left');
    // let oY = window.getComputedStyle(obstacle,null).getPropertyValue('top')
   
  let dX = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('left'));
  let dY = parseFloat(window.getComputedStyle(dino, null).getPropertyValue("top"));
  let oX = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  let oY = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    //  X Exixs me dono kitani duri me hai ye calculate kar rhe hai 
   let OffSetX = Math.abs(dX-oX)
   let OffSetY = Math.abs(dY-oY)
  // console.log("OffSetX:", OffSetX);
 //  console.log("OffSetY:", OffSetY);4

    if(OffSetX < 93 && OffSetY < 52)
    {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
        audio1.play();
        setTimeout(()=>{
            audio1.pause()
        },1000)
        audio2.pause();
    //    let gameScore =  document.getElementById('score')
    //    gameScore.textContent = score;
    } 

//  nhi takarate to mai score up karta jaunga 
    // else {
    //       score+=1;
    //       scoreFun(score);
    // }
    
    // jump kane me hi ange padhe mera score 
    else if(OffSetX < 145 && cross) {
             score+=1;
             scoreFun(score);
             cross = false;
             setTimeout(()=>{
                cross = true;
             },1000)

        }
},100) 

function scoreFun(score){
    gameScore =  document.getElementById('score')
    gameScore.textContent = score;
}