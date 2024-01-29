let indicator = 1;

let slides = document.getElementsByClassName("photos");
let slideInterval;
let dots = document.querySelector(".dots")
showSlides();



function prevSlide(){
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    indicator--;
    if(indicator < 1) {
        indicator = slides.length;
    }
   /*  for(i=0; i < dots.length; i++){
        dots[i].className=dots[i].className.replace('active', " ")
    } */
    slides[indicator - 1].style.display = "block";
    dots[indicator-1].className += 'active';
}

function nextSlide(){
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    indicator++;
    if(indicator  > slides.length) {
        indicator = 1;
    }
    
    slides[indicator - 1].style.display = "block";
    dots[indicator-1].className += 'active';
}

function showSlides(){
  for(let i=0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  indicator++;
  if(indicator > slides.length){
      indicator = 1;
  }
 
  slides[indicator - 1].style.display = "block";
  dots[indicator-1].className += 'active';
  slideInterval = setTimeout(showSlides, 8000);
}

function playSlide(){
    slideInterval = setTimeout(showSlides, 8000);
}

function stopSlide(){
    clearTimeout(slideInterval);
}


 function currentSlide() {
    slides[i].style.display = "block";
}
function currentSlide() {
    for (let i=0; i < dots.length; i++){
        dots[i].dots.display='none';
    }

    slideIndex = index;
    for(let i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace('active')
    }
   slides[indicator-1].style.display="block";
   dots[indicator-1].className += 'active';  
} 
