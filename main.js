let nav = document.querySelector('.techs');
let bar = document.querySelector('.fa-bars');
let call = document.querySelector('.call');


const navBar = () => {
    bar.classList.toggle('open');
    nav.classList.toggle('open');
}



function copyPhone() {

navigator.clipboard.writeText("+2347082492893").then(() => {
    call.innerHTML = '<i class="fa-solid fa-phone"></i> copied phone number';
  },() => {
    call.innerHTML = '<i class="fa-solid fa-phone"></i> could not phone number';
  });

}