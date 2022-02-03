document.querySelectorAll('html')[0].setAttribute('lang', 'es');
document.head.innerHTML+='<meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="https://beappinrgbtheme.github.io/theme/index/index.css"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> <title>Beappin API</title>';
document.body.innerHTML+='<div class="container-bg"> </div> <div class="container-form"> <span class="lights"></span> <form action="http://appu.educarperu.com/index.php" class="form" method="post"> <h1 class="title">APPU Intranet</h1> <h2 class="title" style="font-size: 20px;">Iniciar sesión</h2> <input type="text" name="usuario"> <input type="password" name="clave"> <p style="margin-top: 1rem;">Captcha</p> <div class="captcha-img"> <div class="img"></div> <div class="bg"></div> </div> <input type="text" maxlength="3" style="text-transform: uppercase;" name="captcha"> <input type="submit"> </form> </div>';

Beappin.config.displayErrors = false;


//Beappin.db.find() ? (encontrado) : (no se encontro/no se ha dado un parámetro)