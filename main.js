// handle navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar").classList.toggle("active");
    header = document.querySelector(".header").classList.toggle("active");
}
// cards hover 
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

for (const card of document.querySelectorAll(".Statistics-card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

document.querySelector(".about-card").onmousemove = e => handleOnMouseMove(e);

// count numbers with scroll

let nums = document.querySelectorAll('.statistics-num');
let aboutSection = document.querySelector(".Statistics-section");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= aboutSection.offsetTop - 600) {
        if (!started) {
            setTimeout(() => {
                nums.forEach((num) => startCount(num));
            }, 100);
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    // let count = 0;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter)
        }
    }, 2000 / goal)
}

// add animations with scroll

const observer = new IntersectionObserver((entries, obeserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animate;
            entry.target.classList.add(`${animationType}`);
            observer.unobserve(entry.target);
        };
    })
})

document.querySelectorAll(".animate").forEach(section => {
    observer.observe(section);
})

// services
const services = [
    {
        id: 1,
        name: "Social Media",
        shortDescription: "Account management and engaging content creation for social media.",
        details: "We manage your social media accounts by creating tailored content, scheduling posts, responding to followers, and analyzing performance to grow your audience.",
        keywords: ["social media", "ads", "content", "facebook", "instagram", "community"],
        video: "images/services/social-media.mp4"
    },
    {
        id: 2,
        name: "Media Buying",
        shortDescription: "Targeted paid ads to maximize your ROI.",
        details: "We professionally manage ad campaigns on platforms like Meta and Google, ensuring your budget is used efficiently and results are optimized for maximum return.",
        keywords: ["media buying", "paid ads", "facebook ads", "google ads", "roi", "ads management"],
        video: "images/services/media-buying.mp4"
    },
    {
        id: 3,
        name: "SEO & SEM",
        shortDescription: "Rank higher in both organic and paid search results.",
        details: "We offer SEO and SEM services to increase your visibility on search engines, using keyword strategies and performance analysis to attract more traffic.",
        keywords: ["seo", "sem", "search engine", "keywords", "google", "optimization"],
        video: "images/services/SEO-SEM.mp4"
    },
    {
        id: 4,
        name: "Media Production",
        shortDescription: "Professional video and photography that reflects your brand.",
        details: "From filming to editing, we produce high-quality promotional videos, commercials, and product photography that captivate your audience.",
        keywords: ["media", "video", "production", "editing", "shooting", "content creation"],
        video: "images/services/Media-Production.mp4"
    },
    {
        id: 5,
        name: "Websites",
        shortDescription: "Responsive and modern website design and development.",
        details: "We build custom websites tailored to your needs—corporate sites, e-commerce, or service platforms—with great speed and clean UX/UI.",
        keywords: ["web", "web design", "website development", "frontend", "backend", "online presence"],
        video: "images/services/websits.mp4"
    },
    {
        id: 6,
        name: "Mobile Applications",
        shortDescription: "Top-notch Android and iOS mobile app development.",
        details: "We design and develop fast, interactive mobile apps with excellent UI/UX for both Android and iOS platforms, including full technical support.",
        keywords: ["mobile", "app", "android", "ios", "application", "development"],
        video: "images/services/mobile-apps.mp4"
    },
    {
        id: 7,
        name: "CGI",
        shortDescription: "High-end CGI visuals and 3D rendering.",
        details: "We create photorealistic CGI scenes for ads, products, and architectural visualization using the latest 3D rendering technologies.",
        keywords: ["cgi", "3d", "graphics", "rendering", "visualization", "design"],
        video: "images/services/CGI.mp4"
    },
    {
        id: 8,
        name: "2D & 3D",
        shortDescription: "Creative 2D and 3D design and animation.",
        details: "We offer professional 2D and 3D animation services for explainer videos, commercials, and interactive presentations with high visual quality.",
        keywords: ["2d", "3d", "animation", "motion graphics", "design", "illustration"],
        video: "images/services/2D-3D.mp4"
    }
];

// load services

const container = document.getElementById("services-list");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("swiper-slide", "card-article");
    card.innerHTML = `
    <div class="card-background">
      <video autoplay muted loop playsinline class="card-background">
        <source src="${service.video}" type="video/mp4" />
      </video>
    </div>
    <div class="card-data">
      <h3 class="card-name">${service.name}</h3>
      <p class="card-description">${service.shortDescription}</p>
      <a href="#" class="card-button" data-id="${service.id}">Read More</a>
    </div>
  `;
    container.appendChild(card);
});

window.addEventListener('DOMContentLoaded', () => {
    const swiperCards = new Swiper('.services-container.swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 32,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

});

