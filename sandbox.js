const burgerMenu = document.querySelector('.fa-bars');
burgerMenu.addEventListener('click', () => {
    const navElement = document.querySelector('.navBar');
    navElement.style.top = '0';
});

const burgerMenuClose = document.querySelector('.fa-xmark');
burgerMenuClose.addEventListener('click', () => {
    const navElement = document.querySelector('.navBar');
    navElement.style.top = '-150%';
});

const hoverValues = document.querySelectorAll('.hoverValue');

hoverValues.forEach((value) => {
    let newValue = value.addEventListener('click', () => {
        const navElement = document.querySelector('.navBar');
        navElement.style.top = '-150%';
    })
});

const RightBtn = document.querySelector('.fa-arrow-right');

RightBtn.addEventListener('click', () => {
    let cerContainer = document.querySelector('.cerContainer');
    cerContainer.style.transition = "1s ease-in-out";
    cerContainer.style.right = "100vw";
});

const leftBtn = document.querySelector('.fa-arrow-left');

leftBtn.addEventListener('click', () => {
    let cerContainer = document.querySelector('.cerContainer');
    cerContainer.style.right = "0vw";
});

const enlargeImg = document.querySelectorAll(".cerImg img");

function enlargeImage(img) {
    var enlargedImg = document.createElement("div");
    enlargedImg.className = "enlarged-img";
    enlargedImg.innerHTML = '<img src="' + img.src + '" alt="">';
    document.body.appendChild(enlargedImg);

    enlargedImg.onclick = function () {
        document.body.removeChild(enlargedImg);
    };
}

const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show")
            appearOnScroll.unobserve(entry.target)
        }
    });
},
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
});

window.addEventListener("load", () => {
    var loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzbso7lL7-caqVtAqkrTdwXvwdcs_z4nqXruFIgn07BHJpwpai4WrGdX4wnvsOqCDrucQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const credentials = document.getElementsByClassName(".input");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank's for Messaging i will get back to you soon..."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
