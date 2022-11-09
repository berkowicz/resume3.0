'use strict';

//Contolls carousell when clicking navigation
const about = document.querySelector('.about-nav'),
  resume = document.querySelector('.resume-nav'),
  projects = document.querySelector('.projects-nav'),
  contacts = document.querySelector('.contacts-nav'),
  carousel = document.querySelector('.right-container');

about.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'translateY(0%)') {
      carousel.style.transform = 'translateY(0%)';
    }
  }
});

resume.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'translateY(-25%)') {
      carousel.style.transform = 'translateY(-25%)';
    }
  }
});

projects.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'translateY(-50%)') {
      carousel.style.transform = 'translateY(-50%)';
    }
  }
});

contacts.addEventListener('click', function (e) {
  if (e.pointerId === 1) {
    if (carousel.style.transform !== 'translateY(-75%)') {
      carousel.style.transform = 'translateY(-75%)';
    }
  }
});

//Import json to resume
let url = 'src/data.json';

async function loadResume() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    console.log(data);
  } else {
    console.log('HTTP-Error: ' + response.status);
  }
}
loadResume();

const expContainer = document.createElement('div'),
  eduContainer = document.createElement('div');
expContainer.classList = 'exp';
document.querySelector('.experiance-container').append(expContainer);
eduContainer.classList = 'edu';
document.querySelector('.education-container').append(eduContainer);

const expTitle = document.createElement('h2'),
  eduTitle = document.createElement('h2');

expTitle.classList = 'exp-text';
expTitle.textContent = data.resume.exptitle;
