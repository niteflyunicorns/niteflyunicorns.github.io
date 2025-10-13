class Header extends HTMLElement {
    connectedCallback() {
	this.innerHTML = `
      <!-- Navbar Start -->
      <div class="container-fluid p-0 nav-bar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark py-3" id="navbar">
	  <a href="index.html" class="logo">
            <img src="./assets/imgs/logo.png">
          </a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse <!--justify-content-between-->" id="navbarCollapse">
            <button class="navbar-close">&times;</button>
            <div class="navbar-nav">
            <!-- <div class="navbar-nav ml-auto p-4"> -->
              <a href="index.html" class="nav-item nav-link fade-link">Home</a>
              <a href="portfolio.html" class="nav-item nav-link fade-link">Portfolio</a>
              <a href="reel.html" class="nav-item nav-link fade-link">Reel</a>
	      <a href="resume.html" class="nav-item nav-link fade-link">Resume</a>
	      <a href="research.html" class="nav-item nav-link fade-link">Research</a>
              <a href="about.html" class="nav-item nav-link fade-link">About</a>
              <a href="contact.html" class="nav-item nav-link fade-link">Contact</a>
            </div>
          </div>
        </nav>
      </div>
      <!-- Navbar End -->`
    }
}

// Highlight current link
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav-header a").forEach(link => {
	if (link.getAttribute("href") === currentPage) {
	    link.classList.add("active");
	}
    });
});


class Footer extends HTMLElement {
    connectedCallback() {
	this.innerHTML = `
    <!-- Footer Start -->
    <footer class="footer">
      <div class="social-icons">
	<a href="https://www.instagram.com/niteflyunicorns.animation" class="social-icon">
	  <img src="assets/icons/instagram.svg" alt="instagram" >
	</a>
	<a href="https://github.com/niteflyunicorns" class="social-icon">
	  <img src="assets/icons/github.svg" alt="github" >
	</a>
	<a href="https://www.youtube.com/@niteflyunicorns" class="social-icon">
	  <img src="assets/icons/youtube.svg" alt="youtube" >
	</a>
	<a href="https://www.linkedin.com/in/savannah-chappus-b716191b7/" class="social-icon">
	  <img src="assets/icons/linkedin.svg" alt="linkedin" >
	</a>
      </div>
      
    </footer>
    <!-- Footer End -->`
    }
}


customElements.define('nav-header', Header);
customElements.define('nav-footer', Footer);


// $(document).ready(function() {
//     const $toggler = $('.navbar-toggler');
//     const $menu = $('.navbar-collapse');

//     // Open menu
//     $toggler.on('click', function(e) {
//         e.stopPropagation(); // Prevent immediate closing
//         $menu.addClass('show');
//         $toggler.hide();
//     });

//     // Close menu when clicking outside or on a link
//     $(document).on('click', function() {
//         if ($menu.hasClass('show')) {
//             $menu.removeClass('show');
//             $toggler.show();
//         }
//     });

//     // Prevent clicks inside menu from closing
//     $menu.on('click', function(e) {
//         e.stopPropagation();
//     });

//     // Close menu when clicking a nav link
//     $menu.find('a').on('click', function() {
//         $menu.removeClass('show');
//         $toggler.show();
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-collapse');

    // Add close button dynamically if it doesn't exist
    let closeBtn = menu.querySelector('.navbar-close');
    if (!closeBtn) {
        closeBtn = document.createElement('button');
        closeBtn.className = 'navbar-close';
        closeBtn.textContent = '×';
        menu.prepend(closeBtn);
    }

    // Open menu
    toggler.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.add('show');
    });

    // Close menu when clicking the close button
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('show') && !menu.contains(e.target) && e.target !== toggler) {
            menu.classList.remove('show');
        }
    });

    // Prevent clicks inside menu from closing
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking a nav link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
});
