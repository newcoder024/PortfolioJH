
/* open sidebar */
function openSidebar(){
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex";
}

/* close sidebar */
function closeSidebar(){
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
}

function moreBtn(){
    document.getElementById("About").scrollIntoView({behavior: "smooth"});
}
function moveToProjects(){
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
}

//scroll background animation
document.addEventListener("scroll", function() { /* wanneer je scrollt, word een functie uitgevoerd */
    let scrollValue = window.scrollY; /* hoe meer je scrollt, hoe hoger de waarde van scrollY */

    let leftCircle = document.getElementById("left-circle")
    if (leftCircle){
        let speed = 0.2; /* beweegt 20% */
        leftCircle.style.transform = `translateY(${scrollValue * speed}px)`; 
        /* bvb als scrollValue =100px, doe je 100 x 20 = translateY(20px) */
    }

    let rightCircle = document.getElementById("right-circle")
    if (rightCircle){
        let speed = 0.1; /* beweegt 10% */
        rightCircle.style.transform= `translateY(${-scrollValue * speed}px)`;
        /* zelfde als hierboven, alleen -scroll value zodat de cirlkel omlaag gaat ipv omhoog */
    }
});

const topBtn = document.getElementById("top-btn")
window.onscroll = () => { /* wnr de user scrollt word alles na { uitgevoerd */
    topBtn.style.display = window.scrollY > 500 ? "block" : "none"; /* als de user meer dan 500px scrollt verdwijnt de button */
}
topBtn.onclick = () => window.scrollTo ({top:0, behavior: "smooth"}); /* wnr je op de btn klikt word je naar de top gestuurd (top=0) */


const observer = new IntersectionObserver((entries) => { //bekijkt element en verteld wnr een nieuw element in vieport komt
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){ //true wnr in de viewport
            entry.target.classList.add("show");
        } else { // als het element niet in de vieport is
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el)); //loopt door alle elementen met een "hidden" class en verteld de observer om het element te tracken