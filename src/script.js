'use strict';
const about = document.querySelector('.about-nav');
const resume = document.querySelector('.resume-nav');
const projects = document.querySelector('.projects-nav');
const contacts = document.querySelector('.contacts-nav');

let carousel = document.querySelector('.carousel');

about.addEventListener('click', function (e) {
  console.log(e);
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'rotate(0deg)') {
      carousel.style.transform = 'rotate(0deg)';
    }
  }
});

resume.addEventListener('click', function (e) {
  console.log(e);
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'rotate(90deg)') {
      carousel.style.transform = 'rotate(90deg)';
    }
  }
});

projects.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'rotate(180deg)') {
      carousel.style.transform = 'rotate(180deg)';
    }
  }
});

contacts.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'rotate(270deg)') {
      carousel.style.transform = 'rotate(270deg)';
    }
  }
});
