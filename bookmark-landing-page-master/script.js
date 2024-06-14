const tabsBtns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
const line = document.querySelector('.line');
const header = document.querySelector('.header');
const cards = document.querySelectorAll('.extension-card');
const cardContainer = document.querySelectorAll('.extension-cards');
const hamburger = document.querySelector('.hamburger')
const times = document.querySelector('.times')
const navBar = document.querySelector('.navbar')


hamburger.addEventListener('click', function () {
    hamburger.style.display = 'none'
    times.style.display = 'block'
    navBar.classList.add('display')
    navBar.classList.add('add')
    document.querySelector('header').classList.add('add')
    document.querySelector('.logo').classList.add('class1')
})

times.addEventListener('click', function () {
  hamburger.style.display = 'block';
  times.style.display = 'none';
  navBar.classList.remove('display');
  navBar.classList.remove('add');
  document.querySelector('header').classList.remove('add');
  document.querySelector('.logo').classList.remove('class1');
});

document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabs section
tabsBtns.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabsBtns.forEach((tab) => {
      tab.classList.remove('active');
      line.style.width = e.target.offsetWidth + 'px';
      line.style.left = e.target.offsetLeft + 'px';
      content.forEach((con) => {
        con.classList.remove('active');
      });
      content[index].classList.add('active');
    });
    tab.classList.add('active');
  });
});

// menu fade
const hover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav-link');
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
// passing the argument into the handler
navBar.addEventListener('mouseover', hover.bind(0.5));
navBar.addEventListener('mouseout', hover.bind(1));

//  FAQs
const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// sticky header
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header)
