//pre-load:

function readableDate(date, offset, type) {
  date.setHours((date.getHours() + date.getTimezoneOffset()/60)+offset);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  if (type == 'hours') {
    return hours;
  }
  else if (type == 'minutes') {
    return minutes;
  }
  else if (type = 'ampm') {
    return ampm;
  }
  else {
    return hours + ':' + minutes + ' ' + ampm;
  }
}

//loaded:
window.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded')

let observer = new IntersectionObserver(entries => {
  // console.log(entries);
  if (entries[0].boundingClientRect.y < 0) {
    console.log("Past 100px!");
    document.body.classList.add('scrolled');
  } else {
    console.log("Not past 100px");
    document.body.classList.remove('scrolled');

  }
});

// observer.observe(document.querySelector("section.work span"));
observer.observe(document.querySelector("#main"));


let root = document.documentElement;
// let div = document.querySelector("div");


window.addEventListener('scroll', e => { //debounce: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/
  // root.style.setProperty('--scroll-value', window.scrollY + 'px');
  // root.style.setProperty('--scroll-percent', ((window.scrollY/(document.body.clientHeight-window.innerHeight)) * 100) + '%');
  root.dataset.scroll = window.scrollY;
});


root.addEventListener('mousemove', e => {
  root.style.setProperty('--mouse-x', e.clientX + 'px');
  root.style.setProperty('--mouse-y', e.clientY + 'px');
});

function setMousePosition() {

}


const sections = document.querySelectorAll('h4'); //temporary exclusion of what we do highlights to be per-subsection

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  sections.forEach(section => {
    observer.observe(section);
  });

});
