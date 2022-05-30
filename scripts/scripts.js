const header = document.querySelector(".wrapper-list")
document.addEventListener('scroll', () => {
    let value = window.pageYOffset;
    value.toFixed(0)

    if (window.innerWidth > 768) {
        if (value >= 30) {
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = ' 5px 5px 10px rgba(0, 0, 0, 0.3)'
            header.style.borderRadius = '0 0 15px 15px'
            
        }else if(value === 0){
            header.style.boxShadow = 'initial'
            header.style.borderRadius = 'initial'
        }
    }
})