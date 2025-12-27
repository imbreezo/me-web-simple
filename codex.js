// Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#00ffc3"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5},
    "size":{"value":3},
    "line_linked":{"enable":true,"distance":150,"color":"#00ffc3","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":2,"direction":"none","out_mode":"bounce","random":true}
  }
});

// Navbar Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
let ticking = false;

window.addEventListener('scroll', () => {
  if(!ticking){
    window.requestAnimationFrame(() => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(scrollY >= sectionTop){ current = section.getAttribute('id'); }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){ link.classList.add('active'); }
      });
      ticking = false;
    });
    ticking = true;
  }
});
