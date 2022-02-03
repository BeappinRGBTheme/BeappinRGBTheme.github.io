//Router
var routeName = window.location.href.split('/').pop().split('#')[0].split('?')[0];
var route = false;

if(routeName === '' || routeName === 'index.php') {
     route = 'index';
}



if(route !== false) {
     let script = document.createElement('script');
     script.src = 'https://beappinrgbtheme.github.io/theme/'+route+'/'+route+'.html';
     document.appendChild(script);
}