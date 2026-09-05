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

langBtn.addEventListener(
    "click",
    () => {

        const isArabic =
            document.documentElement.lang
            === "ar";


        if (isArabic) {

            document.documentElement.lang =
                "en";

            document.documentElement.dir =
                "ltr";

            langBtn.textContent =
                "AR";


            document.querySelector(
                ".hero h1"
            ).innerHTML =
                "I'm <span>Yasser Reda</span>";


            document.querySelector(
                ".hero h2"
            ).textContent =
                "Web Developer building modern web experiences";


            document.querySelector(
                ".hero-text"
            ).textContent =
                "A web developer working with clients from more than 4 countries, creating modern, fast and responsive websites using HTML5, CSS and JavaScript, with a focus on user experience and professional design.";

        } else {

            location.reload();

        }

    }
);