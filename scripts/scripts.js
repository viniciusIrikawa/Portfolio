const header = document.querySelector(".nav-menu")
document.addEventListener('scroll', () => {
    let value = window.scrollY;
    value.toFixed(0)

    if (value >= 30) {
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = ' 5px 5px 10px rgba(0, 0, 0, 0.3)'

    }else if(value === 0){
        header.style.background = 'transparent'
        header.style.boxShadow = 'initial'
    }
})