// handle navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar").classList.toggle("active");
    header = document.querySelector(".header").classList.toggle("active");
}

//scroll to top 

let arrowTop = document.getElementById('scrollTop');

arrowTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll", () => {

    if (window.scrollY >= 100) {
        arrowTop.classList.add("show");
    } else {
        arrowTop.classList.remove("show");
    }

});

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
        keywords: ["social media",
            "social",
            "media",
            "facebook",
            "instagram",
            "twitter",
            "content creation",
            "account management",
            "community",
            "engagement",
            "ads",
            "paid ads",
            "followers",
            "social marketing"],
        video: "images/services/social-media.mp4",
        placeholder: "images/posters/social-media.png"
    },
    {
        id: 2,
        name: "Media Buying",
        shortDescription: "Targeted paid ads to maximize your ROI.",
        details: "We professionally manage ad campaigns on platforms like Meta and Google, ensuring your budget is used efficiently and results are optimized for maximum return.",
        keywords: [
            "media buying",
            "ads management",
            "paid ads",
            "facebook ads",
            "google ads",
            "roi",
            "advertising",
            "ad campaigns",
            "targeting",
            "budget",
            "marketing",
            "digital ads",
            "performance",
            "campaign optimization"
        ]
        ,
        video: "images/services/media-buying.mp4",
        placeholder: "images/posters/media-buying.png"
    },
    {
        id: 3,
        name: "SEO & SEM",
        shortDescription: "Rank higher in both organic and paid search results.",
        details: "We offer SEO and SEM services to increase your visibility on search engines, using keyword strategies and performance analysis to attract more traffic.",
        keywords: [
            "seo",
            "sem",
            "search engine optimization",
            "search engine marketing",
            "google",
            "keywords",
            "ranking",
            "organic traffic",
            "paid search",
            "ads",
            "website traffic",
            "optimization",
            "google ads",
            "search",
            "visibility"
        ]
        ,
        video: "images/services/SEO-SEM.mp4",
        placeholder: "images/posters/SEO-SEM.png"
    },
    {
        id: 4,
        name: "Media Production",
        shortDescription: "Professional video and photography that reflects your brand.",
        details: "From filming to editing, we produce high-quality promotional videos, commercials, and product photography that captivate your audience.",
        keywords: [
            "media production",
            "video production",
            "photography",
            "filming",
            "editing",
            "commercials",
            "promotional videos",
            "content creation",
            "video",
            "shooting",
            "post production",
            "branding",
            "creative services"
        ]
        ,
        video: "images/services/Media-Production.mp4",
        placeholder: "images/posters/Media-Production.png"
    },
    {
        id: 5,
        name: "Websites",
        shortDescription: "Responsive and modern website design and development.",
        details: "We build custom websites tailored to your needs—corporate sites, e-commerce, or service platforms—with great speed and clean UX/UI.",
        keywords: [
            "website",
            "websites",
            "web design",
            "web development",
            "frontend",
            "backend",
            "responsive design",
            "e-commerce",
            "corporate site",
            "ui",
            "ux",
            "online presence",
            "programming",
            "web apps",
            "custom websites"
        ]
        ,
        video: "images/services/websits.mp4",
        placeholder: "images/posters/websits.png"
    },
    {
        id: 6,
        name: "Mobile Applications",
        shortDescription: "Top-notch Android and iOS mobile app development.",
        details: "We design and develop fast, interactive mobile apps with excellent UI/UX for both Android and iOS platforms, including full technical support.",
        keywords: [
            "mobile apps",
            "mobile application",
            "android",
            "ios",
            "app development",
            "ui",
            "ux",
            "interactive apps",
            "fast apps",
            "mobile design",
            "app support",
            "software development",
            "mobile platform"
        ]
        ,
        video: "images/services/mobile-apps.mp4",
        placeholder: "images/posters/mobile-apps.png"
    },
    {
        id: 7,
        name: "CGI",
        shortDescription: "High-end CGI visuals and 3D rendering.",
        details: "We create photorealistic CGI scenes for ads, products, and architectural visualization using the latest 3D rendering technologies.",
        keywords: [
            "cgi",
            "3d",
            "3d rendering",
            "graphics",
            "visualization",
            "3d modeling",
            "photorealistic",
            "advertising visuals",
            "architectural visualization",
            "rendering",
            "design",
            "animation"
        ]
        ,
        video: "images/services/CGI.mp4",
        placeholder: "images/posters/CGI.png"
    },
    {
        id: 8,
        name: "2D & 3D",
        shortDescription: "Creative 2D and 3D design and animation.",
        details: "We offer professional 2D and 3D animation services for explainer videos, commercials, and interactive presentations with high visual quality.",
        keywords: [
            "2d animation",
            "3d animation",
            "animation",
            "motion graphics",
            "design",
            "illustration",
            "explainer videos",
            "commercials",
            "interactive presentations",
            "creative design",
            "visual effects",
            "cartoon",
            "graphics"
        ]
        ,
        video: "images/services/2D-3D.mp4",
        placeholder: "images/posters/2D-3D.png"
    }
];

