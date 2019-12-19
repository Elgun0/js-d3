// var btn1=document.getElementById("btn1")
// var btn2=document.getElementById("btn2")
// var btn3=document.getElementById("btn3")
// btn1.onclick=function(){
//     document.getElementById("bir").classList.add("active")
//     document.getElementById("iki").classList.remove("active")
//     document.getElementById("uc").classList.remove("active")
// }
// btn2.onclick=function(){
//     document.getElementById("bir").classList.remove("active")
//     document.getElementById("iki").classList.add("active")
//     document.getElementById("uc").classList.remove("active")
// }
// btn3.onclick=function(){
//     document.getElementById("bir").classList.remove("active")
//     document.getElementById("iki").classList.remove("active")
//     document.getElementById("uc").classList.add("active")
// }

var btn=document.querySelectorAll(".mybtn")
var panel=document.querySelectorAll(".panel")
for (var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for (var i=0;i<panel.length;i++)
        panel[i].classList.remove("active")
        var btnattr= this.getAttribute("btn-my")
        console.log(btnattr)
        document.getElementById(btnattr).classList.add("active")
    }
}