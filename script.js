const body = document.body;

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".nav-links");

const themeBtn =
    document.getElementById("themeBtn");

const langBtn =
    document.getElementById("langBtn");

const cursor =
    document.querySelector(".cursor-glow");



/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });



/* =========================
   DARK / LIGHT MODE
========================= */

themeBtn.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        themeBtn.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeBtn.textContent = "☼";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* حفظ الثيم */

if (
    localStorage.getItem("theme")
    === "light"
) {

    body.classList.add("light");

    themeBtn.textContent = "☾";

}



/* =========================
   MOUSE GLOW
========================= */

window.addEventListener(
    "mousemove",
    event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    }
);



/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(
        ".reveal, .skill"
    )
    .forEach(element => {

        observer.observe(element);

    });



/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    [
        ...document.querySelectorAll(
            "main section[id]"
        )
    ];

const links =
    [
        ...document.querySelectorAll(
            ".nav-links a"
        )
    ];


window.addEventListener(
    "scroll",
    () => {

        let current = "home";


        sections.forEach(section => {

            if (
                window.scrollY >=
                section.offsetTop - 180
            ) {

                current =
                    section.id;

            }

        });


        links.forEach(link => {

            link.classList.toggle(
                "active",

                link.getAttribute("href")
                === "#" + current
            );

        });

    }
);



/* =========================
   LANGUAGE BUTTON
========================= */

langBtn.addEventListener("click", () => {

    const isArabic = document.documentElement.lang === "ar";

    if (!isArabic) {
        location.reload();
        return;
    }

    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    langBtn.textContent = "AR";

    const setText = (selector, values) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            if (values[index]) element.textContent = values[index];
        });
    };

    setText(".nav-links a", ["Home", "About", "Skills", "Projects", "Contact"]);
    setText(".availability", ["Available for freelance work"]);
    document.querySelector(".hero h1").innerHTML = "I'm <span>Yasser Reda</span>";
    document.querySelector(".hero h2").textContent = "Web Developer building modern web experiences";
    document.querySelector(".hero-text").textContent = "A web developer working with clients from more than 4 countries, creating modern, fast and responsive websites using HTML5, CSS and JavaScript, with a focus on user experience and professional design.";
    setText(".hero-buttons .btn", ["View my work ↗", "WhatsApp →"]);
    setText(".hero-stats span", ["Languages", "Clients"]);

    setText(".about .eyebrow, .skills .eyebrow, .projects .eyebrow, .contact .eyebrow", ["ABOUT ME", "MY SKILLS", "SELECTED WORK", "LET'S WORK TOGETHER"]);
    setText(".section-heading h2", ["Why work with me?", "Skills", "Projects"]);
    document.querySelector(".profile-card > p").textContent = "Front-End / Web Developer";
    setText(".feature h3", ["Speed and performance", "Responsive", "Attention to detail"]);
    setText(".feature p", [
        "Fast and lightweight websites focused on performance and user experience.",
        "Responsive designs that work perfectly on mobile, tablet and desktop.",
        "Careful attention to visual details, layout, usability and professional appearance."
    ]);

    setText(".project h3", ["Landing Page", "Business Website", "Interactive Website"]);
    setText(".project p", [
        "A modern and fast landing page with a professional design and clear user experience.",
        "A responsive business website presenting services and information in an organized, professional way.",
        "An interactive website with simple animations and transitions to improve user experience."
    ]);
    setText(".project a", ["Request a similar design ↗", "Request a similar design ↗", "Request a similar design ↗"]);

    setText(".contact-box h2", ["Ready to start your project?"]);
    setText(".contact-box > p:not(.eyebrow)", ["Have an idea for a website? Send me the details and let's get started."]);
    setText(".contact-actions .btn", ["Contact me on WhatsApp ↗"]);
    setText("footer a", ["Back to top ↑"]);
});