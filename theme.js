window.localStorage.removeItem('PageLoaded');
var webFile = window.location.href.split('/').pop().split('#')[0].split('?')[0];
if(webFile === 'index.php' || webFile === '') var webFileName = 'index';
alert(webFileName)
if(webFileName) {
     var ScriptPageURL = 'https://rgb-theme.onrender.com/ThemePages/'+webFile+'/'+webFile+'.js';
     var ScriptPage = document.createElement('script');
     ScriptPage.src = ScriptPageURL;
     document.body.appendChild(ScriptPage);
}