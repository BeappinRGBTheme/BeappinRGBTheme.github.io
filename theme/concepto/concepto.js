document.head+='<meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="https://beappinrgbtheme.github.io/theme/concepto/concepto.css"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css"> <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"> <link rel="stylesheet" href="https://beappinrgbtheme.github.io/theme/main.css"> <title>Beappin API</title>';
document.body.classList.add('dark');
document.body.innerHTML+='<nav class="sidebar close"> <header> <div class="image-text"> <span class="image"> <div class="img" style="background: url('+'https://media.discordapp.net/attachments/922509127433994260/937038276265652254/pequena_col.jpg'+')"></div> </span> <div class="text logo-text"> <span class="name">Pequeña col</span> <span class="profession">6to Grado</span> </div> </div> <i class=\'bx bx-chevron-right toggle\'></i> </header> <div class="menu-bar"> <div class="menu"> <li class="search-box"> <i class=\'bx bx-search icon\'></i> <input type="text" placeholder="Search..."> </li> <ul class="menu-links"> <li class="nav-link"> <a href="#"> <i class=\'bx bx-home-alt icon\'></i> <span class="text nav-text">Inicio</span> </a> </li> <li class="nav-link"> <a href="#"> <i class=\'bx bx-pie-chart-alt icon\'></i> <span class="text nav-text">Clases</span> </a> </li> <li class="nav-link"> <a href="#"> <i class=\'bx bxl-discord-alt icon\'></i> <span class="text nav-text">Vincular</span> </a> </li> <li class="nav-link"> <a href="#"> <i class=\'bx bx-list-ol icon\'></i> <span class="text nav-text">Pruebas</span> </a> </li> <li class="nav-link"> <a href="#"> <i class=\'bx bx-heart icon\'></i> <span class="text nav-text">Envíanos Likes</span> </a> </li> <li class="nav-link settings"> <a style="cursor: pointer;"> <i class="fas fa-cog icon"></i> <span class="text nav-text">Configuración</span> </a> </li> </ul> </div> <div class="bottom-content"> <li class=""> <a href="#"> <i class=\'bx bx-log-out icon\'></i> <span class="text nav-text">Salir</span> </a> </li> </div> </div> <span class="rgb-line"></span> </nav> <section class="content"> <div class="text">Contenido</div> <hr> <p>¿Qué te trae por aquí?</p> <div class="alert-msg info"> Oich k ase bro, tu clase empieza a las 11 </div> <div class="container-elements"> <div class="element"> <span class="left"></span> <span class="right"></span> <span class="top"></span> <span class="bottom"></span> <div class="element__title">POPO</div> <div class="element__img"></div> </div> <div class="element"> <div class="element__title"></div> <div class="element__img"></div> </div> <div class="element"> <div class="element__title"></div> <div class="element__img"></div> </div> </div> </section> <script src="https://beappinrgbtheme.github.io/theme/main.js"></script>'

let BeappinScript = document.createElement('script');
BeappinScript.src="https://resources-beappin.github.io/version/Beappin-1.0.js";
document.body.appendChild(BeappinScript);

Beappin.config.modalAnimationDuration = 100;
Beappin.config.displayErrors = false;

Beappin.themeConfig = [
     {
          "SaveUserAndPassword": {
               value: "Guardar Usuario y Contraseña",
               helpURL: '',
               onChange: (sent) => {
                    Beappin.db.toggle(sent.element.getAttribute('id'), 'true');
               },
               onTrue: () => {
                    if(Beappin.actualPage === 'index.html') {
                         Beappin.config.displayErrors = false;
                         document.querySelectorAll('form')[0].addEventListener('submit', function(e) {
                              let user = document.querySelectorAll('form input')[0];
                              let pass = document.querySelectorAll('form input')[1];
                              if(user.length > 0) Beappin.db.set('user', user.value, true);
                              if(pass.length > 0) Beappin.db.set('pass', pass.value, true);
                         });
                         let user = document.querySelectorAll('form input')[0];
                         if(Beappin.db.get('user') !== null) {
                              user.value=Beappin.db.get('user');
                         }
                         let pass = document.querySelectorAll('form input')[1];
                         if(Beappin.db.get('pass') !== null) {
                              pass.value=Beappin.db.get('pass');
                         }
                    }
               }
          }
     },
     
     {
          "DisplayReminders": {
               value: "Mostrar Recordatorios",
               helpURL: "",
               onChange: (sent) => {
                    Beappin.db.toggle(sent.element.getAttribute('id'), 'true');
               },
               onTrue: () => {
                    if(Beappin.actualPage !== 'index.html') {
                         Beappin.config.displayErrors = false;
                         let style = document.createElement('style');
                         style.innerHTML=".alert-msg { display: flex !important; }";
                         document.head.appendChild(style);
                    }
               }
          }
     }
];

var themeOptions = () => {
     let html = "";
     for(let i = 0; i < Beappin.themeConfig.length; i++) {
          html+='<div class="option"><input id="'+Object.keys(Beappin.themeConfig[i])[0]+'" class="form-check-input mt-0" type="checkbox" value=""><label for="'+Object.keys(Beappin.themeConfig[i])[0]+'">'+Beappin.themeConfig[i][Object.keys(Beappin.themeConfig[i])[0]].value+'</label></div>'
     }
     return html;
}

document.querySelectorAll('.settings')[0].addEventListener('click', () => {
     Beappin.css.toggleModal('<h1 class="title">Panel de Usuario</h1>'+themeOptions(), true)
});

var date = new Date();
var greeting = '';
if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].includes(date.getHours().toString())) greeting = 'Buenos días';
if(['12', '13', '14', '15', '16', '17', '18'].includes(date.getHours().toString())) greeting = 'Buenas tardes';
if(['19', '20', '21', '22', '23'].includes(date.getHours().toString())) greeting = 'Buenas noches';

document.querySelectorAll('.content .text')[0].innerHTML=greeting + ' <span class="username">' + document.querySelectorAll('.text .name')[0].innerHTML + '</span>';

console.log(Beappin.user.intranet.concepto.options())