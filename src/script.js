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

    //Creates container
    const expContainer = document.createElement('div'),
      eduContainer = document.createElement('div');
    expContainer.classList = 'exp';
    eduContainer.classList = 'edu';
    document.querySelector('.experiance-container').append(expContainer);
    document.querySelector('.education-container').append(eduContainer);

    //Creates Titles
    const expTitle = document.createElement('h2'),
      eduTitle = document.createElement('h2');
    expTitle.classList = 'exp-title';
    eduTitle.classList = 'exp-title';
    expTitle.textContent = data.exptitle;
    eduTitle.textContent = data.edutitle;
    document.querySelector('.exp').append(expTitle);
    document.querySelector('.edu').append(eduTitle);

    //Creates Paragraphs
    const expText = document.createElement('p'),
      eduText = document.createElement('p');
    expText.classList = 'exp-text';
    eduText.classList = 'edu-text';
    document.querySelector('.exp').append(expText);
    document.querySelector('.edu').append(eduText);

    //Create emphasis tag in p and import data from json
    for (let i = 0; i < data.experiance.length; i++) {
      const expRole = document.createElement('em'),
        expComp = document.createElement('em');
      expRole.classList = 'exp-role';
      expComp.classList = 'exp-comp';
      document.querySelector('.exp-text').append(expRole);
      document.querySelector('.exp-text').append(expComp);
      expRole.innerHTML = data.experiance[i].role + '<br>';
      expComp.innerHTML = data.experiance[i].company + '<br><br>';
    }
    for (let i = 0; i < data.education.length; i++) {
      const eduRole = document.createElement('em'),
        eduComp = document.createElement('em');
      eduRole.classList = 'edu-role';
      eduComp.classList = 'edu-comp';
      document.querySelector('.edu-text').append(eduRole);
      document.querySelector('.edu-text').append(eduComp);
      eduRole.innerHTML = data.education[i].role + '<br>';
      eduComp.innerHTML = data.education[i].company + '<br><br>';
    }
  } else {
    console.log('HTTP-Error: ' + response.status);
  }
}
loadResume();
