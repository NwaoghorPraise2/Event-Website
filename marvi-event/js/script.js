let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {

  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});


const names = document.getElementById("names");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const body = document.getElementById("body");
const submit = document.getElementById("submit");

goto = e => {
  if (names.value && number.value && email.value && body.value) {
    e.preventDefault();
    let data = {

      name: names.value,
      email: email.value,
      number: number.value,
      subject: subject.value,
      body: body.value
    };
    fetch("/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)
    }).catch(err => {
      throw err;
    });
    alert(" Email Sent!!!");
    window.location.assign(`https://marvi-event.marvi2.repl.co`);
  } else {
    alert("Hello Dear, please fill contact form correctly correctly!!!");
  }
};

