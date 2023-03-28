// Thanh cuon
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end thanh cuon


//start menu
const menuBtn=document.querySelector('.menu-btn');
const listMenu=document.querySelector('.modal-menu');
const closeBtn=document.querySelector('.ti-close');
function showMenu(){
 listMenu.classList.add('open');
}
function closeMenu(){
  listMenu.classList.remove('open');
}
menuBtn.addEventListener('click', showMenu)

closeBtn.addEventListener('click',closeMenu)

// end menu

// menu cap 2
const list1=document.querySelector('.js-list-1');
const list2=document.querySelector('.js-list-2');
const list3=document.querySelector('.js-list-3');

const showLs1=document.querySelector('.ls1');
const showLs2=document.querySelector('.ls2');
const showLs3=document.querySelector('.ls3');
function showList1(){
    showLs1.classList.toggle('open');
}
function showList2(){
  showLs2.classList.toggle('open');
}
function showList3(){
  showLs3.classList.toggle('open');
}
list1.addEventListener('click',showList1)
list2.addEventListener('click',showList2)
list3.addEventListener('click',showList3)
// end menu cap 2

// search 
const timkiem=document.querySelector('#search-mobile');
const modalSearch=document.querySelector('.modal-search');
const searchContainer=document.querySelector('.modal-search-container');

function openSearch(){
  var x= document.querySelector('#main').offsetWidth;
  if(x<=1023){
  modalSearch.classList.add('open');
  }
}
modalSearch.addEventListener('click',function(close){
  modalSearch.classList.remove('open');
})
timkiem.addEventListener('click',openSearch) 
searchContainer.addEventListener('click',function(event){
  event.stopPropagation()
})

//rank
// const rank=document.querySelector('.rank');
// const closeRank= document.querySelector('.js-item-film');
// function rankHover(){

// }

// closeRank.addEventListener('mouseover',rankHover)