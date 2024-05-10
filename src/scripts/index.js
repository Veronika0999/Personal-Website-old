const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav")

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2"); 
    bar3.classList.toggle("animateBar3");
    mobileNav.classList.toggle("openDrawer")     
});

function calculateWorkPeriod() {
    var startDate = new Date('2023-08-01');
    var endDate = new Date(); 
    
    var diff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    var years = Math.floor(diff / 365);
    var months = Math.floor((diff % 365) / 30);
    
    var durationElement = document.getElementById('duration');
    if (endDate.getFullYear() === startDate.getFullYear() && endDate.getMonth() === startDate.getMonth()) {
        durationElement.textContent = "Less than a month";
    } else if (months === 0) {
        durationElement.textContent = years + " yr";
    } else if (years === 0) {
        durationElement.textContent = months + " mos";
    } else {
        var yearsText = (years === 1) ? "yr" : "yrs";
        durationElement.textContent = years + " " + yearsText + " " + months + " mos";
    }
}


window.onload = function() {
    calculateWorkPeriod();
};
