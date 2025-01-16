document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var burgerMenu = document.getElementById('burger-menu');
    var menuItems = document.getElementById('menu-items');
    const formation_article_content = document.getElementById('formation_article_content');
    var menuLinks = document.querySelectorAll('#menu-items a');
    

    window.addEventListener('resize', checkWindowSize);
    window.addEventListener('load', checkWindowSize);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-white');
            header.classList.remove('header-transparent');
            burgerMenu.classList.add('burger-menu-black');
            burgerMenu.classList.remove('burger-menu-white');
        } else {
            header.classList.add('header-transparent');
            header.classList.remove('header-white');
            if (menuItems.classList.contains('active')) {
                burgerMenu.classList.add('burger-menu-black');
                burgerMenu.classList.remove('burger-menu-white');
            } else {
                burgerMenu.classList.add('burger-menu-white');
                burgerMenu.classList.remove('burger-menu-black');
            }
        }
    });

    burgerMenu.addEventListener('click', function() {
        menuItems.classList.toggle('active');
        if (menuItems.classList.contains('active')) {
            burgerMenu.classList.add('burger-menu-black');
            burgerMenu.classList.remove('burger-menu-white');
        } else {
            if (window.scrollY > 50) {
                burgerMenu.classList.add('burger-menu-black');
                burgerMenu.classList.remove('burger-menu-white');
            } else {
                burgerMenu.classList.add('burger-menu-white');
                burgerMenu.classList.remove('burger-menu-black');
            }
        }
    });

    // Initial check
    if (window.scrollY > 50) {
        header.classList.add('header-white');
        burgerMenu.classList.add('burger-menu-black');
    } else {
        header.classList.add('header-transparent');
        burgerMenu.classList.add('burger-menu-white');
    }


  

    function checkWindowSize() {

        if (window.innerWidth < 1075) {
            formation_article_content.classList.remove('width60');
            menuLinks.forEach(function(link) {
                link.classList.remove('menu');
            });

        } else {
            formation_article_content.classList.add('width60');
            menuLinks.forEach(function(link) {
                link.classList.add('menu');
            });
        }
    }
 
});
document.addEventListener("DOMContentLoaded", function () {
    const skillsPanel = document.getElementById("skills-panel");
    const skillDetails = document.getElementById("skill-details");
    const drawerBtn = document.getElementById("drawer-btn");
    const dynamicBackground = document.querySelector(".dynamic-background");

    // Gestionnaire d'événement pour chaque compétence
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("click", () => {
            const skillName = skill.dataset.skill.toLowerCase();

            // Anime la sortie des compétences
            skillsPanel.classList.add("hidden");

            dynamicBackground.style.display = "none";

            // Affiche le bouton tiroir plus tôt
            drawerBtn.classList.add("show");

            const activeDetail = document.getElementById(`detail-${skillName}`);
            if (activeDetail) {
                activeDetail.classList.add("show");
            }
        });
    });

    // Bouton tiroir pour revenir à la liste des compétences
    drawerBtn.addEventListener("click", () => {
        // Cache les détails
        document.querySelectorAll(".skill-detail").forEach(detail => {
            detail.classList.remove("show");
        });
        // Réaffiche les compétences après un délai pour l'animation
        
        skillsPanel.classList.remove("hidden");

        // Cache le bouton tiroir après la transition
        drawerBtn.classList.remove("show");

        dynamicBackground.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".dynamic-background");
    const logos = ["docker.png", "python.webp", "C.png", "CSS3.png", "github.png", "HTML5.png", "java.png", "JavaScript.png", "PHP.webp", "PhpMyAdmin.png", "PuTTY.png", "symfony.png", "Visual_Studio_Code.png"]; // Remplacez par vos logos

    function generatePositionOutside() {
        const side = Math.floor(Math.random() * 4);
        switch (side) {
            case 0: return { x: "-10vw", y: `${Math.random() * 100}vh` }; // Gauche
            case 1: return { x: "110vw", y: `${Math.random() * 100}vh` }; // Droite
            case 2: return { x: `${Math.random() * 100}vw`, y: "-10vh" }; // Haut
            case 3: return { x: `${Math.random() * 100}vw`, y: "110vh" }; // Bas
        }
    }

    function generatePositionInside() {
        return { x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` };
    }

    function generateRandomSize() {
        return `${Math.random() * 50 + 50}px`; // Taille entre 50px et 80px
    }

    function addMovingLogo() {
        const img = document.createElement("img");
        img.src = `assets/ressources/images/${logos[Math.floor(Math.random() * logos.length)]}`;

        // Génère une position de départ et de fin
        const start = generatePositionOutside();
        const end = generatePositionOutside();

        // Applique les positions comme variables CSS
        img.style.setProperty("--start-x", start.x);
        img.style.setProperty("--start-y", start.y);
        img.style.setProperty("--end-x", end.x);
        img.style.setProperty("--end-y", end.y);

        // Applique une taille aléatoire
        const size = generateRandomSize();
        img.style.width = size;

        // Définit une durée d'animation aléatoire
        img.style.animationDuration = `${Math.random() * 5 + 5}s`;

        // Ajoute l'image au conteneur
        background.appendChild(img);

        // Supprime l'image après l'animation
        setTimeout(() => img.remove(), parseFloat(img.style.animationDuration) * 1000);
    }

    // Ajoute un nouveau logo toutes les 500ms
    setInterval(addMovingLogo, 500);
});


document.addEventListener("DOMContentLoaded", () => {
    // Slider de projets
    const projectSlider = document.querySelector(".project-slider .slider-wrapper");
    const prevSlideBtn = document.querySelector(".prev-slide");
    const nextSlideBtn = document.querySelector(".next-slide");
    let currentSlide = 0;

    function updateProjectSlider() {
        const slideWidth = projectSlider.querySelector(".slide").offsetWidth;
        projectSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevSlideBtn.addEventListener("click", () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : projectSlider.children.length - 1;
        updateProjectSlider();
    });

    nextSlideBtn.addEventListener("click", () => {
        currentSlide = (currentSlide < projectSlider.children.length - 1) ? currentSlide + 1 : 0;
        updateProjectSlider();
    });

    window.addEventListener("resize", updateProjectSlider);

    // Navigation entre les détails des skills
    document.querySelectorAll("a[href^='#detail-']").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").replace("#", "");
            document.querySelectorAll(".skill-detail").forEach(detail => detail.classList.remove("show"));
            document.getElementById(targetId).classList.add("show");
        });
    });
});
  