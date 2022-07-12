//Partículas que siguen al mouse
document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let particles = document.createElement('span');
    particles.classList.add('mouse_particles')
    let x = e.pageX;
    let y = e.pageY;
    particles.style.left = x +'px';
    particles.style.top = y +'px';
    let size = Math.random() * 8;
    particles.style.width =  size + 'px';
    particles.style.height = size + 'px';

    let transformValue = Math.random() * 360;
    particles.style.transform = 'rotate('+ transformValue +'deg)';

    body.appendChild(particles);

    setTimeout(function(){
        particles.remove()
    }, 2000)
})
//

//Tarjetas 
class Card {
    constructor(img, title, description, tags, repo, link){
        this.img = img;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.repo = repo;
        this.link = link;
    };

    createCard() {
        let card = document.createElement("div");
        let tags_text = ""; 
        this.tags.forEach(tag => tags_text += `<span class="${tag}"></span>`)
        card.innerHTML = 
            `
            <div class="card">
            <div class="card-img-box">
                <img class="card-img" src="${this.img}" alt="Card Image">
            </div>
            <div class="card-body">
                <div class="card-content">
                    <h2 class="card-title">${this.title}</h2>
                    <p class="card-description">${this.description}</p>
                    <p>Herramientas utilizadas:</p>
                    <div class="tags">
                        ${tags_text}
                    </div>
                </div>
                <div class="card-footer">
                <ul>
                    <li><a href="${this.link}" target="_blank"><i class="fas fa-link"></i></a></li>
                    <li><a href="${this.repo}" target="_blank"><i class="fas fa-file-code"></i></a></li>
                </ul>
            </div>
            </div>
            
            `;
        return card;
    }

}

lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium optio a quia iusto dignissimos reprehenderit, facere perspiciatis accusamus. Molestias modi iure excepturi, blanditiis iusto animi ducimus. Ut, ipsum id.";
pages = [
    {
        img: "img/crimi-para-todxs.png",
        title: "Crimi para todxs",
        description: "Página dedicada a incluir información relacionada a la criminalística.",
        tags: ["html", "css", "js", "vue"],
        repo: "https://github.com/LeanProgramming/crimi_para_todxs.git",
        link: "https://leanprogramming.github.io/crimi_para_todxs/"
    },
    {
        img: "img/sistema-crud-python.png",
        title: "Sistema CRUD",
        description: "Sistema de creación, lectura, modificación y eliminación de usuarios (CRUD).",
        tags: ["html", "css", "js", "python", "flask", "sql"],
        repo: "https://github.com/LeanProgramming/CRUD_Python.git",
        link:"http://leanlelu15.pythonanywhere.com/"
    },
    {
        img: "img/sistema-login-python.png",
        title: "Sistema Login",
        description: "Sistema de login, alta de un nuevo usuario y su correspondiente ingreso.",
        tags: ["html", "css", "js", "python", "flask", "sql"],
        repo: "ghttps://github.com/LeanProgramming/sistema_login.git",
        link:"https://leanlelu.pythonanywhere.com/"
    },
    {
        img: "img/frontend-java.png",
        title: "TP - FrontEnd",
        description: "Trabajo Práctico-FrontEnd realizado para el curso de Fullstack Java del programa Codo a Codo 4.0." ,
        tags: ["html", "css", "js"],
        repo: "https://github.com/LeanProgramming/java-front-integrador.git",
        link:"https://leanprogramming.github.io/java-front-integrador/"
    },
    {
        img: "img/monmon-proyect.png",
        title: "Monmon-Proyect",
        description: "Juego web al estilo de pokemon realizado con JS.",
        tags: ["html", "css", "js"],
        repo: "https://github.com/LeanProgramming/monmon_proyect.git",
        link:"https://leanprogramming.github.io/monmon_proyect/"
    }
]

//

//Contenidos

let index = `
    <div id="divider"></div>
    <h1 id="portafolio" class="title">PORTAFOLIO</h1>
    <div id="content"></div>
`;

let about = `
<div id="intro">
    <div id="presentation">
        <div id="presentation-titles">
            <h2>Leandro M. Muñoz</h2>
            <h2>Licenciado en Criminalística</h2>
            <h3>Estudiante en Lic. en Sistemas de Información</h3>
            <h3>Desarrollador Full-Stack</h3>
        </div>
        <div id="presentation-photo">
            <img id="my_photo" src="img/leandromunoz.JPG" alt="Leandro M Muñoz-Fotografía">
        </div>
    </div>
    
    <div id="my_description">
        <p>
            Mi nombre es Leandro Manuel Muñoz, soy Licenciado en Criminalística recibido del
            Instituto de Criminalística y Criminología de la Universidad Nacional del Nordeste
            (UNNE) en la ciudad de Corrientes. Actualmente estudio la carrera de Licenciatura en
            Sistemas de Información en la Facultad de Ciencias Exactas y Naturales y Agrimensura
            (FaCENA) de la UNNE y además realicé el curso para Desarrollador Web Full-Stack, que forma
            parte del Programa Codo a Codo 4.0, brindado por el Gobierno de la Ciudad de Buenos Aires.
            El presente portafolio tiene su origen como proyecto del curso mencionado y en el cual 
            trato de mostrar mis trabajos desarrollados en los cuales plasmo los conocimientos 
            adquiridos hasta el momento.
        </p>
    </div>
</div>
`;

let contact = `
<div id="contact"></div>
`;

navbar_content = 
`
<div class="navigation">
    <div>
        <h1>Mi Portafolio</h1>
    </div>
    <div>
        <ul>
            <li class="list active">
                <a href="#portafolio">
                    <span class="icon">
                        <i class="fas fa-briefcase"></i>
                    </span>
                    <span class="text">Portafolio</span>
                    </span>
                </a>
            </li>
            <li class="list">
                <a href="#intro">
                    <span class="icon">
                        <i class="fas fa-question"></i>
                    </span>
                    <span class="text">Acerca de</span>
                    </span>
                </a>
            </li>
            <li class="list">
                <a href="#contact">
                    <span class="icon">
                        <i class="fas fa-address-book"></i>
                    </span>
                    <span class="text">Contacto</span>
                    </span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</div>
`;

navbar = document.getElementById("navbar");
navbar.innerHTML = navbar_content;

const list = document.querySelectorAll('.list');
let main = document.getElementById('main')


function activeLink() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active')
    if (list[0].classList.contains('active')) {
        main.innerHTML = index;
        for (page of pages) {
            let card = new Card(page['img'], page['title'], page['description'], page['tags'], page['repo'], page['link']).createCard()
            content = document.getElementById("content");
            content.appendChild(card);
        }
        intro = document.getElementById('introduction');
        intro.innerHTML = `
        <div id="welcome">
            <h1>¡BIENVENIDXS!</h1>
        </div>
        <div id="logo">
            <div id="profile-img">
                <img src="img/logo.JPG" alt="Index Img">
            </div>
            <h1>Hola, soy Leandro Muñoz</h1>
            <h3>y te doy la bienvenida a mi portafolio virtual</h3>
        </div>
        `;
    } else if(list[1].classList.contains('active')) {
        main.innerHTML = about;
        intro = document.getElementById('introduction');
        intro.innerHTML = " ";
    } else {
        main.innerHTML = contact
        intro = document.getElementById('introduction');
        intro.innerHTML = " ";
    }
    divider = document.getElementById("divider");
    divider.innerHTML = `
    <div class="divider-bar"></div>
    <div class="divider-icon"><i class="fas fa-angle-double-down"></i></div>
    <div class="divider-bar"></div>
    `;
}
list.forEach(item => item.addEventListener('click', activeLink));