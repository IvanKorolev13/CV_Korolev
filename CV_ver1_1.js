document.addEventListener('DOMContentLoaded', () => {
    const goal = document.querySelector('#goal');
    const header = document.querySelector('.header');

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let goalSet = goal.offsetHeight;

        if (scrollTop >= goalSet){
            header.classList.add('fixed');
            goal.style.marginTop = `${header.offsetHeight}px`;
        }else{
            header.classList.remove('fixed');
            gaol.style.marginTop = `0px`;
        }
    };
/*
    const scrollItems = document.querySelectorAll('.scrollItem');
    const scrollAnimation = () =>{
        let scrollTop = window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (scrollTop >= scrollOffset){
                el.classList.add('animationClass');
            }else{
                el.classList.remove('animationClass');
            }
        })
    };
*/
    headerFixed();
    /*scrollAnimation();*/
    window.addEventListener('scroll', () => {
        headerFixed();
        /*scrollAnimation();*/
    });
});