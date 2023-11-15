const titleElement = document.getElementById('typing-title');
document.querySelector('.text_thanks').style.visibility = 'hidden';
        const textToType = "Beltei International university";
        let index = 0;
        let isTyping = true;
        function typeAndRemoveTitle() {
            if (isTyping) {
                titleElement.textContent += textToType.charAt(index);
                index++;

                if (index === textToType.length) {
                    isTyping = false;
                    setTimeout(typeAndRemoveTitle, 400); 
                } else {
                    setTimeout(typeAndRemoveTitle, 320); 
                }
            } else {
                titleElement.textContent = titleElement.textContent.slice(1,0);

                if (titleElement.textContent ==='') {
                    isTyping = true;
                    index = 0;
                    setTimeout(typeAndRemoveTitle, 1); 
                } else {
                    setTimeout(typeAndRemoveTitle, 220); 
                }
            }
        }
        window.onload = typeAndRemoveTitle;
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
document.querySelector("body").style.visibility = "hidden";
document.addEventListener("DOMContentLoaded", function() {
    var timeoutId = setTimeout(function() {
        document.querySelector(".spinner").style.visibility = "visible";
         document.body.style.overflowY = "hidden";
    }, 100);
    setTimeout(function() {
        clearTimeout(timeoutId);
        document.querySelector("body").style.visibility = "visible";
        document.querySelector(".spinner").style.visibility = "hidden";
        document.body.style.overflowY = "auto";
    }, 4000);
});
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
const wrapper = document.querySelector('.new');
let isPressed = false;
let startX = 0;
let scrollLeft = 0;
wrapper.addEventListener('mousedown', function (e) {
  isPressed = true;
  startX = e.clientX;
  scrollLeft = this.scrollLeft;
  this.style.cursor = 'grabbing';
});
wrapper.addEventListener('mouseleave', function () {
  isPressed = false;
  this.style.cursor = 'grab';
});
window.addEventListener('mouseup', function () {
  isPressed = false;
  wrapper.style.cursor = 'grab';
});
wrapper.addEventListener('mousemove', function (e) {
  if (!isPressed) {
    return;
  }
  const deltaX = startX - e.clientX;
  this.scrollLeft = scrollLeft + deltaX;
  e.preventDefault();
});
function animateScroll() {
  if (!isPressed) {
    return;
  }
  requestAnimationFrame(animateScroll);
}
wrapper.addEventListener('mousedown', function () {
  animateScroll();
});
// count
function startCounter() {
  const counters = document.querySelectorAll('.counter-item');
  const speed = 500;
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleScroll() {
  const counters = document.querySelectorAll('.counter-item');
  counters.forEach((counter) => {
    if (isInViewport(counter) && counter.innerText === '0') {
      startCounter();
    }
  });
}
window.addEventListener('scroll', handleScroll);
function resetCounters() {
  const counters = document.querySelectorAll('.counter-item');
  counters.forEach((counter) => {
    counter.innerText = '0';
  });
}
function handleScroll() {
  const counters = document.querySelectorAll('.counter-item');
  counters.forEach((counter) => {
    if (isInViewport(counter)) {
      if (counter.innerText === '0') {
        startCounter();
      }
    } else {
      counter.innerText = '0';
    }
  });
}
window.addEventListener('scroll', handleScroll);
resetCounters();
function isInViewportt(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function startCounterr() {
  $('.counter-value').each(function () {
    var $this = $(this);
    var countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    }, {
      duration: 2000,
      easing: 'swing',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
  });
}
function resetCounterss() {
  $('.counter-value').each(function () {
    $(this).text('0');
  });
}
function handleeScroll() {
  const counterss = document.querySelectorAll('.counter-value');
  counterss.forEach((counter) => {
    if (isInViewport(counter)) {
      if (counter.innerText === '0') {
        startCounterr();
      }
    } else {
      counter.innerText = '0';
    }
  });
}
window.addEventListener('scroll', handleeScroll);
$(document).ready(function () {
  resetCounterss();
});
// contact
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

const imgsEl = document.querySelectorAll(".u");
        const imageContainerEl = document.querySelector(".Lower");
        let currentImg = 1;
        let isReversed = false;
        function updateImg() {
            imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px`;
            if (!isReversed) {
                currentImg++;
            } else {
                currentImg--;
            }
            if (currentImg > imgsEl.length) {
                currentImg = imgsEl.length;
                isReversed = true;
            } else if (currentImg < 1) {
                currentImg = 1;
                isReversed = false;
                setTimeout(updateImg, 7000); 
                return;
            }
            setTimeout(updateImg, 7000); 
        }
        updateImg();


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
