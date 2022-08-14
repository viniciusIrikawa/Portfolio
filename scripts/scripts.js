const headerBar = () => {
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
}
headerBar();


const tooltip = () => {
    const cardIndex = {
        0: ["Projeto: Add to cart \nBiblioteca: React Js \nResponsivo: 🟢 \nStatus: 🟢Finalizado"],
        1: ["Projeto: Todo List \nBiblioteca: React Js \nResponsivo: 🟢 \nStatus: 🟠Finalizando..."], 
        2: ["Projeto: Guess the Number \nLinguagens: HTML, CSS, JS \nResponsivo: 🟢 \nStatus: 🟢Finalizado"],
        3: ["Projeto: Search Movies\nLinguagens: HTML, CSS, JS \nResponsivo: 🟢 \nStatus: 🟢Finalizado"]
    };

    const tooltip = document.querySelector('.tooltip');
    const cards = document.querySelectorAll(".card-project");

    cards.forEach((card, index) => {
        card.addEventListener('mousemove', (e) => {
            Object.values(cardIndex[index]).map(value => {
                tooltip.innerText = value;
            })

            let x = e.clientX,
                y = e.clientY;

            tooltip.style.left = (x + 20) + 'px';   
            tooltip.style.top = (y + 20) + 'px';   
        })
    })

}
tooltip();