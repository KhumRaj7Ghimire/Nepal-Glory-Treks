const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
    links.forEach((link)=>{s
        link.classList.toggle('fade')
    })
})
    $(document).ready(function() {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            loop:true,
            nav:true,
            margin:10,
            responsive:{
                0:{
                    items:1
                },
                880:{
                    items:2
                },
                1270:{
                    items:2
                },
                1271:{
                    items:3
                }
            },
            // navText : ["Prev","Next"],
            transitionStyle : "fade",
            autoplay: true,
            pagination : true,
            paginationNumbers: true,
        });
      });