// load services

const container = document.getElementById("services-list");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("swiper-slide", "service-card");
    card.innerHTML = `
    <div class="card-background">
      <video autoplay muted loop playsinline class="card-background" poster ="${service.placeholder}" >
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
    // search for service 

    const input = document.querySelector('.search-bar input');
    const slides = document.querySelectorAll('.swiper-slide');

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();

        // إزالة الكلاسات القديمة
        slides.forEach(slide => {
            slide.classList.remove('highlight', 'shake');
        });

        if (query === "") {
            swiperCards.slideToLoop(0);
            return;
        }

        let bestMatchIndex = -1;
        let bestMatchScore = 0;

        services.forEach((service, index) => {
            let score = 0;

            // نقاط أعلى لما الكلمة تظهر في الاسم
            if (service.name.toLowerCase().includes(query)) score += 10;

            // نقاط إضافية لو ظهرت في الوصف القصير
            if (service.shortDescription.toLowerCase().includes(query)) score += 5;

            // نقاط أقل لو ظهرت في التفاصيل الكاملة
            if (service.details.toLowerCase().includes(query)) score += 3;

            // نقاط لو الكلمة تطابق أو جزء منها في keywords
            service.keywords.forEach(keyword => {
                if (keyword.toLowerCase().includes(query)) {
                    score += 7;
                }
            });

            if (score > bestMatchScore) {
                bestMatchScore = score;
                bestMatchIndex = index;
            }
        });

        if (bestMatchIndex !== -1) {
            const slide = slides[bestMatchIndex];

            // تحريك السلايدر للسلايد الأفضل
            swiperCards.slideToLoop(bestMatchIndex);

            // إضافة highlight و animation
            slide.classList.add('highlight', 'shake');
            slide.addEventListener('animationend', () => {
                slide.classList.remove('shake');
            }, { once: true });
        } else {
            // لو مفيش تطابق، يرجع للسلايد الأول
            swiperCards.slideToLoop(0);
        }
    });


});

// read more function

const overlay = document.getElementById('service-overlay');
const overlayVideo = document.getElementById('overlay-video');
const overlayTitle = document.getElementById('overlay-title');
const overlayDetails = document.getElementById('overlay-details');
const overlayCloseBtn = document.getElementById('overlay-close-btn');

function openOverlay(serviceId) {
    const service = services.find(s => s.id === +serviceId);
    if (!service) return;
    overlayVideo.poster = `${service.video}`;
    overlayVideo.innerHTML = `<source src="${service.video}" type="video/mp4">`; // تحديث الفيديو
    overlayVideo.load();
    overlayTitle.textContent = service.name;
    overlayDetails.textContent = service.details;

    overlay.style.display = 'flex';
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-button')) {
        e.preventDefault();
        const id = e.target.getAttribute('data-id');
        openOverlay(id);
    }
});

overlayCloseBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayVideo.pause();
});

// send emails

document.querySelectorAll('.copy-button').forEach(btn => {
    btn.addEventListener('click', function () {
        const textToCopy = btn.getAttribute('data-text');


        navigator.clipboard.writeText(textToCopy).then(() => {

            btn.innerHTML = '<i class="copy-icon fas fa-check"> </i>'

        });
        setTimeout(() => {
            btn.innerHTML = '<i class="copy-icon fas fa-copy "> </i>'

        }, 1000);
    });
});