
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateIcon();
});

function updateIcon() {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
}

window.addEventListener("load", () => {
 
    document.body.classList.add("dark");
    

    if(!dayNight.querySelector("i")) {
        const icon = document.createElement("i");
        dayNight.appendChild(icon);
    }
    

    updateIcon();
});


if (document.querySelector(".typing")) {
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Web Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,  
        loop: true
    });
}


function redirectToLink(url) {
    window.open(url, '_blank');
}
