
//  var mobtn = document.getElementById("menubtn");
//  var mainmenu = document.getElementById("mainmenu");
//  var scrollupbtn = document.querySelector(".scroll-up-btn");
// // mainmenu.style.left="-100%";
//  mobtn.onclick=function(){

// if(mainmenu.style.left=="-100%")
// {
//     mobtn.classList.add("active");

//     mainmenu.style.left="0%";
// }

// else{
//     mainmenu.style.left = "-100%";
//     mobtn.classList.remove("active");

// }
//  };




let navbar = document.getElementById("navbar");


 window.addEventListener('scroll',function(){

if(window.pageYOffset>20)
{
    console.log('hello');
navbar.classList.add("sticky1")


}
else{
navbar.classList.remove("sticky1")

}

if(window.pageYOffset>500)
{
scrollupbtn.classList.add('show');
}
else{
  scrollupbtn.classList.remove('show');
}



 });


// project section


//  let content1 = document.getElementById("content1");
//  let content2 = document.getElementById("content2");

//  let btn1 = document.getElementById("btn1");
//  let btn2 = document.getElementById("btn2");
//  let btn3 = document.getElementById("btn3");

//  btn1.onclick = function () {
//    content1.style.transform = "translateX(0)";
//    content2.style.transform = "translateX(100%)";
// let d = btn1.classList.add("activebtn1");
// console.log(d);
// btn2.classList.remove("activebtn1");
//  };

//  btn2.onclick = function () {
//    content2.style.transform = "translateX(0)";
//    content1.style.transform = "translateX(100%)";
// let c = btn2.classList.add("activebtn1");
// console.log(c);
// btn1.classList.remove('activebtn1')
//  };



let tagline = document.getElementById("tagline");
// color1


 let ColorSwitcher1 = document.getElementById("color1");

 ColorSwitcher1.addEventListener('click',()=>{
   
var color1Btns = document.querySelectorAll(".color1-btns");
var color1BtnsBorder = document.querySelectorAll(".color1-btns-border");
var color1Text = document.querySelectorAll('.color1-text');
var color1Icons = document.querySelectorAll(".color1-icons");


var i;
for(i=0;i<color1Btns.length;i++){
  color1Btns[i].style.backgroundColor="crimson";
  color1BtnsBorder[i].style.borderColor="red";
 
}

for(i=0;i<color1Text.length;i++)
{
  color1Text[i].style.color="crimson";
}

for (i = 0; i < color1Icons.length; i++) {
  color1Icons[i].style.color = "crimson";
}

navbar.classList.add('padding');
navbar.style.backgroundColor="crimson";
tagline.style.color="#fff"

 });

//  color2

 let ColorSwitcher2 = document.getElementById("color2");




  ColorSwitcher2.addEventListener("click", () => {
    var color2Btns = document.querySelectorAll(".color2-btns");
    var color2BtnsBorder = document.querySelectorAll(".color2-btns-border");
    var color2Text = document.querySelectorAll(".color2-text");
    var color2Icons = document.querySelectorAll(".color2-icons");



    var i;
    for (i = 0; i < color2Btns.length; i++) {
      color2Btns[i].style.backgroundColor = "rgb(240, 16, 139)";
      color2BtnsBorder[i].style.borderColor = "rgb(240, 16, 139)";
    }

    for (i = 0; i < color2Text.length; i++) {
      color2Text[i].style.color = "rgb(240, 16, 139)";
    }

    for (i = 0; i < color2Icons.length; i++) {
      color2Icons[i].style.color = "rgb(240, 16, 139)";
    }


navbar.classList.add("padding");
navbar.style.backgroundColor = "var(--main3-color)";
tagline.style.color = "#fff";


  });

  // color3


        let ColorSwitcher3 = document.getElementById("color3");

  ColorSwitcher3.addEventListener("click", () => {
    var color3Btns = document.querySelectorAll(".color3-btns");
    var color3BtnsBorder = document.querySelectorAll(".color3-btns-border");
    var color3Text = document.querySelectorAll(".color3-text");
    var color3Icons = document.querySelectorAll(".color3-icons");
    var color3textonly1 = document.querySelector(".color3-text-only1");

    var i;
    for (i = 0; i < color3Btns.length; i++) {
      color3Btns[i].style.backgroundColor = "#dd9a05";
      color3BtnsBorder[i].style.borderColor = "#dd9a05";
    }

    for (i = 0; i < color3Text.length; i++) {
      color3Text[i].style.color = "#dd9a05";
    }

    for (i = 0; i < color3Icons.length; i++) {
      color3Icons[i].style.color = "#dd9a05";
    }

    color3textonly1.style.color="#fff"



navbar.classList.add("padding");
navbar.style.backgroundColor = "var(--main2-color)";
tagline.style.color = "#fff";


  });


  