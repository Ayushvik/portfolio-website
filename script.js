document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const toggleButton = document.getElementById('toggleButton');
    const textElement = document.getElementById('typing-text');

    // -----------------------------
    // Navbar Scroll Behavior
    // -----------------------------
    const handleScroll = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // -----------------------------
    // Mobile Navigation Toggle
    // -----------------------------
    const toggleMenu = () => {
        navLinks?.classList.toggle('active');
        hamburger?.classList.toggle('active');
        document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : 'auto';
    };

    const closeMenu = () => {
        navLinks?.classList.remove('active');
        hamburger?.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    hamburger?.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (
            window.innerWidth <= 768 &&
            !e.target.closest('.nav-container') &&
            navLinks?.classList.contains('active')
        ) {
            closeMenu();
        }
    });

    // -----------------------------
    // Dark Mode Toggle
    // -----------------------------
    toggleButton?.addEventListener('change', () => {
        document.body.classList.toggle('darkMode');
    });

    // -----------------------------
    // Typing Effect
    // -----------------------------
    const WORDS = ["Computer Science and Business System Student"];
    const TYPING_SPEED = 100;
    const ERASING_SPEED = 50;
    const PAUSE_DURATION = 2000;

    let wordIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    const typeEffect = () => {
        if (!textElement) return;

        const currentWord = WORDS[wordIndex];

        if (isTyping) {
            if (charIndex < currentWord.length) {
                textElement.textContent += currentWord.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, TYPING_SPEED);
            } else {
                isTyping = false;
                setTimeout(typeEffect, PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, ERASING_SPEED);
            } else {
                isTyping = true;
                wordIndex = (wordIndex + 1) % WORDS.length;
                setTimeout(typeEffect, TYPING_SPEED);
            }
        }
    };

    setTimeout(typeEffect, 500);
});
 document.getElementById('resume').addEventListener('click', function() {
    // URL to the PDF file
    const fileUrl = 'Resume-ayush.pdf'; // Replace with your actual PDF path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Resume-ayush'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

  function showTab(tabId) {
      document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

      document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }



    (function () {
  // Replace this with your actual EmailJS public key
  emailjs.init("service_fb9zan2");
  
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Replace the following IDs with your actual EmailJS Service ID and Template ID
  emailjs.send("P9CRh2PCf0ErjD-gI", "template_mbzcz3b", {
    from_name: name,
    from_email: email,
    message: message
  }).then(function (response) {
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function (error) {
    alert("Failed to send message. Please try again.");
  });
});
