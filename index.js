//fade reveal
ScrollReveal({
    duration: 600,
    reset: true,
   easing: 'cubic-bezier(.694,0,.335,1)',
   scale: 1,
   viewFactor: 0.3,
}).reveal('.background');

ScrollReveal({
  duration: 600,
  reset: true,
  easing: 'cubic-bezier(.694,0,.335,1)',
  scale: 1,
  viewFactor: 0.3,
}).reveal('.skills');

ScrollReveal({
  duration: 600,
  reset: true,
  easing: 'cubic-bezier(.694,0,.335,1)',
  scale: 1,
  viewFactor: 0.12,
}).reveal('.projects');

//Get the date
function year(){
  const date = new Date();
  const year = date.getFullYear();
  $('#year').innerHtml = year;
}
