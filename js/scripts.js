
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
let animItems = document.querySelectorAll('.anim-items');
if(animItems.length>0)
{
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params)
    {
        for (let i=0;i<animItems.length;i++)
        {
            const element = animItems[i];
            const elementHeight = element.offsetHeight;
            const elementOffset = offset(element).top;
            const animStart=4;
            let elementPoint=window.innerHeight- elementHeight/animStart;
            if(elementHeight>window.innerHeight)
            {
                elementPoint = window.innerHeight - window.innerHeight/animStart;
            }
            if((pageYOffset > elementOffset - elementPoint) && pageYOffset <(elementOffset + elementHeight) )
            {
                element.classList.add('active');
            }

        }
    }
    function offset(el)
    {
        const rect = el.getBoundingClientRect();
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left:rect.left+ scrollLeft}
    }
    animOnScroll();
}
$( "#target" ).click(function() {
    document.getElementById("team").scrollIntoView({behavior: 'smooth'});
});
document.getElementById("animInput").onkeypress = function() {myFunction()};

function myFunction() {
    document.getElementById("animInput").style.backgroundColor = "red";
}
$("#form_message").keypress(function()
{
    let str = $("#form_message").val();
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    document.getElementById('wordCount').innerHTML
        = 'Word Count:' + str.split(' ').length;
})
$("#button-addon2").click(function ()
{
    document.getElementById("sound").play();
})
$("#foot-lbl").mouseover(function()
{
    $(this).css("color", "blue");
})
$("#foot-lbl").mouseout(function()
{
    $(this).css("color", "white");
})

