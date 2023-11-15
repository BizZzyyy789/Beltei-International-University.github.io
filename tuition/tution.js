const scroling = document.querySelector(".back-to-top");
window.addEventListener('scroll', checkHeight);
 function checkHeight()
 {
   if(window.scrollY > 200)
   {
      scroling.style.display = "flex";
   }
   else
   {
      scroling.style.display = "none";
   }
 }
 document.querySelector('.text_thanks').style.visibility = 'hidden';
 let scrollPosition = 0;
 function disableScroll() {
   scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
   document.body.style.overflow = 'hidden';
 }
 function enableScroll() {
   document.body.style.overflow = 'auto';
   window.scrollTo(0, scrollPosition);
 }
 let valid;
 document.getElementById('click').onclick = function bggg()
 {
   let fname = document.getElementById("fname").value;
 let lname = document.getElementById("lname").value;
 let phonenumber = document.getElementById('phonenumber').value;
 const email = document.querySelector('input[name=email]');
 const text =  document.querySelector('#texttt');
 
   if (fname.trim() === "") 
   {
       document.getElementById('fname_error').innerText= 'Please check your f-name';
       document.getElementById("fname").value = '';
       valid = false;
   }
   else
   {
     document.getElementById('fname_error').innerText= ' ';
     valid = true;
   }
   if (lname.trim() === "") 
   {
       document.getElementById('lname_error').innerText = 'Please check your L-name';
       document.getElementById("lname").value = '';
       valid = false;
   }
   else
   {
     document.getElementById('lname_error').innerText = ' '
     valid = true;
   }
   if (phonenumber.length < 1 || phonenumber.length > 10 || !/^\d+$/.test(phonenumber))
   {
     document.getElementById('phonenumber_error').innerText = 'PLease check Your Phone NUmber';
     document.getElementById("phonenumber").value = '';
     valid = false;
   } 
   else
   {
     document.getElementById('phonenumber_error').innerText = ' ';
     valid = true;
   }
   if(validateEmail(email.value)){
     text.innerText=" ";
     valid = true;
   }else{
     text.innerText = `PLease check Your Email`;
     valid = false;
     email.value = '';
   }
   if(valid == true)
   {
     disableScroll();
     document.getElementById("phonenumber").value = '';
     document.querySelector(".textarea").value = " ";
     document.getElementById("lname").value = '';
     document.getElementById("fname").value = '';
     email.value = '';
     document.querySelector('.text_thanks').style.visibility = 'visible';
     document.querySelector('.container').style.filter = 'blur(10px)';
     document.querySelector('.enter').onclick = function jj()
     {
       document.querySelector('.text_thanks').style.visibility = 'hidden';
       document.querySelector('.container').style.filter = 'blur(0px)';
       enableScroll();
       function blockHorizontalScroll() {
        if (window.innerWidth <= 2980) {
          document.body.style.overflowX = "hidden";
        } else {
          document.body.style.overflowX = "auto";
        }
      }
      blockHorizontalScroll(); 
      window.addEventListener("resize", blockHorizontalScroll); 
     }
   }
 }
 const validateEmail= (email) => 
 {
     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return regex.test(String(email).toLowerCase());
 }

 function blockHorizontalScroll() {
  if (window.innerWidth <= 2980) {
    document.body.style.overflowX = "hidden";
  } else {
    document.body.style.overflowX = "auto";
  }
}
blockHorizontalScroll(); 
window.addEventListener("resize", blockHorizontalScroll); 


window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
      (e.ctrlKey && e.shiftKey && e.keyCode == 74) || 
      (e.ctrlKey && e.keyCode == 85)) { 
      e.preventDefault();
  }
});