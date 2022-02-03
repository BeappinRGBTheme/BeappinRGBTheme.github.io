//Router
var routeName = window.location.href.split('/').pop().split('#')[0].split('?')[0];
var route = false;

if(routeName === '' || routeName === 'index.php') {
     route = 'index';
}

if(routeName === 'concepto.php') {
     route = 'concepto';
}



if(route !== false) {
     let script = document.createElement('script');
     script.src = 'https://beappinrgbtheme.github.io/theme/'+route+'/'+route+'.js';
     document.body.appendChild(script);
}