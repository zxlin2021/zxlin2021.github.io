//headercolor
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.nav');
    var heroHeight = document.querySelector('.hero').offsetHeight;

    function checkScroll() {
        if (window.scrollY > heroHeight) {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '1px 1px 4px 0 rgba(0, 0, 0, .1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', checkScroll);

    // Initial check
    checkScroll();
});

//ClickToScroll
$('a[href*="#sec_"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500, 'linear');
})

//Hamburgermenu Btn
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu li');
    const menuBtn = document.getElementById('menu-btn');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuBtn.checked = false;
        });
    });
});

//Scroll To Top
var scroll_Top = $('.scroll-to-top');
scroll_Top.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        scroll_Top.fadeIn();
    } else {
        scroll_Top.stop().fadeOut();
    }
});

//Hero Animation
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        const animationElements = document.querySelectorAll('.hero .animation, .hero .first, .hero .second');
        animationElements.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // trigger reflow
            el.style.animation = '';
        });
    }
});

//Tabs
document.addEventListener("DOMContentLoaded", function () {
    // Set the default tab to "branding"
    const defaultFilter = "branding";
    const tabs = document.querySelectorAll(".works-tab");
    const workItems = document.querySelectorAll(".work-item");

    tabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-filter") === defaultFilter) {
            tab.classList.add("active");
        }
    });

    workItems.forEach(item => {
        item.style.display = item.getAttribute("data-category") === defaultFilter ? "block" : "none";
    });
    // Add event listener for tab click
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            workItems.forEach(item => {
                item.style.display = item.getAttribute("data-category") === filter ? "block" : "none";
            });
        });
    });
});
