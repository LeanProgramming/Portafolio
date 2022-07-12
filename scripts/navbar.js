/* navbar_content = 
`
<div class="navigation">
    <div>
        <h1>Mi Portafolio</h1>
    </div>
    <ul>
        <li class="list active">
            <a href="/index.html#portafolio">
                <span class="icon">
                    <i class="fas fa-briefcase"></i>
                </span>
                <span class="text">Portafolio</span>
                </span>
            </a>
        </li>
        <li class="list">
            <a href="/templates/aboutme.html">
                <span class="icon">
                    <i class="fas fa-question"></i>
                </span>
                <span class="text">Acerca de</span>
                </span>
            </a>
        </li>
        <li class="list">
            <a href="/templates/contact.html">
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
`;

navbar = document.getElementById("navbar");
navbar.innerHTML = navbar_content;


const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach(item => item.addEventListener('click', activeLink));
 */