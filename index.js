let text=document.querySelector(".header-text p")

let arr=["WebDeveloper","UI/UX developer","Frontend","FullStack"]

function textShuffle(arr){
    for(let i=0;i<arr.length;i++){
      setTimeout(function(){
        text.innerHTML=arr[i]
        },i*1000)
      }
}
textShuffle(arr)





/*______________________________________________________________________________*/

let div=document.querySelector(".menu")
let div1=document.querySelector(".one")
let div2=document.querySelector(".two")
let display=0
div.style.display="none"
div1.style.display="none"
div2.style.display="none"

function Show(){
  if(Show){
    div.style.display="block"
  }
}
function hide(){
  if(hide){
    div.style.display="none"
  }
}
function Show1(){
  if(Show1){
    div1.style.display="block"
  }
}
function hide1(){
  if(hide1){
    div1.style.display="none"
  }
}
function Show2(){
  if(Show2){
    div2.style.display="block"
  }
}
function hide2(){
  if(hide2){
    div2.style.display="none"
  }
}

/*____________________________________________________________________________________________________*/



