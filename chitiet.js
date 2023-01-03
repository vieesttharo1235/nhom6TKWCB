
//-------img------//
 const bigImg = document.querySelector(".product-content-left-big-img img")
 const smalImg = document.querySelectorAll(".product-content-left-small-img img")
 smalImg.forEach(function(imgItem,X){
     imgItem.addEventListener("click",function(){
         bigImg.src = imgItem.src
     })
 })
const butTon=document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}