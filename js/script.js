// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function() {
      const moreProjects = this.nextElementSibling;
      
      if (moreProjects.classList.contains('hidden')) {
        moreProjects.classList.remove('hidden');
        this.textContent = 'Show Less';
      } else {
        moreProjects.classList.add('hidden');
        this.textContent = 'Show More Projects';
      }
    });
  });
  


// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

emailjs.init('zJaejWlWXUEVTlyy-');

const contactForm = document.getElementById('contact-form1');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0aqvbf', 'template_heask7f', '#contact-form1', 'zJaejWlWXUEVTlyy-')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully';
            contactMessage.style.color = 'green';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        }, (error) => {
            contactMessage.textContent = 'Message not sent(service error)';
            contactMessage.style.color = 'red';
            console.error('EmailJS error:', error);
        });
};

contactForm.addEventListener('submit', sendEmail);