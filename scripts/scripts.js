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
        0: [`Nome: Healthy
            Tipo: Sistema de agendamento de consultas
            Stacks: MongoDB, ExpressJs, ReactJs, NodeJs, \nAxios, JWT-Authentication, Typescript, Tailwind CSS 
            Status: 🟠Finalizando...`
        ],
        1: [`Nome: SoundSea
            Tipo: App de música
            Stacks: ReactJs, Redux, Axios, \nVite, Tailwind CSS
            Status: 🟠Finalizando...`
        ],
        2: [`Nome: Nice Drink
            Tipo: E-Commerce
            Stacks: ReactJs, NextJs, Typescript, \nTailwind CSS, Context Api 
            Status: 🟢Finalizado`
        ],
        3: [`Nome: Add to cart
            Tipo: E-Commerce
            Stacks: React Js, Context Api
            Status: 🟢Finalizado`
        ],
        4: [`Nome: Todo List
            Tipo: Listagem de tarefas
            Stacks: React Js, Context Api
            Status: 🟢Finalizado`
        ], 
        5: [`Nome: Guess the Number
            Tipo: Jogo 
            Stacks: HTML, CSS, Javascript
            Status: 🟢Finalizado
            `]
       
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