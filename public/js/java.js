// Đổi ảnh và thêm icon
function trochuot(){
    let a= document.getElementById("tro");
    
    if(a.src.match("4.jpg")){
        a.src="./public/img/hover1.jpg";
    }  
}
function outimg(){
    let a= document.getElementById("tro");
    if(a.src.match("hover1.jpg")){
        
        a.src="./public/img/4.jpg";
    }  
}
function trochuot1(){
    let a= document.getElementById("tro1");
    
    if(a.src.match("5.jpg")){
        a.src="./public/img/hover2.jpg";
    }  
}
function outimg1(){
    let a= document.getElementById("tro1");
    if(a.src.match("hover2.jpg")){
        
        a.src="./public/img/5.jpg";
    }  
}
function trochuot2(){
    let a= document.getElementById("tro2");
    
    if(a.src.match("6.jpg")){
        a.src="./public/img/hover3.jpg";
    }  
}
function outimg2(){
    let a= document.getElementById("tro2");
    if(a.src.match("hover3.jpg")){
        
        a.src="./public/img/6.jpg";
    }  
}
function trochuot3(){
    let a= document.getElementById("tro3");
    
    if(a.src.match("7.jpg")){
        a.src="./public/img/hover4.jpg";
    }  
}
function outimg3(){
    let a= document.getElementById("tro3");
    if(a.src.match("hover4.jpg")){
        
        a.src="./public/img/7.jpg";
    }  
}
function trochuot4(){
    let a= document.getElementById("tro4");
    
    if(a.src.match("8.jpg")){
        a.src="./public/img/hover5.jpg";
    }  
}
function outimg4(){
    let a= document.getElementById("tro4");
    if(a.src.match("hover5.jpg")){
        
        a.src="./public/img/8.jpg";
    }  
}
function trochuot5(){
    let a= document.getElementById("tro5");
    
    if(a.src.match("9.jpg")){
        a.src="./public/img/hover6.jpg";
    }  
}
function outimg5(){
    let a= document.getElementById("tro5");
    if(a.src.match("hover6.jpg")){
        
        a.src="./public/img/9.jpg";
    }  
}
//Đóng mở tab menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav1").style.width = "250px";
    bgshow();
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav1").style.width = "0";
  }
  // Hiện Icon trong item
  function bgshow(){
        let a=document.getElementById("bg-over-lay");
        a.style.opacity="1";
        a.style.visibility="visible";
  }