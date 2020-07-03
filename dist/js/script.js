function scroll(caller, scrollTo) {
    $(caller).click(() => {
        $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 1500)
    });
}

const standardOffset = { offset: '50%' };

$(document).ready(function() {
    ['garage', 'restaurant', 'about', 'history'].forEach(sectionName => {
        scroll(`.js--scroll-to-${sectionName}`, `.js--section-${sectionName}`);
    });

    $('.js--section-about').waypoint(() => {
        $('.proposition').css('animation', 'zoomIn 1s backwards');
    }, standardOffset);

    $('.js--section-garage').waypoint(() => {
        document.querySelectorAll('.garage-info__service').forEach(service => {
            service.style.animation = `zoomIn 1s backwards`;
        });
    }, standardOffset);
});

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}