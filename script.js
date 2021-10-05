function toggleMenu(x) {
    x.classList.toggle("change");
  }
  var nav = document.getElementById("nav") ;

   function navChange(){
    if(nav.style.right=== "-200px"){
    document.getElementById("nav").style.right = "0";
    document.getElementById("toggle-menu").style.position = "fixed";
  }
      else 
      {nav.style.right="-200px";
       document.getElementById("toggle-menu").style.position = "absolute";
    }
  }

  document.getElementById("toggle-menu").addEventListener("click",navChange);


  var signIn = document.getElementById("sign-in-btn");
 function inputBox(){
   document.getElementById("login-box").classList.toggle("login-box-active");
 }

 signIn.addEventListener("click",inputBox);
 document.getElementById("input-close-btn").addEventListener("click",inputBox);
